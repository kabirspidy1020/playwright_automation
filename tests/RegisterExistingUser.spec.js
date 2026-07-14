const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');

const testData = require('../fixtures/testData.json');

test.describe('Registration Module', () => {

    test('TC05 - Register User with Existing Email', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await page.goto('/');

        await homePage.verifyHomePage();

        await homePage.clickSignupLogin();

        await loginPage.verifySignupHeading();

        await loginPage.enterName(testData.registerUser.name);

        await loginPage.enterEmail(testData.loginUser.email);

        await loginPage.clickSignup();

        await loginPage.verifyExistingEmailError();

    });

});