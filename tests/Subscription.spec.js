const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
const { SubscriptionPage } = require('../pages/SubscriptionPage');

const testData = require('../fixtures/testData.json');

test.describe('Subscription Module', () => {

    test('TC10 - Verify Subscription in Home Page', async ({ page }) => {

        const homePage = new HomePage(page);
        const subscriptionPage = new SubscriptionPage(page);

        
        await page.goto('/');

     
        await homePage.verifyHomePage();

        await subscriptionPage.scrollToFooter();

 
        await subscriptionPage.verifySubscriptionHeading();


        await subscriptionPage.subscribe(
            testData.subscription.email
        );

 
        await subscriptionPage.verifySubscriptionSuccess();

    });

});