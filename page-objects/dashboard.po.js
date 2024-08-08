const { expect } = require("@playwright/test");
// const dashboardTestData = require("../Fixtures/Dashboard.fixture.json");

exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    this.searchInput = '//*[@id="myHeader"]/div[1]/div/div/div[2]/input[1]';
    this.searchBtn = '//*[@id="myHeader"]/div[1]/div/div/span/form/button';
    this.productAddtoCart =
      '//*[@id="main-content"]/div/div/div/div[2]/div[1]/button';
    this.cartBtn = '//*[@id="myHeader"]/div[2]/div/div[3]/div/div[2]';
    this.increaseBtn =
      '//*[@id="main-content"]/section[2]/div/section/div[1]/table/tbody/tr/td[4]/div/div/span[2]/button/i';
    this.updateCart =
      '//*[@id="main-content"]/section[2]/div/section/div[1]/div/button[2]';
    this.deleteItems =
      '//*[@id="main-content"]/section[2]/div/section/div[1]/table/tbody/tr/td[6]/button/i';
    this.logoutBtn = '//*[@id="main"]/header/div[1]/div/div[2]/ul/li[4]/a/span';
  }

  async addToCart() {
    await this.page.locator(this.searchInput).fill("sunflower oil");
    await this.page.locator(this.searchBtn).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.productAddtoCart).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.cartBtn).click();
  }

  async increseQuantity() {
    await this.page.locator(this.cartBtn).click();
    for (let i = 0; i <= 3; i++) {
      await this.page.locator(this.increaseBtn).click();
    }
    await this.page.waitForTimeout(3000);

    await this.page.locator(this.updateCart).click();
    await this.page.waitForTimeout(3000);
  }

  async deleteItem() {
    await this.page.locator(this.cartBtn).click();
    await this.page.waitForTimeout(3000);

    await this.page.locator(this.deleteItems).click();
    await this.page.waitForTimeout(3000);
  }

  async logout() {
    await this.page.locator(this.logoutBtn).click();
  }
};
