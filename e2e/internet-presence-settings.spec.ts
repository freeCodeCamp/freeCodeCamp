import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const settingsPageElement = {
  internetPresenceForm: 'internet-presence'
} as const;

const githubUrl = 'https://github.com/certified-user';

test.beforeEach(async ({ page }) => {
  // Reset input values
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');

  await page.goto('/certifieduser');

  await page.getByRole('button', { name: 'Edit my profile' }).click();
});

test.describe('Your Internet Presence', () => {
  test.skip(({ browserName }) => browserName === 'webkit', 'flaky on Safari');

  test('should save a social link and keep it after reload', async ({
    page
  }) => {
    await expect(
      page.getByRole('heading', {
        level: 2,
        name: translations.settings.headings.internet
      })
    ).toBeVisible();

    const socialInput = page.getByRole('textbox', { name: 'GitHub' });
    await expect(socialInput).toBeVisible();
    await socialInput.fill(githubUrl);

    const saveButton = page
      .locator(`[data-testid="${settingsPageElement.internetPresenceForm}"]`)
      .getByRole('button', { name: translations.buttons.save });

    await expect(saveButton).toBeVisible();
    await saveButton.click();
    await expect(page.getByRole('alert').first()).toContainText(
      'We have updated your social links'
    );

    await page.reload();
    await page.getByRole('button', { name: 'Edit my profile' }).click();
    await expect(page.getByRole('textbox', { name: 'GitHub' })).toHaveValue(
      githubUrl
    );
  });
});
