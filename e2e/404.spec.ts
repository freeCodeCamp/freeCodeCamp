import { test, expect, Page } from '@playwright/test';

test.describe('404 Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
  });

  test('Should have a relevant page title', async () => {
    await expect(page).toHaveTitle('Page not found| freeCodeCamp');
  });

  test('Should display a message indicating a 404 error', async () => {
    await expect(page.getByText('Page not found.')).toBeVisible();
  });
});
