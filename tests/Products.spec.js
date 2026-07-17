const { test } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');

const { ProductPage } = require('../pages/ProductsPage');

const { ProductDetailPage } = require('../pages/ProductDetailPage');


test.describe('Product Module',()=>{
    test('TC08 - Verify All Products and Product Detail Page',async({page})=>{

        const homePage = new HomePage(page);

        const productsPage = new ProductPage(page);

        const productDetailPage = new ProductDetailPage(page);

        await page.goto('/');

        await homePage.verifyHomePage();
        await homePage.clickProducts();
        await productsPage.verifyProductsPage();
        await productsPage.verifyProductsList();
        await productsPage.clickFirstViewProduct();
        await productDetailPage.verifyProductDetails();

    })
})