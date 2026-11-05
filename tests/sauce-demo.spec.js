import { test, expect, chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Sauce Demo End to End Test', async ({ page }) => {
    //Login to the application
    await page.goto('/');
    await page.fill('#user-name', process.env.SAUCE_USERNAME);
    await page.fill('#password', process.env.SAUCE_PASSWORD);
    await page.click('#login-button');

    //Add items to the cart
    await page.click('#add-to-cart-sauce-labs-backpack');

    //Click on the cart icon
    await page.click('.shopping_cart_link');

    //Checkout the items in the cart
    await page.click('#checkout');

    //Fill the checkout information
    await page.fill('#first-name', 'Niranjan');
    await page.fill('#last-name', 'Vaddi');
    await page.fill('#postal-code', '509321');
    await page.click('#continue');

    //Finish the checkout process
    await page.click('#finish');

    //Back to home page
    await page.click('#back-to-products');

    //Logout from the application
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await page.close();

});