export class YourInfoPage {
    constructor(page) {
        this.page = page;
        this.firstNameTextField = page.locator('#first-name');
        this.lastNameTextField = page.locator('#last-name');
        this.zipCodeTextField = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async fillForm(firstName, lastName, zipCode) {
        await this.firstNameTextField.fill(firstName);
        await this.lastNameTextField.fill(lastName);
        await this.zipCodeTextField.fill(zipCode);
        await this.continueButton.click();
    }
}