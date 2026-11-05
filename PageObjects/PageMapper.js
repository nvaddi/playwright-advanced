import { LoginPage } from '../PageObjects/LoginPage.js';
import { HomePage } from '../PageObjects/HomePage.js';
import { YourCartPage } from '../PageObjects/YourCartPage.js';
import { YourInfoPage } from '../PageObjects/YourInfoPage.js';
import { OverviewPage } from '../PageObjects/OverviewPage.js';
import { BackToHome } from '../PageObjects/BackToHome.js';


export class PageMapper {
    constructor(page) {
        this.page = page;
        this.loginPageInstance = new LoginPage(page);
        this.homePageInstance = new HomePage(page);
        this.yourCartPageInstance = new YourCartPage(page);
        this.yourInfoPageInstance = new YourInfoPage(page);
        this.overviewPageInstance = new OverviewPage(page);
        this.backToHomeInstance = new BackToHome(page);
    }

    getLoginPageInstance() {
        return this.loginPageInstance;
    }

    getHomePageInstance() {
        return this.homePageInstance;
    }

    getYourCartPageInstance() {
        return this.yourCartPageInstance;
    }

    getYourInfoPageInstance() {
        return this.yourInfoPageInstance;
    }

    getOverviewPageInstance() {
        return this.overviewPageInstance;
    }

    getBackToHomeInstance() {
        return this.backToHomeInstance;
    }
}