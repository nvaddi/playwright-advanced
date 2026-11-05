import { test, expect } from '@playwright/test';
import { PageMapper } from '../PageObjects/PageMapper.js';
const data = require('../data/users.js');

test('open and close the application', async ({ page }) => {
    const pageMapperInstance = new PageMapper(page);

    await page.pause();
    //Launching the application
    await pageMapperInstance.getLoginPageInstance().openApplication();

    //Loggin into the application
    await pageMapperInstance.getLoginPageInstance().loginToApplication(data.standardUser.username, data.standardUser.password);
    await page.waitForTimeout(1000);
 
    //Adding products to cart
    await pageMapperInstance.getHomePageInstance().addProductToCart();
    await page.waitForTimeout(1000);

    //Checkout products
    await pageMapperInstance.getYourCartPageInstance().checkoutOperation();

    //Enter your information
    await pageMapperInstance.getYourInfoPageInstance().fillForm('Niranjan', 'Vaddi', '509321');
    await page.waitForTimeout(1000);

    //Place order on overview page
    await pageMapperInstance.getOverviewPageInstance().placeOrder();
    await page.waitForTimeout(1000);

    //Verify order confirmation message
    const confirmationMessage = await page.locator('.complete-header').textContent();
    expect(confirmationMessage).toBe('Thank you for your order!');
    await page.waitForTimeout(1000);

    //Back to home page
    await pageMapperInstance.getBackToHomeInstance().backToHomeOperation();
    await page.waitForTimeout(1000);

    //Logout from the application
    await pageMapperInstance.getHomePageInstance().logoutFromApplication();
    await pageMapperInstance.getLoginPageInstance().closeApplication();

    await page.close();
});