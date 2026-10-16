import { expect, test } from './fixtures/isolated-user';

test.use({ userPreset: 'certified' });

test.describe('Public profile certifications', () => {
  test('Should show claimed certifications if the username has all lowercase characters', async ({
    page,
    isolatedUser
  }) => {
    await page.goto(`/${isolatedUser.username}`);

    await expect(
      page.getByRole('link', { name: /View.+Certification/ })
    ).toHaveCount(26);
  });

  test('Should show claimed certifications if the username includes uppercase characters', async ({
    page,
    isolatedUser
  }) => {
    await page.goto(`/${isolatedUser.username}`);

    await page.getByRole('button', { name: 'Edit my profile' }).click();

    const newUsername = `CertifiedBoozer-${isolatedUser.email.split('@')[0]}`;
    await page.getByLabel('Username').fill(newUsername);
    await page.getByRole('button', { name: 'Save' }).nth(0).click();
    await expect(page.getByTestId('flash-message')).toContainText(
      /We have updated your username to/
    );
    await page.goto(`/${newUsername.toLowerCase()}`);

    await page.waitForURL(`/${newUsername.toLowerCase()}`);
    await expect(
      page.getByRole('link', { name: /View.+Certification/ })
    ).toHaveCount(26);
  });
});
