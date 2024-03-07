import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display correct placeholder', async ({ page, isMobile }) => {
    if (isMobile) {
      const menuButton = page.getByRole('button', {
        name: translations.buttons.menu
      });
      await expect(menuButton).toBeVisible();
      await menuButton.click();

      const searchInput = page.getByLabel(translations.search.label);

      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute(
        'placeholder',
        'Search 9,000+ tutorials'
      );
    } else {
      const searchInput = page.getByLabel(translations.search.label);

      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute(
        'placeholder',
        'Search 10,700+ tutorials'
      );
    }
  });

  test('should return the search results when the user presses Enter', async ({
    context,
    page,
    isMobile
  }) => {
    if (isMobile) {
      const menuButton = page.getByRole('button', {
        name: translations.buttons.menu
      });
      await menuButton.click();

      const searchInput = page.getByLabel(translations.search.label);
      await expect(searchInput).toBeVisible();

      await searchInput.fill('test');
      await page.keyboard.press('Enter');

      // Wait for the new page to load.
      const newPage = await context.waitForEvent('page');
      await newPage.waitForLoadState();

      expect(newPage.url()).toBe(
        'https://www.freecodecamp.org/news/search/?query=test'
      );
    } else {
      const searchInput = page.getByLabel(translations.search.label);
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

  test('should return the search results when the user clicks the search button', async ({
    context,
    page,
    isMobile
  }) => {
    if (isMobile) {
      const menuButton = page.getByRole('button', {
        name: translations.buttons.menu
      });
      await menuButton.click();

      const searchInput = page.getByLabel(translations.search.label);
      await expect(searchInput).toBeVisible();

      await searchInput.fill('test');
      await page
        .getByRole('button', { name: translations.icons.magnifier })
        .click();

      // Wait for the new page to load.
      const newPage = await context.waitForEvent('page');
      await newPage.waitForLoadState();

      expect(newPage.url()).toBe(
        'https://www.freecodecamp.org/news/search/?query=test'
      );
    } else {
      const searchInput = page.getByLabel(translations.search.label);
      await expect(searchInput).toBeVisible();

      await searchInput.fill('test');
      await page
        .getByRole('button', { name: translations.icons.magnifier })
        .click();

      // Wait for the new page to load.
      const newPage = await context.waitForEvent('page');
      await newPage.waitForLoadState();

      expect(newPage.url()).toBe(
        'https://www.freecodecamp.org/news/search/?query=test'
      );
    }
  });

  test('should clear the search input when the user clicks the clear button', async ({
    page,
    isMobile
  }) => {
    if (isMobile) {
      const menuButton = page.getByRole('button', {
        name: translations.buttons.menu
      });
      await menuButton.click();

      const searchInput = page.getByLabel(translations.search.label);
      await expect(searchInput).toBeVisible();

      await searchInput.fill('test');
      await page
        .getByRole('button', { name: translations.icons['input-reset'] })
        .click();

      await expect(searchInput).toHaveValue('');
    } else {
      const searchInput = page.getByLabel(translations.search.label);
      await expect(searchInput).toBeVisible();

      await searchInput.fill('test');
      await page
        .getByRole('button', { name: translations.icons['input-reset'] })
        .click();

      await expect(searchInput).toHaveValue('');
    }
  });
});
