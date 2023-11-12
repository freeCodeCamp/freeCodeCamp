import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const searchElements = {
  searchButton: 'fcc-search-button',
  searchClear: 'fcc-search-clear'
};

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display correct placeholder', async ({ page, isMobile }) => {
    const searchInput = page.getByLabel(translations.search.label);

    if (isMobile) {
      await expect(searchInput).not.toBeVisible();
    } else {
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute(
        'placeholder',
        'Search 9,000+ tutorials'
      );
    }
  });

  test('searching with enter key', async ({ context, page, isMobile }) => {
    const searchInput = page.getByLabel(translations.search.label);

    if (isMobile) {
      await expect(searchInput).not.toBeVisible();
    } else {
      await expect(searchInput).toBeVisible();
      await searchInput.fill('test');
      await page.keyboard.press('Enter');

      // Wait for the new page to load.
      const newPage = await context.waitForEvent('page');
      await newPage.waitForLoadState();

      expect(newPage.url()).toBe(
        'https://www.freecodecamp.org/news/search/?query=test'
      );
    }
  });

  test('searching with search button click', async ({
    context,
    page,
    isMobile
  }) => {
    const searchInput = page.getByLabel(translations.search.label);

    if (isMobile) {
      await expect(searchInput).not.toBeVisible();
    } else {
      await expect(searchInput).toBeVisible();
      await searchInput.fill('test');
      await page.getByTestId(searchElements.searchButton).click();

      // wait for results to open in new window
      await page.waitForTimeout(1000);

      const url = context.pages()[1].url();
      expect(url).toBe('https://www.freecodecamp.org/news/search/?query=test');
    }
  });

  test('clearing search with clear button', async ({ page, isMobile }) => {
    const searchInput = page.getByLabel(translations.search.label);

    if (isMobile) {
      await expect(searchInput).not.toBeVisible();
    } else {
      await expect(searchInput).toBeVisible();
      await searchInput.fill('test');
      await page.getByTestId(searchElements.searchClear).click();

      await expect(searchInput).toHaveValue('');
    }
  });
});
