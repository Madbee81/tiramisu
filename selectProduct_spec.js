var selectProduct_page = require('./selectProduct_page.js');
describe('test product selection page', function(){

    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get('https://insuranceexamprep.com/product-information/california/');
    });

    it('should test products on product drop-down selection page', function(){
       element.all(by.id("select_ option")).then(function(items){
        expect(items.length).toBe(4);
        expect(items[1].getText()).toContain('30 Day CA-Life-Exam Prep');
        expect(items[2].getText()).toContain('60 Day CA-Life-Exam Prep');
        expect(items[3].getText()).toContain('90 Day CA-Life-Exam Prep');
       });
    });

    it('should be able to select a product and buy', function(){
        //element(by.id('select_')).$('[data-sku="3bd9b5e0-8183-11e4-a998-3f5bafab4308"]').click();
        //element(by.id('buy_ ')).click();
        selectProduct_page.getProductFromDropDown('[data-sku="3bd9b5e0-8183-11e4-a998-3f5bafab4308"]');
           expect(browser.getCurrentUrl()).toContain('register');
    });
});
