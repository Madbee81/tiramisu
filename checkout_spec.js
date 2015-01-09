    var util = require ('util')

describe('test registration and sign in', function() {

    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get('https://my.insuranceexamprep.com/checkout/c8ad40d0-9638-11e4-bbd8-030ab9f410d1');

    });
    it('should test locators on signup page', function() {
        element(by.id('card_name')).sendKeys('test');
        element(by.id('billing_address')).sendKeys('123 abc');
        element(by.id('zipcode')).sendKeys('94040');
    });


});


