const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginbtn = '//*[@id="main"]/header/div[1]/div/div[2]/ul/li/a/span';
    this.emailInput = '//*[@id="inputEmail"]';
    this.passwordInput = '//*[@id="inputPassword"]';
    this.loginButton = '//*[@id="sign-in-form"]/input[2]';
    this.account = '//*[@id="main"]/header/div[1]/div/div[2]/ul/li[2]/a/span';
    this.errorMessage = '//*[@id="sign-in-form"]/div[2]';
  }

  async login(email, password) {
    await this.page.locator(this.loginbtn).click();
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async verifyValidLogin() {
    await expect(this.page.locator(this.account)).toHaveText("My Account");
  }

  async invalidLogin() {
    await expect(this.page.locator(this.errorMessage)).toHaveText(
      "Invalid email or password!"
    );
  }
};
