var landingPage_page = require('./landingPage_page.js');
describe('testing landingpage', function(){

    beforeEach(function(){
      browser.ignoreSynchronization = true;
      browser.get('http://insuranceexamprep.com/#');
  });

  it('should have a title', function() {
      console.log('Should Have a Title: ');
      expect(browser.getTitle()).toBe(landingPage_page.Insuranse_Exam_Prep_Title);
  });

  it('should show need help phone number', function(){
      landingPage_page.help.getText().then(function(text){
          console.log('Should show need help phone number: ' + text);
      });
      expect(landingPage_page.help.getText()).toBe(landingPage_page.HELP_STRING);
  });

  it('should show FAQ, Contact, Log in links', function(){
      for (i = 0; i < landingPage_page.lengthRightNav; i++) {
          var rightNavItems = landingPage_page.rightnav.get(i).$('a').getText();
          rightNavItems.then(function(text){
              console.log('Should show: ' + text);
          });
          expect(rightNavItems).toBe(landingPage_page.rightNav_STRING[i]);
      };
  });

  it('should click FAQ link and open FAQ page', function(){
      landingPage_page.clickFAQLink();
      expect(browser.getTitle()).toBe(landingPage_page.Insurance_Exam_Prep_FAQ_Title);
      browser.navigate().back();
  });

  it('should click Contact link and navigate to Contact page', function(){
      landingPage_page.clickContactLink();
      expect(browser.getTitle()).toBe(landingPage_page.Insurance_Exam_Prep_Contact_Title);
      browser.navigate().back();
  });

  it('should click Log in link and navigate to Login page', function(){
      landingPage_page.clickLoginLink();
      expect(browser.getCurrentUrl()).toContain('/register')
      browser.navigate().back();
  });

  it('should check states drop-down', function(){
      landingPage_page.statesdropdown.then(function(items){
        expect(items.length).toBe(landingPage_page.statesLength);
      });
      landingPage_page.choosestate.click();
      for(i=1; i < landingPage_page.statesLength; i++){
          var statesDropDownItems = landingPage_page.statesdropdown.get(i).$('a');
          statesDropDownItems.getText().then(function(text){
              console.log('Should show states: ' + text);
          });
          expect(statesDropDownItems.getText()).toBe(landingPage_page.states_STRING[i]);
      };
  });

  it('should click on states in choose a state drop down', function(){
      var text = 'Should Click on Choose a State drop down';
      console.log(text);
      var item = element.all(by.css('.state-dropdown-content li'));
      item.then(function(items){
          element(by.linkText('Choose a State')).click();
          for (i = 1; i < items.length; i++) {
               element(by.linkText('Choose a State')).click();
               item.get(i).$('a').click();
               expect(browser.getCurrentUrl()).toContain(states[i].replace(/\s+/g, '-').toLowerCase());
               browser.navigate().back();
           };
      });
  });
});


