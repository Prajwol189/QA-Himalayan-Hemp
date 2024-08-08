const { test, expect } = require("playwright/test");
const LoginTestData = require("../../Fixtures/Login.fixture.json");

const { DashboardPage } = require("../../page-objects/dashboard.po");
const { LoginPage } = require("../../page-objects/login.po");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  const login = new LoginPage(page);
  await login.login(
    LoginTestData.validUser.email,
    LoginTestData.validUser.password
  );
  await login.verifyValidLogin();
});

test.describe("buy product", () => {
  test.describe.configure({ mode: "serial" });
  test("add to cart", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.addToCart();
  });

  test("increase quantity", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.increseQuantity();
  });

  test("delete item", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.deleteItem();
  });
  test("logout", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.logout();
  });
});
