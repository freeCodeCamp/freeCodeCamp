import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';

test.use({
  userPreset: 'certified',
  userOverrides: { isFullStackCert: false }
});

test.beforeEach(async ({ page, isolatedUser }) => {
  await page.goto(`/${isolatedUser.username}`);

  await page.getByRole('button', { name: 'Edit my profile' }).click();
});

test('Should allow empty string in any field in about settings', async ({
  page
}) => {
  test.setTimeout(20000);

  const saveButton = page.getByRole('button', {
    name: translations.settings.headings['personal-info']
  });

  const nameInput = page.getByLabel(translations.settings.labels.name, {
    exact: true
  });
  const locationInput = page.getByLabel(translations.settings.labels.location);
  const pictureInput = page.getByLabel(translations.settings.labels.picture);
  const aboutInput = page.getByLabel(translations.settings.labels.about);
  const updatedAlert = page
    .getByRole('alert')
    .filter({ hasText: translations.flash['updated-about-me'] })
    .first();

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
  await page.getByRole('button', { name: 'Edit my profile' }).click();
  await nameInput.fill('');
  await locationInput.fill('');
  await pictureInput.fill('');
  await aboutInput.fill('');

  await expect(saveButton).not.toBeDisabled();
  await saveButton.click();
  await expect(updatedAlert).toBeVisible();

  await page.reload();

  await page.getByRole('button', { name: 'Edit my profile' }).click();
  await expect(nameInput).toHaveValue('');
  await expect(locationInput).toHaveValue('');
  await expect(pictureInput).toHaveValue('');
  await expect(aboutInput).toHaveValue('');
});
