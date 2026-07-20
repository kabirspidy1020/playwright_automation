const { BasePage } = require('../utils/BasePage');

exports.SubscriptionPage = class SubscriptionPage extends BasePage {

    constructor(page) {

        super(page);

        this.footer = "//div[@class='footer-widget']//div[@class='container']";

        this.subscriptionHeading = "//h2[normalize-space()='Subscription']";

        this.emailInput = "//input[@id='susbscribe_email']";

        this.subscribeButton = "//button[@id='subscribe']";

        this.successMessage = "//div[text()='You have been successfully subscribed!']";




    }

    async scrollToFooter(){

    await this.page.locator(this.footer).scrollIntoViewIfNeeded();

}

async verifySubscriptionHeading(){

    await this.isVisible(this.subscriptionHeading);

}

async subscribe(email){

    await this.fill(this.emailInput, email);

    await this.click(this.subscribeButton);

}

async verifySubscriptionSuccess(){

    await this.isVisible(this.successMessage);

}

}