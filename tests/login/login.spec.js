const { test } = require("@playwright/test");
const testData = require("../../Fixtures/Login.fixture.json");
const { LoginPage } = require("../../page-objects/login.po");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Login tests", () => {
  test.describe.configure({ mode: "serial" });
  test.describe("valid login tests", () => {
    test("valid login", async ({ page }) => {
      const login = new LoginPage(page);
      await login.login(testData.validUser.email, testData.validUser.password);
      await login.verifyValidLogin();
    });
  });

  test.describe("invalid login tests", () => {
    test.describe.configure({ mode: "serial" });
    test("login invalid", async ({ page }) => {
      const login = new LoginPage(page);
      await login.login(
        testData.invalidUser.invalidCredentials.email,
        testData.invalidUser.invalidCredentials.password
      );

      await login.invalidLogin(
        "Unknown email address. Check again or try your username."
      );
    });

    test("empty login", async ({ page }) => {
      const login = new LoginPage(page);
      await login.login(
        testData.invalidUser.empty.email,
        testData.invalidUser.empty.password
      );
      await login.invalidLogin("Error: Username is required.");
    });

    test("password with leading space", async ({ page }) => {
      const login = new LoginPage(page);
      await login.login(
        testData.invalidUser.passwordLeadingSpace.email,
        testData.invalidUser.passwordLeadingSpace.password
      );
      await login.invalidLogin(
        "Error: The password you entered for the email address mprajwol518@gmail.com is incorrect. Lost your password?"
      );
    });
  });
});
