const{BasePage}=require('../utils/BasePage');

exports.ContactUsPage = class ContactUsPage extends BasePage {

    constructor(page) {

        super(page);

        this.contactUsButton = "//a[normalize-space()='Contact us']";

        this.getInTouchHeading = "//h2[normalize-space()='Get In Touch']";

        this.nameTextbox = "//input[@placeholder='Name']";

        this.emailTextbox = "//input[@placeholder='Email']";

        this.subjectTextbox = "input[placeholder='Subject']";

        this.messageTextbox = "//textarea[@id='message']";

        this.uploadFileInput = "//input[@name='upload_file']";

        this.submitButton = "//input[@name='submit']";

        this.successMessage = "//div[@class='status alert alert-success']";

        this.homeButton = "//span[normalize-space()='Home']";
        


    }

    async clickContactUs(){

    await this.click(this.contactUsButton);

}

async verifyGetInTouch(){

    await this.isVisible(this.getInTouchHeading);

}

async enterName(name){

    await this.fill(this.nameTextbox,name);

}

async enterEmail(email){

    await this.fill(this.emailTextbox,email);

}

async enterSubject(subject){

    await this.fill(this.subjectTextbox,subject);

}

async enterMessage(message){

    await this.fill(this.messageTextbox,message);

}

async uploadFile(filePath){

    await this.page
        .locator(this.uploadFileInput)
        .setInputFiles(filePath);

}

async clickSubmit(){

    await this.click(this.submitButton);

}

async verifySuccessMessage(){

    await this.isVisible(this.successMessage);

}

async clickHome(){

    await this.click(this.homeButton);

}

async fillContactDetails(data){

    await this.enterName(data.name);

    await this.enterEmail(data.email);

    await this.enterSubject(data.subject);

    await this.enterMessage(data.message);

}

}