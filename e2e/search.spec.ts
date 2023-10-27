import { test, expect } from '@playwright/test';

const searchBarElements = {
  searchBar: 'fcc-search-bar',
  searchInput: 'fcc-search-input',
  searchButton: 'fcc-search-button',
  menuButton: 'fcc-menu-button'
} as const;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Has Search Bar', async ({ page, isMobile }) => {
  if (isMobile) {
    await page.getByTestId(searchBarElements.menuButton).click();
  }
  const searchBar = page.getByTestId(searchBarElements.searchBar);
  await expect(searchBar).toBeVisible();
});

test('Has Search Button', async ({ page, isMobile }) => {
  if (isMobile) {
    await page.getByTestId(searchBarElements.menuButton).click();
  }
  const searchButton = page.getByTestId(searchBarElements.searchButton);
  await expect(searchButton).toBeVisible();
});

test('Can Search', async ({ context, page, isMobile }) => {
  if (isMobile) {
    await page.getByTestId(searchBarElements.menuButton).click();
  }
  const searchInput = page.getByTestId(searchBarElements.searchInput);
  const searchButton = page.getByTestId(searchBarElements.searchButton);
  await searchInput.fill('test');
  await searchButton.click();
  const pagePromise = context.waitForEvent('page');
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  const allPages = context.pages();
  expect(allPages.length).toEqual(2);
  await expect(newPage).toHaveTitle('Search - freeCodeCamp.org');
});
