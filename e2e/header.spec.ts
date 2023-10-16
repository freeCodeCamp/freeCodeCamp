import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Has Logo', async ({ page }) => {
  const logo = page.locator('a.universal-nav-logo');
  await expect(logo.first()).toBeVisible();
});

test('Has Search Bar', async ({ page }) => {
  let searchBar = page.locator('input.ais-SearchBox-input');
  if (await searchBar.first().isHidden()) {
    await page.click('button.exposed-button-nav');
  }
  searchBar = page.locator('input.ais-SearchBox-input');
  await searchBar.first().fill('test');
  await expect(searchBar.first()).toBeVisible();
});

test('Has 10 Locals', async ({ page }) => {
  await page.click('button.lang-button-nav');
  const locals = page.locator('button.nav-lang-list-option');
  await expect(locals).toHaveCount(10);
  for (const local of await locals.all()) {
    await expect(local).toBeVisible();
  }
});

test('Has a Menu button', async ({ page }) => {
  await page.click('button.exposed-button-nav');
  const displayMenu = page.locator('ul.display-menu');
  await expect(displayMenu.first()).toBeVisible();
});
