export class OverviewPage {
    constructor(page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
    }

    async placeOrder() {
        await this.finishButton.click();
    }
}