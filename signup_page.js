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
    this.loginLink = element(by.linkText("Log in"));

    this.registerOnSignUpPage = function registerOnSignUpPage(email, password) {
        this.email.sendKeys(email);
        this.password.sendKeys(password);
        this.confirmPassword.sendKeys(password);
        this.firstName.sendKeys('Test');
        this.lastName.sendKeys('Tester');
        browser.waitForAngular();
        this.registerButton.click();
        browser.waitForAngular();
    };

    this.loginOnSignUpPage = function loginOnSignUpPage(email, password){
        element(by.id('navbarLoginEmail')).sendKeys(email);
        element(by.id('navbarLoginPassword')).sendKeys(password);
        element(by.id('loginSubmit')).click();
    };
    this.forgotPassword = function forgotPassword(email){
        element(by.id('navbarLoginEmail')).sendKeys(email);
        element(by.linkText("Forgot Password?")).click();
    };
};
module.exports = new signup_page();

