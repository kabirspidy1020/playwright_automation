const{BasePage}= require('../utils/BasePage');
const { expect } = require('@playwright/test');

exports.ProductPage= class ProductPage extends BasePage{
    constructor(page){
        super(page);
        this.allProductsHeading = "//h2[normalize-space()='All Products']";

        this.productCards = ".product-image-wrapper";

        this.firstViewProduct = "//a[@href='/product_details/1']";

        this.searchInput = "//input[@id='search_product']";

        this.searchButton = "//button[@id='submit_search']";

        this.searchedProductsHeading = "//h2[normalize-space()='Searched Products']";
    }

    async verifyProductsPage(){

    await this.isVisible(this.allProductsHeading);

}

async verifyProductsList(){

    const count = await this.page
        .locator(this.productCards)
        .count();

    expect(count).toBeGreaterThan(0);

}

async clickFirstViewProduct(){

    await this.click(this.firstViewProduct);

}

async searchProduct(productName) {

    await this.fill(this.searchInput, productName);

    await this.click(this.searchButton);

}

async verifySearchedProducts() {

    await this.isVisible(this.searchedProductsHeading);

}

async verifySearchResults() {

    const count = await this.page
        .locator(this.productCards)
        .count();

    expect(count).toBeGreaterThan(0);

}
}