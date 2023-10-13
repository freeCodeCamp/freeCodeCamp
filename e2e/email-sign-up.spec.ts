import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/email-sign-up');
});

test.describe('Email sign-up page', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page).toHaveTitle(`Email Sign Up | freeCodeCamp.org`);
    await expect(
      page.getByText(
        'freeCodeCamp is a proven path to your first software developer job.'
      )
    ).toBeVisible();
    const button = page.getByTestId('email-sign-up-button');
    await expect(button).toBeVisible();
    await button.click();
    await expect(page).toHaveURL(/.*\/learn\/?$/);
  });
});
