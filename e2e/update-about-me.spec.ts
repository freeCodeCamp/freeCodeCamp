import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  execSync(
    'node ./tools/scripts/seed/seed-demo-user --certified-user --set-false isFullStackCert'
  );
  await page.goto('/settings');
});
test.beforeEach(async ({ page }) => {
  await page.goto('/certifieduser');

  if (!process.env.CI) {
    await page.getByRole('button', { name: 'Preview custom 404 page' }).click();
  }

  await page.getByRole('button', { name: 'Edit' }).click();
});

test.afterAll(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
});

test('Should allow empty string in any field in about settings', async ({
  page
}) => {
  const saveButton = page.getByRole('button', {
    name: translations.settings.headings['personal-info']
  });

  const nameInput = page.getByLabel(translations.settings.labels.name, {
    exact: true
  });
  const locationInput = page.getByLabel(translations.settings.labels.location);
  const pictureInput = page.getByLabel(translations.settings.labels.picture);
  const aboutInput = page.getByLabel(translations.settings.labels.about);
  const updatedAlert = page.getByText(translations.flash['updated-about-me']);

  await nameInput.fill('Quincy Larson');
  await locationInput.fill('USA');
  await pictureInput.fill(
    'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
  );
  await aboutInput.fill('Teacher at freeCodeCamp');

  await expect(saveButton).not.toBeDisabled();
  await saveButton.click();
  await expect(updatedAlert).toBeVisible();
  // clear the alert to make sure it's gone before we save again.
  await updatedAlert.getByRole('button').click();

  await nameInput.fill('');
  await locationInput.fill('');
  await pictureInput.fill('');
  await aboutInput.fill('');

  await expect(saveButton).not.toBeDisabled();
  await saveButton.click();
  await expect(updatedAlert).toBeVisible();

  await page.reload();

  await expect(nameInput).toHaveValue('');
  await expect(locationInput).toHaveValue('');
  await expect(pictureInput).toHaveValue('');
  await expect(aboutInput).toHaveValue('');
});
