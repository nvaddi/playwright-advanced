import { expect, test } from '@playwright/test';

test('Visual comparison', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('');
    await expect(page).toHaveScreenshot();


    await page.close();

});