import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const getSearchInput = async ({
  page,
  isMobile
}: {
  page: Page;
  isMobile: boolean;
}) => {
  if (isMobile) {
    const menuButton = page.getByRole('button', {
      name: translations.buttons.menu
    });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
  }

  return page.getByLabel('Search');
};

test.describe('Search bar optimized', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display correct placeholder', async ({ page, isMobile }) => {
    const searchInput = await getSearchInput({ page, isMobile });

    await expect(searchInput).toBeVisible();
    // Because we're mocking Algolia requests, the placeholder
    // should be the default one.
    await expect(searchInput).toHaveAttribute(
      'placeholder',
      translations.search.placeholder.default
    );
  });

  test('should return the search results when the user presses Enter', async ({
    context,
    page,
    isMobile
  }) => {
    const searchInput = await getSearchInput({ page, isMobile });
    await expect(searchInput).toBeVisible();

    await searchInput.fill('test');
    await page.keyboard.press('Enter');

    // Wait for the new page to load.
    const newPage = await context.waitForEvent('page');
    await newPage.waitForLoadState();

    expect(newPage.url()).toBe(
      'https://www.freecodecamp.org/news/search/?query=test'
    );
  });

  test('should return the search results when the user clicks the search button', async ({
    context,
    page,
    isMobile
  }) => {
    const searchInput = await getSearchInput({ page, isMobile });
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
  });

  test('should clear the search input when the user clicks the clear button', async ({
    page,
    isMobile
  }) => {
    const searchInput = await getSearchInput({ page, isMobile });
    await expect(searchInput).toBeVisible();

    await searchInput.fill('test');
    await page
      .getByRole('button', { name: translations.icons['input-reset'] })
      .click();

    await expect(searchInput).toHaveValue('');
  });

  test('should not exist when the user navigates to a different page from the root', async ({
    page
  }) => {
    await page.getByTestId('curriculum-map-button').nth(0).click();

    // Any of the searchbar elements wont be visible for a certain amount of time, thus the timeout.
    await page.waitForTimeout(500);

    await expect(page.getByTestId('search-optimized')).not.toBeVisible();
  });

  test('should exist when the user navigates back to the root page', async ({
    page,
    isMobile
  }) => {
    await page.getByTestId('curriculum-map-button').nth(0).click();

    // If we do not wait here the history is not yet pushed in to
    // the browser context and the back navigation will default to about: blank
    await page.waitForTimeout(500);

    await page.goBack();
    await getSearchInput({ page, isMobile });
    await expect(page.getByTestId('search-optimized')).toBeVisible();
  });
});
