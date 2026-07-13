const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { SignupPage } = require('../pages/SignupPage');
//console.log(signupModule);
const { AccountPage } = require('../pages/AccountPage');

const testData = require('../fixtures/testData.json');

test.describe('Registration Module', () => {

    test('TC04 - Register User', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const accountPage = new AccountPage(page);
    await page.goto('/');
    await homePage.verifyHomePage();
    await homePage.clickSignupLogin();
    await loginPage.login(testData.loginUser.email,testData.loginUser.password);
    await accountPage.verifyLoggedInUser();
    await accountPage.clickLogout();
    await loginPage.verifyLoginHeading();
    
    });

});