var signup_page = function(){
    this.email = element(by.model('account.email'));
    this.password = element(by.model('account.password'));
    this.confirmPassword = element(by.model('account.confirmPassword'));
    this.firstName = element(by.model('account.firstName'));
    this.lastName = element(by.model('account.lastName'));
    this.registerButton = element(by.buttonText('Register'));
    this.signinLink = element(by.linkText('Sign in here'));
    this.loginEmail = element(by.model('login'));
    this.loginPassword = element(by.model('password'));
    this.loginButton = element(by.id('loginSubmit'));
    this.loginLink = element(by.linkText("Log In"));

    this.register = function registerOnSignUpPage(email, password) {
        this.email.sendKeys(email);
        this.password.sendKeys(password);
        this.confirmPassword.sendKeys(password);
        this.firstName.sendKeys('Test');
        this.lastName.sendKeys('Tester');
        browser.waitForAngular();
        this.registerButton.click();
        browser.waitForAngular();
    };

    this.login = function loginOnSignUpPage(email, password){
        this.signinLink.click();
        this.loginEmail.sendKeys(email);
        this.loginPassword.sendKeys(password);
    };
};
module.exports = new signup_page();
