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
  await page.goto("/");

  // await login.verifyValidLogin();
});

test.describe("buy product", () => {
  test.describe.configure({ mode: "serial" });
  test("add to cart", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.addToCart();
    // await dashboard.logout();
  });

  test("increase quantity", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.increseQuantity();
    // await dashboard.logout();
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
