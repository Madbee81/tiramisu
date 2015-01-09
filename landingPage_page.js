var landingPage_page = function(){
   this.help = element(by.css('.alignleft'));
   this.rightnav = element.all(by.css('.alignright li'));
   this.statesdropdown = element.all(by.css('.state-dropdown-content li'));
   this.HELP_STRING = 'Need help? Call us at 1-866-739-7277';
   this.rightNav_STRING = ["FAQ", "Contact", "Log in"];
   this.lengthRightNav = this.rightNav_STRING.length;
   this.states_STRING = ["Choose a State", "Arizona", "California","Georgia", "Kansas", "Massachusetts", "Michigan", "Missouri",
        "New Jersey", "New York", "North Carolina", "Pennsylvania", "Texas", "Virginia", "Washington", "Wisconsin"];
   this.statesLength = this.states_STRING.length;
   this.choosestate = element(by.linkText('Choose a State'));

   this.checkRightNavigation = function checkRightNavigation(){
       for (i = 0; i < this.states_STRING.length; i++) {
               expect(this.rightnav.get(i).$('a').getText()).toBe(this.rightNav_STRING[i]);
       };
   };

   this.checkStatesDropDown = function checkStatesDropDown(){
       this.statesdropdown.then(function(items){
           expect(items.length).toBe(this.states_STRING.length);
           for (i = 0; i < items.length; i++){
               this.choosestate.click();
               expect(this.statesdrop.get(i).$('a').getText()).toBe(this.states_STRING[i]);
               this.statesdrop.get(i).$('a').click();
               expect(browser.getCurrentUrl()).toContain(this.states_STRING[i].replace(/\s+/g, '-').toLowerCase());
               browser.navigate().back();
           };
       });
   };

   this.getStateFromDropDown = function getStateFromDropDown(state){
      this.choosestate.click();
      this.stateLink = element(by.linkText(state)).click();

   };
};
module.exports = new landingPage_page();
