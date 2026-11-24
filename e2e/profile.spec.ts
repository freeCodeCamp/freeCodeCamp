import { test, expect } from './fixtures/isolated-user';

test.use({ userPreset: 'certified' });

test.describe('Profile page', () => {
  test('loads my own profile from the signed-in session', async ({
    page,
    isolatedUser
  }) => {
    await page.goto(`/${isolatedUser.username}`);

    await expect(
      page.getByRole('heading', { name: `@${isolatedUser.username}` })
    ).toBeVisible();
  });

  test.describe("when viewing someone else's profile", () => {
    test('loads the public profile while signed in', async ({
      page,
      createUser
    }) => {
      const publicUser = await createUser('public');
      await page.goto(`/${publicUser.username.toUpperCase()}`);

      await expect(
        page.getByRole('heading', { name: `@${publicUser.username}` })
      ).toBeVisible();
    });

    test.describe('logged out', () => {
      test.use({ storageState: { cookies: [], origins: [] } });

      test('loads the public profile', async ({ page, createUser }) => {
        const publicUser = await createUser('public');
        await page.goto(`/${publicUser.username.toUpperCase()}`);

        await expect(
          page.getByRole('heading', { name: `@${publicUser.username}` })
        ).toBeVisible();
      });
    });
  });
});
