var util = require ('util')
var landingPage_page = require('./landingPage_page.js');
var signup_page = require('./signup_page.js');

describe('test login and check Profile', function() {
    var password = 'tester123';
    //var email = 'rstlpnr+0216prod1@gmail.com';
    var email = 'test+1424895558078@mckissock.com';
    var firstName = 'Test';
    var lastName = 'Tester';
    var firstNameNew = 'TestNew';
    var lastNameNew = 'TesterNew';
    var emailNew = 'test+1424332410127New@mckissock.com';
   beforeEach(function(){
       browser.ignoreSynchronization = true;
       browser.get('http://beryllium-staging.mckissock.rocks/');
       //browser.get('http://insuranceexamprep.com/');
    });

   it('should test login and Profile', function() {
       landingPage_page.clickLoginLink();
       expect(browser.getCurrentUrl()).toContain('register');
       signup_page.loginOnSignUpPage(email, password);
       browser.waitForAngular();
       browser.manage().timeouts().implicitlyWait(5000);
       element(by.linkText('Profile')).click();
       expect(browser.getCurrentUrl()).toContain('profile');
       element(by.id('accountEmail')).getText().then(function(text){
           console.log('Account e-mail: ' + text);
           expect(element(by.id('accountEmail')).getText()).toEqual(email);
       });
       element(by.id('accountFirstName')).getText().then(function(text){
           console.log('Account First Name: ' + text);
           expect(element(by.id('accountFirstName')).getText()).toEqual(firstName);
       });
       element(by.id('accountLastName')).getText().then(function(text){
           console.log('Account First Name: ' + text);
           expect(element(by.id('accountLastName')).getText()).toEqual(lastName);
       });
       element(by.linkText('Logout')).click();
   });

   it('should test update profile', function(){
       landingPage_page.clickLoginLink();
       expect(browser.getCurrentUrl()).toContain('register');
       signup_page.loginOnSignUpPage(email, password);
       browser.waitForAngular();
       browser.manage().timeouts().implicitlyWait(5000);
       element(by.linkText('Profile')).click();
       expect(browser.getCurrentUrl()).toContain('profile');
       element(by.model('account.email')).sendKeys(emailNew);
       element(by.model('account.firstName')).sendKeys(firstNameNew);
       element(by.model('account.lastName')).sendKeys(lastNameNew);
      // element(by.xpath(('//button[@type='submit'])[2]')'').click();

   });
 });





