const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
//const { LoginPage } = require('../pages/LoginPage');
const{ContactUsPage}= require('../pages/ContactUsPage');


const testData = require('../fixtures/testData.json');

test.describe('Login Module', () => {

    test('TC06 - Contact Us Form', async ({ page }) => {

        const homePage = new HomePage(page);
        //const loginPage = new LoginPage(page);
        const contactUsPage= new ContactUsPage(page);


        await page.goto('/');
        await homePage.verifyHomePage();
        await contactUsPage.clickContactUs();
        await contactUsPage.verifyGetInTouch();
        await contactUsPage.fillContactDetails(testData.contactUs);
        const filePath = "uploadFiles/Assertion.docx";

        await contactUsPage.uploadFile(filePath);
        await page.waitForTimeout(10000);
        page.once('dialog', async dialog => {

            console.log(dialog.message());

            await dialog.accept();

        });

        await contactUsPage.clickSubmit();
        await page.waitForTimeout(10000);
        await contactUsPage.verifySuccessMessage();
        await contactUsPage.clickHome();
        await homePage.verifyHomePage();



    });

});