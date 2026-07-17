const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');

const { ProductPage } = require('../pages/ProductsPage');

const testData = require('../fixtures/testData.json');

test.describe('Search Product Module', () => {

    test('TC09 - Search Product', async ({ page }) => {

        const homePage = new HomePage(page);

        const productsPage = new ProductPage(page);

        await page.goto('/');

        await homePage.verifyHomePage();

        await homePage.clickProducts();

        await productsPage.verifyProductsPage();

        await productsPage.searchProduct(
            testData.searchProduct.productName
        );

        await productsPage.verifySearchedProducts();

        await productsPage.verifySearchResults();
    });

});