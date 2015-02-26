var util = require ('util')
var signup_page = require('./signup_page.js');
//var landingPage_page = require('./landingPage_Page.js');
var selectProduct_page = require('./selectProduct_page.js');
var checkout_page = require('./checkout_page.js');

describe('test purchase and registration', function() {
    var password = 'tester123';
    var email;
    var time;

   beforeEach(function(){
       browser.ignoreSynchronization = true;
       browser.get('http://beryllium-staging.mckissock.rocks/');
       var date = new Date();
       time = date.getTime();
       email = 'test+'+time+'@mckissock.com';
       console.log('email: ' + email );

    });
    it('should select a state, and product, and register, and pay', function(){
        element(by.linkText('Choose a State')).click();
        element(by.linkText('California')).click();
        browser.manage().timeouts().implicitlyWait(5000);
        expect(browser.getCurrentUrl()).toContain('california');
        browser.ignoreSynchronization = true;
        selectProduct_page.getProductFromDropDown(selectProduct_page.CA_PRODUCT_SKU[0]);
        expect(browser.getCurrentUrl()).toContain('register');
        browser.waitForAngular();
        signup_page.registerOnSignUpPage(email, password);
        expect(browser.getCurrentUrl()).toContain('register');
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(5000);
        expect(element.all(by.css('table tr')).get(0).getText()).toEqual('Total $29.00');
        checkout_page.payForCourse();
        expect(browser.getCurrentUrl()).toContain('dashboard');
        element(by.linkText('Logout')).click();
    });
});


