var util = require ('util')
var signup_page = require('./signup_page.js');
var landingPage_page = require('./landingPage_Page.js');
var selectProduct_page = require('./selectProduct_page.js');
var checkout_page = require('./checkout_page.js');

describe('test registration and sign in', function() {
    var password = 'tester123';
    var email;
    var time;

   beforeEach(function(){
       browser.ignoreSynchronization = true;
       browser.get('http://insuranceexamprep.com/#');
       var date = new Date();
       time = date.getTime();
       email = 'test+'+time+'@mckissock.com';
       console.log('email: ' + email );
    });
    it('should select a state, and product, and register, and pay', function(){
        landingPage_page.getStateFromDropDown('California');
        expect(browser.getCurrentUrl()).toContain('california');
        browser.ignoreSynchronization = true;
        selectProduct_page.getProductFromDropDown('[data-sku="3bd9b5e0-8183-11e4-a998-3f5bafab4308"]');
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toContain('register');
        signup_page.register(email, password);
        expect(browser.getCurrentUrl()).toContain('my.insuranceexamprep.com/');
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(5000);
        checkout_page.verifyProductsOnCheckoutPage();
        checkout_page.payForCourse();
        checkout_page.logoutOnCheckOut();
        expect(browser.getCurrentUrl()).toContain('register');
    });
});


