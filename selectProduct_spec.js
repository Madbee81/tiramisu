var selectProduct_page = require('./selectProduct_page.js');

describe('test product selection page', function(){


    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get('https://insuranceexamprep.com/product-information/california/');
    });

    it('should click on products and buy', function(){
        var text = 'should click on products and buy';
        console.log(text);
        selectProduct_page.getProductFromDropDown(selectProduct_page.CA_PRODUCT_SKU[0]);

        expect(browser.getCurrentUrl()).toContain('register');
    });
});
