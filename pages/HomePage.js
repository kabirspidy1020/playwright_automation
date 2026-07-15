const {BasePage}=require('../utils/BasePage');

exports.HomePage=class HomePage extends BasePage{
    constructor(page) {
    super(page);
    this.signupLoginBtn="a[href='/login']";
    this.testCasesButton = "//a[contains(text(),'Test Cases')]";
    

}

async clickSignupLogin() {
    await this.click(this.signupLoginBtn);
}

async verifyHomePage() {
    await this.isVisible(this.signupLoginBtn);
}

    async clickTestCases(){

    await this.click(this.testCasesButton);

}


}