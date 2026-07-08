const { expect } = require('@playwright/test');

exports.BasePage = class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

    async fill(locator, value) {
        await this.page.locator(locator).fill(value);
    }

    async isVisible(locator) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }

    async selectDropdown(locator, value) {
        await this.page.locator(locator).selectOption(value);
    }

    async hover(locator) {
        await this.page.locator(locator).hover();
    }

    async waitForElement(locator) {
        await this.page.locator(locator).waitFor();
    }

    
};