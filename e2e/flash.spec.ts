import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByText('Night Mode').click();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Flash Component Tests', () => {
  test('should display the correct flash message', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit', 'due to invalid csrf token error');
    await expect(page.getByTestId('flash-message')).toContainText(
      'We have updated your theme'
    );
  });

  test('should close the flash message', async ({ page }) => {
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByTestId('flash-message')).not.toBeVisible();
  });
});
