import { execSync } from 'child_process';
import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Public profile certifications', () => {
  test('Should show claimed certifications if the username has all lowercase characters', async ({
    page
  }) => {
    await page.goto('/certifieduser');

    await expect(
      page.getByRole('link', { name: /View.+Certification/ })
    ).toHaveCount(25);
  });

  test('Should show claimed certifications if the username includes uppercase characters', async ({
    page
  }) => {
    await page.goto('/certifieduser');

    await page
      .getByRole('button', { name: translations.profile['edit-personal-info'] })
      .click();

    await page.getByLabel('Username').fill('CertifiedBoozer');
    await page.getByRole('button', { name: 'Save' }).nth(0).click();
    await expect(page.getByTestId('flash-message')).toContainText(
      /We have updated your username to/
    );
    await page.goto('/certifiedboozer');

    await page.waitForURL('/certifiedboozer');
    await expect(
      page.getByRole('link', { name: /View.+Certification/ })
    ).toHaveCount(25);
  });

  test.afterAll(() => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
  });
});
