const{BasePage}=require('../utils/BasePage');

exports.LoginPage = class LoginPage extends BasePage{
    constructor(page){
    super(page);
    this.newUserSignupHeading="//h2[text()='New User Signup!']";

    this.nameTextbox = "//input[@placeholder='Name']";

    this.emailTextbox = "//input[@data-qa='signup-email']";

    this.signupButton = "//button[@data-qa='signup-button']";

    this.loginHeading = "//h2[text()='Login to your account']";

    this.loginEmailTextbox = "input[data-qa='login-email']";

    this.loginPasswordTextbox = "input[data-qa='login-password']";

    this.loginButton = "button[data-qa='login-button']";

    this.loginErrorMessage = "//p[text()='Your email or password is incorrect!']";


}

    async verifySignupHeading(){

    await this.isVisible(this.newUserSignupHeading);

}



async enterName(name){

    await this.fill(this.nameTextbox,name);

}

async enterEmail(email){

    await this.fill(this.emailTextbox,email);

}

async clickSignup(){

    await this.click(this.signupButton);

}

async verifyLoginHeading(){

    await this.isVisible(this.loginHeading);

}

async enterLoginEmail(email){

    await this.fill(this.loginEmailTextbox,email);

}

async enterLoginPassword(password){

    await this.fill(this.loginPasswordTextbox,password);

}

async clickLogin(){

    await this.click(this.loginButton);

}

async login(email,password){

    await this.enterLoginEmail(email);

    await this.enterLoginPassword(password);

    await this.clickLogin();

}

async verifyLoginError() {
    await this.isVisible(this.loginErrorMessage);
}
}
