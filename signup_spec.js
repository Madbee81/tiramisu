var util = require ('util')
var landingPage_page = require('./landingPage_page.js');
var signup_page = require('./signup_page.js');

describe('test registration and sign in', function() {
    var password = 'tester123';
    var email ='test+automation@gmail.com';
    var time;

   beforeEach(function(){
       browser.ignoreSynchronization = true;
       browser.get('http://beryllium-staging.mckissock.rocks/');
   });
   it('should test forget password on signup page', function() {
         landingPage_page.clickLoginLink();
         expect(browser.getCurrentUrl()).toContain('register');
         browser.waitForAngular();
         browser.manage().timeouts().implicitlyWait(5000);
         signup_page.forgotPassword(email);
         expect(browser.getCurrentUrl()).toContain('reset');
         element(by.tagName('h1')).getText().then(function(text) {
             console.log("Contains Text: " + text);
             expect(element(by.tagName('h1')).getText()).toContain('Forgot Your Password?');
         });
         element(by.id('inputEmail3')).sendKeys(email);
         element(by.buttonText('Reset Password')).click();
         element(by.css('.well')).getText().then(function(text){
            console.log(text);
         expect(element(by.css('.well')).getText()).toContain('Reset Password');
         });
   });
});


