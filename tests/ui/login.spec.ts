import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );
});