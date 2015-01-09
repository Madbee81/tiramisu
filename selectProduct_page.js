var selectProduct_page = function(){
    this.selectProduct = element(by.id('select_'));
    this.buyButton = element(by.id('buy_ '));


    this.getProductFromDropDown = function getProductFromDropDown(sku){
        this.sku = element(by.id('select_')).$(sku).click();
        this.buyButton.click();
    };
};
module.exports = new selectProduct_page();
