const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginbtn =
      '//*[@id="page"]/header[1]/div[1]/div[2]/div/div/div[3]/div/a';
    this.emailInput = '//*[@id="username"]';
    this.passwordInput = '//*[@id="password"]';
    this.loginButton = '//*[@id="customer_login"]/div[1]/form/p[3]/button';
    this.account = '//*[@id="post-30"]/header/h1';
    this.errorMessage = '//*[@id="sign-in-form"]/div[2]';
    this.unknownError = '//*[@id="post-30"]/div/div/div[1]/ul/li';
    this.searchIcon =
      '//*[@id="page"]/header[1]/div[1]/div[2]/div/div/div[1]/div/a/i[1]/svg';
  }

  async login(email, password) {
    await this.page.locator(this.loginbtn).click();
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.loginButton).click();
    await this.page.waitForTimeout(3000);
  }

  async verifyValidLogin() {
    await expect(this.page.locator(this.account)).toHaveText("My account");
  }

  async invalidLogin(err) {
    await expect(this.page.locator(this.unknownError)).toHaveText(err);
  }
};
