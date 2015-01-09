var selectProduct_page = function(){
    this.selectProduct = element(by.id('select_'));
    this.buyButton = element(by.id('buy_ '));
    this.CA_30_DAY_INSURANCE = '[data-sku="3bd9b5e0-8183-11e4-a998-3f5bafab4308"]';

    this.getProductFromDropDown = function getProductFromDropDown(sku){
        this.sku = element(by.id('select_')).$(sku).click();
        this.buyButton.click();
    };
};
module.exports = new selectProduct_page();
