const { BasePage } = require('../utils/BasePage');

exports.TestCasesPage = class TestCasesPage extends BasePage {

    constructor(page){

        super(page);
    
    this.testCasesHeading = "//b[text()='Test Cases']";
    }


    async verifyTestCasesPage(){

        await this.isVisible(this.testCasesHeading);

    }

}