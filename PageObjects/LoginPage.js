export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameTextField = page.locator('#user-name');
        this.passwordTextField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
    async openApplication() {
        await this.page.goto('/');
    }
    async loginToApplication(username, password) {
        await this.usernameTextField.fill(username);
        await this.passwordTextField.fill(password);
        await this.loginButton.click();
    }
    async closeApplication() {
        await this.page.close();
    }

}