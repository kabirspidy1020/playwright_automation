const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { AccountPage } = require('../pages/AccountPage');
const { SignupPage } = require('../pages/SignupPage');

const testData = require('../fixtures/testData.json');

test.describe('Login Module', () => {

    test('TC02 - Login User', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accountPage = new AccountPage(page);
        await page.goto('/');
        await homePage.verifyHomePage();
        await homePage.clickSignupLogin();
        await loginPage.verifySignupHeading();
        await loginPage.enterName(testData.registerUser.name);
        const email = `prakhar${Date.now()}@gmail.com`;
        await loginPage.enterEmail(email);
        await loginPage.clickSignup();
        await signupPage.verifyAccountInformation();

        await signupPage.registerUser(
            testData.registerUser
        );
        await accountPage.verifyAccountCreated();
        await accountPage.clickContinue();
        await accountPage.verifyLoggedInUser();

        await accountPage.clickLogout();

        //await homePage.clickSignupLogin();

        await loginPage.verifyLoginHeading();

        await loginPage.login(
            email,
            testData.registerUser.password
        );

        await accountPage.verifyLoggedInUser();

        await accountPage.deleteAccount();

        await accountPage.verifyAccountDeleted();

    });

});