var util = require ('util')

describe('test login and check Profile', function() {
    var password = 'tester123';
    //var email = 'rstlpnr+0216prod1@gmail.com';
    var email = 'test+1424332410127@mckissock.com';
    var firstName = 'Test';
    var lastName = 'Tester';

   beforeEach(function(){
       browser.ignoreSynchronization = true;
       browser.get('http://beryllium-staging.mckissock.rocks/');
       //browser.get('http://insuranceexamprep.com/');

    });

   it('should test login and Profile', function() {
       element(by.linkText('Log in')).click();
       expect(browser.getCurrentUrl()).toContain('register');
       element(by.id('navbarLoginEmail')).sendKeys(email);
       element(by.id('navbarLoginPassword')).sendKeys(password);
       element(by.id('loginSubmit')).click();
       browser.waitForAngular();
       browser.manage().timeouts().implicitlyWait(5000);
       element(by.linkText('Profile')).click();
       expect(browser.getCurrentUrl()).toContain('profile');
       element(by.id('accountEmail')).getText().then(function(text){
           console.log(text);
           expect(element(by.id('accountEmail')).getText()).toEqual(email);
       });
       element(by.id('accountFirstName')).getText().then(function(text){
           console.log(text);
           expect(element(by.id('accountFirstName')).getText()).toEqual(firstName);
       });
       element(by.id('accountLastName')).getText().then(function(text){
           console.log(text);
           expect(element(by.id('accountLastName')).getText()).toEqual(lastName);
       });
       element(by.linkText('Logout')).click();
   });
 });





