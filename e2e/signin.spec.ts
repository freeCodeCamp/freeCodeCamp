import { test, expect } from './fixtures/isolated-user';
import { useIsolatedSignIn } from './utils/signin';

test.use({ userPreset: 'certified' });

test.describe('signing in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test('welcomes the user', async ({ page, isolatedUser }) => {
    const welcomeText = 'Welcome back, Full Stack User.';
    await useIsolatedSignIn(page, isolatedUser.email);
    await page.goto('/learn');
    await expect(page.getByText(welcomeText)).not.toBeVisible();

    await page.getByRole('link', { name: 'Sign in' }).first().click();

    await expect(page.getByText(welcomeText)).toBeVisible();
  });
});
