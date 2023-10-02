import { test, expect, Page } from '@playwright/test';

test.describe('404 Page', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/404');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Should have a relevant page title', async () => {
    await expect(page).toHaveTitle('404 Page Not Found');
  });

  test('Should display a message indicating a 404 error', async () => {
    await expect(
      page.locator("text=The page you're looking for does not exist.")
    ).toBeVisible();
  });

  test('Should have a link to the homepage', async () => {
    const homepageLink = await page.locator(
      '[data-playwright-test-label="homepage-link"]'
    );
    await expect(homepageLink).toBeVisible();
    await expect(homepageLink).toHaveText('Go to Homepage');
  });
});
