import { Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string) {
        await this.page.locator('#user-name').fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator('#password').fill(password);
    }

    async clickLoginButton() {
        await this.page.locator('#login-button').click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}