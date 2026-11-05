export class HomePage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartLogo = page.locator('#shopping_cart_container');
        this.sideMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
        await this.cartLogo.click();
    }

    async logoutFromApplication() {
        await this.sideMenuButton.click();
        await this.logoutButton.click();
    }
}