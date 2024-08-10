const { expect } = require("@playwright/test");
// const dashboardTestData = require("../Fixtures/Dashboard.fixture.json");

exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    this.searchIcon =
      '//*[@id="page"]/header[1]/div[1]/div[2]/div/div/div[1]/div/a';
    this.searchInput =
      '//*[@id="woocommerce-product-search-field-search-form-1"]';
    this.searchButton = '//*[@id="page"]/header[1]/div[2]/form/button';
    this.product = '//*[@id="primary"]/ul/li[1]/a';

    this.addToCartButton =
      '//*[@id="product-1749"]/div[1]/div[2]/form/div/button';
    this.cart = '//*[@id="site-header-cart"]/div[1]/a';

    this.incQuantity =
      '//*[@id="post-28"]/div/div[1]/form/table/tbody/tr[1]/td[5]/div/a[2]';
    this.updateCart =
      '//*[@id="post-28"]/div/div[1]/form/table/tbody/tr[2]/td/button';
    this.deleteItems =
      '//*[@id="post-28"]/div/div[1]/form/table/tbody/tr[1]/td[1]/a';
    this.account = '//*[@id="post-30"]/header/h1';

    this.logoutBtn = '//*[@id="post-30"]/div/div/nav/ul/li[6]/a';
  }

  async addToCart() {
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.searchIcon).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.searchInput).fill("hemp bag");
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.searchButton).click();
    await this.page.waitForTimeout(5000);
    await this.page.locator(this.product).click();
    await this.page.locator(this.addToCartButton).click();

    await this.page.goto("https://hemphimalayan.com/cart/");
  }

  async increseQuantity() {
    await this.page.goto("https://hemphimalayan.com/cart/");
    for (let i = 0; i <= 3; i++) {
      await this.page.locator(this.incQuantity).click();
    }

    await this.page.locator(this.updateCart).click();
    await this.page.waitForTimeout(3000);
  }

  async deleteItem() {
    await this.page.goto("https://hemphimalayan.com/cart/");
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.deleteItems).click();
    await this.page.waitForTimeout(3000);
  }

  async logout() {
    await this.page.goto("https://hemphimalayan.com/my-account/");

    await this.page.locator(this.logoutBtn).click();
    await this.page.waitForTimeout(3000);
  }
};
