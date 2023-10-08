import { test, expect } from "@playwright/test";

const headerComponentElements = {
  headerLogo: "universal-nav-logo",
  aisSearchBoxInput: "ais-SearchBox-input",
  toggleLangButton: "toggle-lang-button",
  toggleButtonNav: "toggle-button-nav",
  navLangList: "nav-lang-list",
  signupBtn: "signup-btn",
} as const;

// Navigating to the home page before each test
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// Closing the page after all tests
test.afterAll(async ({ page }) => {
  await page.close();
});

// Test to check if there is a skip to content link
test("should have a skip to content link", async ({ page }) => {
  const skipToContentLink = await page.locator(".skip-to-content-button");
  await expect(skipToContentLink).toBeVisible();
});

// Test to check if the header logo is visible
test("Has header logo", async ({ page }) => {
  const headerLogo = page.getByTestId(headerComponentElements.headerLogo);
  await expect(headerLogo).toBeVisible();
});

// Test to check if the search box input is hidden on mobile (unless menu button is clicked) and visible on desktop on navbar
test("should hide search box input on mobile (unless menu button is clicked) and show on desktop on navbar", async ({
  page,
  isMobile,
}) => {
  const aisSearchBoxInput = page.getByTestId(
    headerComponentElements.aisSearchBoxInput
  );
  const menuButton = page.getByTestId(headerComponentElements.toggleButtonNav);

  if (isMobile) {
    // Check if search box is initially hidden on mobile
    await expect(aisSearchBoxInput).toBeHidden();

    // Click menu button to open the menu
    await menuButton.click();

    // Now the search box should be visible
    await expect(aisSearchBoxInput).toBeVisible();
  } else {
    // On desktop, the search box should always be visible
    await expect(aisSearchBoxInput).toBeVisible();
  }
});

// Test to check if the toggle language button is visible
test("Has toggle lang button", async ({ page }) => {
  const toggleLangButton = page.getByTestId(
    headerComponentElements.toggleLangButton
  );
  await expect(toggleLangButton).toBeVisible();
});

// Test to check if the language list is displayed when the language button is clicked
test("should display language list on lang button is clicked", async ({
  page,
}) => {
  const toggleLangButton = page.getByTestId(
    headerComponentElements.toggleLangButton
  );

  // Click language button to open the language list
  await toggleLangButton.click();

  const navLangList = page.getByTestId(headerComponentElements.navLangList);

  // Now the language list should be visible
  await expect(navLangList).toBeVisible();

  const navLangListOptions = navLangList.locator(".nav-lang-list-option");

  // Check if there are 8 options in the language list
  await expect(navLangListOptions).toHaveCount(8);

  // Check if all options in the language list are visible
  for (const option of await navLangListOptions.all()) {
    await expect(option).toBeVisible();
  }
});

// Test to check if the navigation toggle button is visible
test("Has toggle button nav", async ({ page }) => {
  const toggleButtonNav = page.getByTestId(
    headerComponentElements.toggleButtonNav
  );
  await expect(toggleButtonNav).toBeVisible();
});

// Test to check if the menu list is displayed when the menu button is clicked
test("should display menu list on menu button is clicked", async ({ page }) => {
  const toggleButtonNav = page.getByTestId(
    headerComponentElements.toggleButtonNav
  );

  // Click menu button to open the menu
  await toggleButtonNav.click();

  const displayMenu = page.locator(".display-menu");

  // Now the menu should be visible
  await expect(displayMenu).toBeVisible();

  const navLinks = displayMenu.locator(".nav-link");

  // Check if there are 7 links in the menu
  await expect(navLinks).toHaveCount(7);

  // Check if all links in the menu are visible
  for (const link of await navLinks.all()) {
    await expect(link).toBeVisible();
  }
});

// Test to check if the sign up button is visible
test("Has sign up button", async ({ page }) => {
  const signupBtn = page.getByTestId(headerComponentElements.signupBtn);
  await expect(signupBtn).toBeVisible();
});
