import { test, expect } from "@playwright/test";

const headerComponentElements = {
  headerLogo: "universal-nav-logo",
  aisSearchBoxInput: "ais-SearchBox-input",
  toggleLangButton: "toggle-lang-button",
  toggleButtonNav: "toggle-button-nav",
  navLangList: "nav-lang-list",
  signupBtn: "signup-btn",
} as const;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should have a skip to content link", async ({ page }) => {
  const skipToContentLink = await page.locator(".skip-to-content-button");
  await expect(skipToContentLink).toBeVisible();
});

test("Has header logo", async ({ page }) => {
  const headerLogo = page.getByTestId(headerComponentElements.headerLogo);
  await expect(headerLogo).toBeVisible();
});

test("should hide search box input on mobile (unless menu button is clicked) and show on desktop on navbar", async ({
  page,
  isMobile,
}) => {
  const aisSearchBoxInput = page.getByTestId(
    headerComponentElements.aisSearchBoxInput,
  );
  const menuButton = page.getByTestId(headerComponentElements.toggleButtonNav);
  if (isMobile) {
    await expect(aisSearchBoxInput).toBeHidden();
    await menuButton.click();
    await expect(aisSearchBoxInput).toBeVisible();
  } else {
    await expect(aisSearchBoxInput).toBeVisible();
  }
});

test("Has toggle lang button", async ({ page }) => {
  const toggleLangButton = page.getByTestId(
    headerComponentElements.toggleLangButton,
  );
  await expect(toggleLangButton).toBeVisible();
});

test("should display language list on lang button is clicked", async ({
  page,
}) => {
  const toggleLangButton = page.getByTestId(
    headerComponentElements.toggleLangButton,
  );
  await toggleLangButton.click();
  const navLangList = page.getByTestId(headerComponentElements.navLangList);
  await expect(navLangList).toBeVisible();
  const navLangListOptions = navLangList.locator(".nav-lang-list-option");
  await expect(navLangListOptions).toHaveCount(8);
  for (const option of await navLangListOptions.all()) {
    await expect(option).toBeVisible();
  }
});

test("Has toggle button nav", async ({ page }) => {
  const toggleButtonNav = page.getByTestId(
    headerComponentElements.toggleButtonNav,
  );
  await expect(toggleButtonNav).toBeVisible();
});

test("should display menu list on menu button is clicked", async ({ page }) => {
  const toggleButtonNav = page.getByTestId(
    headerComponentElements.toggleButtonNav,
  );
  await toggleButtonNav.click();
  const displayMenu = page.locator(".display-menu");
  await expect(displayMenu).toBeVisible();
  const navLinks = displayMenu.locator(".nav-link");
  await expect(navLinks).toHaveCount(7);
  for (const link of await navLinks.all()) {
    await expect(link).toBeVisible();
  }
});

test("Has sign up button", async ({ page }) => {
  const signupBtn = page.getByTestId(headerComponentElements.signupBtn);
  await expect(signupBtn).toBeVisible();
});
