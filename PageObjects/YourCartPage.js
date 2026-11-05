export class YourCartPage {
    constructor(page) {
        this.page = page;
        this.cartLogo = page.locator('#shopping_cart_container');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
    }

    async checkoutOperation() {
        await this.checkoutButton.click();
    }
}