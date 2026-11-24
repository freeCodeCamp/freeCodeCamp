import { test, expect } from './fixtures/isolated-user';

test.use({ userPreset: 'certified' });

test.describe('signing in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test('welcomes the user', async ({ isolatedPage: page }) => {
    const welcomeText = 'Welcome back, Full Stack User.';
    await page.goto('/learn');
    await expect(page.getByText(welcomeText)).not.toBeVisible();

    await page.getByRole('link', { name: 'Sign in' }).first().click();

    await expect(page.getByText(welcomeText)).toBeVisible();
  });
});
