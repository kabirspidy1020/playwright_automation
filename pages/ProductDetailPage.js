const{BasePage}= require('../utils/BasePage');

exports.ProductDetailPage= class ProductDetailPage extends BasePage{
    constructor(page){
        super(page);

        this.productName = "//div[@class='product-information']/h2";

        this.category = "//div[@class='product-information']/p[1]";

        this.price="//div[@class='product-information']/span/span";
        

        this.availability = "//div[@class='product-information']/p[2]";

        this.condition = "//div[@class='product-information']/p[3]";

        this.brand = "//div[@class='product-information']/p[4]";
    }

    async verifyProductDetails() {

    await this.isVisible(this.productName);

    await this.isVisible(this.category);

    await this.isVisible(this.price);

    await this.isVisible(this.availability);

    await this.isVisible(this.condition);

    await this.isVisible(this.brand);

}
}