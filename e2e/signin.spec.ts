import { test, expect } from '@playwright/test';

test.describe('signing in', () => {
  test('welcomes the user', async ({ page }) => {
    const welcomeText = 'Welcome back, Full Stack User.';
    await page.goto('/');
    await expect(page.getByText(welcomeText)).not.toBeVisible();

    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect(page.getByText(welcomeText)).toBeVisible();
  });
});
