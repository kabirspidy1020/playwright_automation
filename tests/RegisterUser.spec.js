const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { SignupPage } = require('../pages/SignupPage');
//console.log(signupModule);
const { AccountPage } = require('../pages/AccountPage');

const testData = require('../fixtures/testData.json');

test.describe('Registration Module', () => {

    test('TC01 - Register User', async ({ page }) => {

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

    await signupPage.selectTitle();

    await signupPage.enterPassword(
        testData.registerUser.password
    );

    await signupPage.selectDOB(
        testData.registerUser.day,
        testData.registerUser.month,
        testData.registerUser.year
    );

    await signupPage.subscribeNewsletter();

    await signupPage.subscribeSpecialOffer();

    await signupPage.enterAddressDetails(
        testData.registerUser
    );
    await signupPage.clickCreateAccount();
    await accountPage.verifyAccountCreated();
    await accountPage.clickContinue();
    await accountPage.verifyLoggedInUser();
    await accountPage.deleteAccount();
    await accountPage.verifyAccountDeleted();

    });

});

