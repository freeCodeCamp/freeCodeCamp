import { test, expect } from '@playwright/test';

const searchElements = {
  searchInput: 'fcc-search-input',
  searchButton: 'fcc-search-button',
  searchClear: 'fcc-search-clear'
};

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('should display correct placeholder', async ({ page, isMobile }) => {
    const search = page.getByTestId(searchElements.searchInput);
    if (isMobile) {
      await expect(search).not.toBeVisible();
    } else {
      await expect(search).toHaveAttribute(
        'placeholder',
        'Search 9,000+ tutorials'
      );
    }
  });

  test('searching with enter key', async ({ context, page, isMobile }) => {
    const search = page.getByTestId(searchElements.searchInput);
    if (isMobile) {
      await expect(search).not.toBeVisible();
    } else {
      await search.fill('test');
      await page.keyboard.press('Enter');

      // wait for results to open in new window
      await page.waitForTimeout(1000);

      const url = context.pages()[1].url();
      expect(url).toBe('https://www.freecodecamp.org/news/search/?query=test');
    }
  });

  test('searching with search button click', async ({
    context,
    page,
    isMobile
  }) => {
    const search = page.getByTestId(searchElements.searchInput);
    if (isMobile) {
      await expect(search).not.toBeVisible();
    } else {
      await search.fill('test');
      await page.getByTestId(searchElements.searchButton).click();

      // wait for results to open in new window
      await page.waitForTimeout(1000);

      const url = context.pages()[1].url();
      expect(url).toBe('https://www.freecodecamp.org/news/search/?query=test');
    }
  });

  test('clearing search with clear button', async ({ page, isMobile }) => {
    const search = page.getByTestId(searchElements.searchInput);
    if (isMobile) {
      await expect(search).not.toBeVisible();
    } else {
      await search.fill('test');
      await page.getByTestId(searchElements.searchClear).click();

      await expect(search).toHaveValue('');
    }
  });
});
