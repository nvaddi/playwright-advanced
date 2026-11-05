export class ConfirmationPage {
    constructor(page) {
        this.page = page;
        this.confirmationMessage = page.locator('.complete-header');
    }

    async getConfirmationMessage() {
        return await this.confirmationMessage.textContent();
    }
}