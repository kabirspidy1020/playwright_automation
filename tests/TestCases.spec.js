const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
const { TestCasesPage } = require('../pages/TestCasesPage');

test.describe('Test Cases Module', () => {

    test('TC07 - Verify Test Cases Page', async ({ page }) => {

        const homePage = new HomePage(page);
        const testCasesPage = new TestCasesPage(page);

        await page.goto('/');

        await homePage.verifyHomePage();

        await homePage.clickTestCases();

        await testCasesPage.verifyTestCasesPage();

    });

});