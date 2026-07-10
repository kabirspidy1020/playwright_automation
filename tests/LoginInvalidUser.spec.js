const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');

const testData = require('../fixtures/testData.json');

test.describe('Login Module', () => {

    test('TC03 - Login User with incorrect credentials', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await page.goto('/');

        await homePage.verifyHomePage();

        await homePage.clickSignupLogin();

        await loginPage.verifyLoginHeading();

        await loginPage.login(
            testData.invalidLoginUser.email,
            testData.invalidLoginUser.password
        );

        await loginPage.verifyLoginError();

    });

});