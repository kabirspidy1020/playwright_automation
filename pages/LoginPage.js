const{BasePage}=require('../utils/BasePage');

exports.LoginPage = class LoginPage extends BasePage{
    constructor(page){
    super(page);
    this.newUserSignupHeading="//h2[text()='New User Signup!']";

    this.nameTextbox = "//input[@placeholder='Name']";

    this.emailTextbox = "//input[@data-qa='signup-email']";

    this.signupButton = "//button[@data-qa='signup-button']";


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
}
