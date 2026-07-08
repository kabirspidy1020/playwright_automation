const{BasePage}=require('../utils/BasePage');

exports.SignupPage=class SignupPage extends BasePage{

    constructor(page){
        super(page);

    this.accountInformationHeading="//b[text()='Enter Account Information']";

    this.mrRadio="#id_gender1";

    this.mrsRadio="#id_gender2";

    this.passwordTextbox="#password";

    this.dayDropdown="#days";

    this.monthDropdown="#months";

    this.yearDropdown="#years";

    this.newsletterCheckbox="#newsletter";

    this.specialOfferCheckbox="#optin";

    this.firstNameTextbox="#first_name";

    this.lastNameTextbox="#last_name";

    this.companyTextbox="#company";

    this.addressTextbox="#address1";

    this.address2Textbox="#address2";

    this.countryDropdown="#country";

    this.stateTextbox="#state";

    this.cityTextbox="#city";

    this.zipcodeTextbox="#zipcode";

    this.mobileTextbox="#mobile_number";

    this.createAccountButton="button[data-qa='create-account']";

    }
    async verifyAccountInformation(){

    await this.isVisible(this.accountInformationHeading);

}
async selectTitle(){

    await this.click(this.mrRadio);

}

async enterPassword(password){

    await this.fill(this.passwordTextbox,password);

}

async selectDOB(day,month,year){

    await this.selectDropdown(this.dayDropdown,day);

    await this.selectDropdown(this.monthDropdown,month);

    await this.selectDropdown(this.yearDropdown,year);

}

async subscribeNewsletter(){

    await this.click(this.newsletterCheckbox);

}

async subscribeSpecialOffer(){

    await this.click(this.specialOfferCheckbox);

}

async enterAddressDetails(data){

    await this.fill(this.firstNameTextbox,data.firstName);

    await this.fill(this.lastNameTextbox,data.lastName);

    await this.fill(this.companyTextbox,data.company);

    await this.fill(this.addressTextbox,data.address1);

    await this.fill(this.address2Textbox,data.address2);

    await this.selectDropdown(this.countryDropdown,data.country);

    await this.fill(this.stateTextbox,data.state);

    await this.fill(this.cityTextbox,data.city);

    await this.fill(this.zipcodeTextbox,data.zipcode);

    await this.fill(this.mobileTextbox,data.mobileNumber);

}

async clickCreateAccount(){

    await this.click(this.createAccountButton);

}
}