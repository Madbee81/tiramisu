var selectProduct_page = function(){
    this.selectProduct = element(by.id('select_'));
    this.buyButton = element(by.id('buy_ '));

    //CA
    this.CA_PRODUCT_SKU = ['[data-sku="3bd9b5e0-8183-11e4-a998-3f5bafab4308"]', '[data-sku="3bd9dcf0-8183-11e4-a998-3f5bafab4308"]','[data-sku="3bda0400-8183-11e4-a998-3f5bafab4308"]' ];
    this.CA_PRODUCT_STRING = ["30 Day CA-Life-Exam Prep", "60 Day CA-Life-Exam Prep", "30 Day CA-Life-Exam Prep"];
    this.CA_30_DAY_INSURANCE = '[data-sku="3bd9b5e0-8183-11e4-a998-3f5bafab4308"]';

    //Arizona
    this.AZ_PRODUCT_SKU = ['[data-sku="3b2f4510-8183-11e4-a998-3f5bafab4308"]', '[data-sku="3b2f6c20-8183-11e4-a998-3f5bafab4308"]', '[data-sku="3b2f9330-8183-11e4-a998-3f5bafab4308"]',
                           '[data-url="#"]', '[data-sku="398628f0-8183-11e4-a998-3f5bafab4308"]', '[data-sku="39865000-8183-11e4-a998-3f5bafab4308"]', '[data-sku="39867710-8183-11e4-a998-3f5bafab4308"]']


    this.AZ_PRODUCT_STRING = ['30 Day AZ-Health-Exam Prep Subscription', '60 Day AZ-Health-Exam Prep Subscription', '90 Day AZ-Health-Exam Prep Subscription',
                              'Choose a Subscription', '30 Day AZ-Life-Exam Prep Subscription', '60 Day AZ-Life-Exam Prep Subscription', '90 Day AZ-Life-Exam Prep Subscription'];


    this.getProductFromDropDown = function getProductFromDropDown(sku){
        this.sku = element(by.id('select_')).$(sku).click();
        this.buyButton.click();
    };
};
module.exports = new selectProduct_page();
