var util = require ('util')

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
    });

     it('should test locators on signup page', function() {
        element(by.model('account.email')).sendKeys(email);
        element(by.model('account.password')).sendKeys(password);
        element(by.model('account.confirmPassword')).sendKeys(password);
        element(by.model('account.firstName')).sendKeys('Rachel');
        element(by.model('account.lastName')).sendKeys('RachelTester');
        element(by.buttonText('Register')).click();
        expect(browser.getCurrentUrl()).toContain('dashboard');
        element(by.css('td.ng-binding')).getText().then(function(text){
            console.log(text);
        expect(element(by.css('td.ng-binding')).getText()).toEqual(email);
        element(by.id('logout')).click();
        expect(browser.getCurrentUrl()).toContain('register');
        element(by.linkText('Sign in here')).click();
        element(by.model('login')).sendKeys(email);
        element(by.model('password')).sendKeys(password);
        element(by.id('loginSubmit')).click();

        });

     });

    var signup_page = require('./signup_page.js');

});


