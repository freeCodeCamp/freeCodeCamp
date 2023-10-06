import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header component', () => {
  test('should render site header', async ({ page }) => {
    const header = page.getByRole('navigation');
    await expect(header).toBeVisible();
  });

  test('should render skip to content button', async ({ page }) => {
    const skipToContent = page.getByTestId('skip-to-content-button');
    await expect(skipToContent).toBeVisible();
    await expect(skipToContent).toHaveAttribute('href', '#content-start');
  });

  test('should render header navigation', async ({ page }) => {
    const headerNavigation = page.getByTestId('universal-nav');
    await expect(headerNavigation).toBeVisible();
  });

  test('should render toogle language button', async ({ page }) => {
    const toggleLangButton = page.getByTestId('toggle-language-button');
    await expect(toggleLangButton).toBeVisible();
  });

  test('should render searchbar', async ({ page, isMobile }) => {
    const searchbar = page.getByTestId('fcc-searchbar');

    if (isMobile) {
      await expect(searchbar).toBeHidden();
    } else {
      await expect(searchbar).toBeVisible();
    }
  });

  test('should render menu button', async ({ page }) => {
    const searchbar = page.getByTestId('menu-button');
    await expect(searchbar).toBeVisible();
  });

  test('should only show menu button text on desktop', async ({
    page,
    isMobile
  }) => {
    const searchbar = page.getByTestId('menu-button-text');

    if (isMobile) {
      await expect(searchbar).toBeHidden();
    } else {
      await expect(searchbar).toBeVisible();
    }
  });
});
