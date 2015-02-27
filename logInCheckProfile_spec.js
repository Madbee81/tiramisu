var util = require ('util')
var landingPage_page = require('./landingPage_page.js');
var signup_page = require('./signup_page.js');

describe('test login and check Profile', function() {
    var password = 'tester123';
    var passwordNew = 'tester123';

    //var email = 'rstlpnr+0216prod1@gmail.com';
    var email = 'test+automation@gmail.com';
    var firstName = 'Rachel';
    var lastName = 'Tester';
    var firstNameNew = 'TestNew';
    var lastNameNew = 'TesterNew';
    var emailNew = 'rstlpnr+0226@gmail.com';

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
       browser.ignoreSynchronization = true;
       browser.get('http://beryllium-staging.mckissock.rocks/');
       landingPage_page.clickLoginLink();
       signup_page.loginOnSignUpPage(email, password);
       browser.waitForAngular();
       browser.manage().timeouts().implicitlyWait(5000);
       element(by.linkText('Profile')).click();
       expect(browser.getCurrentUrl()).toContain('profile');
       element(by.model('account.email')).sendKeys(emailNew);
       element(by.model('account.firstName')).sendKeys(firstNameNew);
       element(by.model('account.lastName')).sendKeys(lastNameNew);
       browser.manage().timeouts().implicitlyWait(5000);
       //element(by.css('[ui-view="profileEdit"]')).$('[ng-disabled="form.$invalid"]').click();
       element(by.model('account.password')).sendKeys(passwordNew);
       element(by.model('account.password1')).sendKeys(passwordNew);
       element(by.model('account.password2')).sendKeys(passwordNew);
       element(by.model('account.firstName')).sendKeys(firstNameNew);
       element(by.model('account.lastName')).sendKeys(lastNameNew);
       //element(by.css('[ui-view="profilePassword"]')).$('[ng-disabled="form.$invalid"]').click();
   });
 });





