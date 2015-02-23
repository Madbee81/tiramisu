var selectProduct_page = require('./selectProduct_page.js');

describe('test product selection page', function(){


    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get('https://insuranceexamprep.com/product-information/california/');
    });

    it('should click on products and buy', function(){
        var text = 'should click on products and buy';
        console.log(text);
            for(var i=0; i<selectProduct_page.CA_PRODUCT_SKU.length; i++){
                element(by.id('select_')).$(selectProduct_page.CA_PRODUCT_SKU[i]).click();
                selectProduct_page.buyButton.click();
                expect(browser.getCurrentUrl()).toContain('register');
                browser.ignoreSynchronization = true;
                browser.get('https://insuranceexamprep.com/product-information/california/');
            };
    });

     it('should test count products on product selection page', function(){
         var text = 'should test count products on product drop-down selection page';
         console.log(text);
     browser.waitForAngular();
     browser.ignoreSynchronization = true;
     browser.manage().timeouts().implicitlyWait(5000);
     element.all(by.id("select_ option")).then(function(items){
        expect(items.length).toBe(4);
      });
    });

    it('should test subscriptions on product selection page', function(){
        var text = 'should test subscriptions on product selection page';
        console.log(text);
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(5000);
        element.all(by.id("select_ option")).then(function(items){
            for (var i=1; i<selectProduct_page.CA_PRODUCT_STRING.length; i++){
              expect(items[i].getText()).toContain(selectProduct_page.CA_PRODUCT_STRING[i-1])
            }
        });
    });
});
