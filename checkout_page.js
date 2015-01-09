var checkout_page = function (){
    this.nameOnCard = element(by.id('card_name'));
    this.billingAddress = element(by.id('billing_address'));
    this.zipcode = element(by.id('zipcode'));
    this.cardNumber = element(by.id('card_number'));
    this.securityCode = element(by.id('card_cvc'));
    this.expirationMonth = element.all(by.css('#card_month option'));
    this.expirationYear = element.all(by.css('#card_year option'));
    this.logout = element(by.id('logout'));
    this.dashboard = element(by.id('dashboard'));
    this.NAME = 'Rachel Tester';
    this.ADDRESS = '123 Main St';
    this.ZIP = '94040';
    this.CARD_NUMBER = '4111111111111111';
    this.SECURITY_CODE = '123';
    this.PRODUCT_30DAY_CA = '30 Day CA-Life-Exam Prep Subscription $29.00';
    this.TOTAL_29 = 'Total $29.00'

    this.payForCourse = function payForCourse(){
        element(by.id('card_name')).sendKeys(this.NAME);
        element(by.id('billing_address')).sendKeys(this.ADDRESS);
        element(by.id('zipcode')).sendKeys(this.ZIP);
        element(by.id('card_number')).sendKeys(this.CARD_NUMBER);
        element(by.id('card_cvc')).sendKeys(this.SECURITY_CODE);
        element.all(by.css('#card_month option')).first().click();
        element.all(by.css('#card_year option')).last().click();
    };
    this.verifyProductsOnCheckoutPage = function verifyProductsOnCheckoutPage(){
        var items = element.all(by.css('table tr'));
        expect(items.get(0).getText()).toEqual(this.PRODUCT_30DAY_CA);
        expect(items.get(1).getText()).toEqual(this.TOTAL_29);
    };

    this.logoutOnCheckOut = function logoutOnCheckout(){
      this.logout.click();
    };
};
module.exports = new checkout_page();