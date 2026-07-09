const{BasePage}=require('../utils/BasePage');

exports.AccountPage=class AccountPage extends BasePage{
    constructor(page){
        super(page);

    this.accountCreatedHeading = "//b[text()='Account Created!']";

    this.continueButton = "a[data-qa='continue-button']";

    this.loggedInUser = "//a[contains(text(),'Logged in as')]";

    this.deleteAccountButton = "//a[contains(text(),'Delete Account')]";

    this.accountDeletedHeading = "//b[text()='Account Deleted!']";

    this.logoutBtn="//a[normalize-space()='Logout']";
    }

    async verifyAccountCreated(){

    await this.isVisible(this.accountCreatedHeading);

}

async clickContinue(){

    await this.click(this.continueButton);

}

async verifyLoggedInUser(){

    await this.isVisible(this.loggedInUser);

}

async deleteAccount(){

    await this.click(this.deleteAccountButton);

}

async verifyAccountDeleted(){

    await this.isVisible(this.accountDeletedHeading);

}

async clickLogout(){
    await this.click(this.logoutBtn);
}


}