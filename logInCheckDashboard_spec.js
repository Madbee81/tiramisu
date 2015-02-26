var util = require ('util')
var landingPage_page = require('./landingPage_page.js');
var signup_page = require('./signup_page.js');
describe('test login and check Dashboard', function() {
    var password = 'tester123';
    var email = 'test+1424895558078@mckissock.com';

   beforeEach(function(){
       browser.ignoreSynchronization = true;
       browser.get('http://beryllium-staging.mckissock.rocks/');
       //browser.get('http://insuranceexamprep.com/');
    });

   it('should test login and Dashboard', function() {
       landingPage_page.clickLoginLink();
       expect(browser.getCurrentUrl()).toContain('register');
       signup_page.loginOnSignUpPage(email, password);
       browser.waitForAngular();
       browser.manage().timeouts().implicitlyWait(5000);
       element(by.linkText('Dashboard')).click();
       expect(browser.getCurrentUrl()).toContain('dashboard');
       element(by.id('accountEmail')).getText().then(function(text){
           console.log('Account email: ' + text);
           expect(element(by.id('accountEmail')).getText()).toEqual(email);
           element(by.linkText('Logout')).click();
       });
   });
 });





