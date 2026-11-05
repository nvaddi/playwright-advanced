export class BackToHome {
    constructor(page) {
        this.page = page;
        this.backToHomeButton = page.locator('#back-to-products');
    }

    async backToHomeOperation() {
        await this.backToHomeButton.click();
    }
}