import { test, expect } from './fixtures/isolated-user';

test.describe('Profile page', () => {
  test('loads my own profile from the signed-in session', async ({
    isolatedUser,
    page
  }) => {
    await page.goto(`/${isolatedUser.username}`);

    await expect(
      page.getByRole('heading', { name: `@${isolatedUser.username}` })
    ).toBeVisible();
  });

  test.describe("when viewing someone else's profile", () => {
    test('loads the public profile while signed in', async ({ page }) => {
      await page.goto('/publicUser');

      await expect(
        page.getByRole('heading', { name: '@publicuser' })
      ).toBeVisible();
    });

    test.describe('logged out', () => {
      test.use({ storageState: { cookies: [], origins: [] } });

      test('loads the public profile', async ({ page }) => {
        await page.goto('/publicUser');

        await expect(
          page.getByRole('heading', { name: '@publicuser' })
        ).toBeVisible();
      });
    });
  });
});
