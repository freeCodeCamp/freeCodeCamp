import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
test.use({ storageState: 'playwright/.auth/certified-user.json' });

const settingsObject = {
  userNamePlaceholder: '{{username}}',
  userNameUpdateLowerCase: 'quincy',
  userNameUpdateUpperCase: 'Mrugesh',
  userNameAvailable: 'Sem',
  userNameAvailablePressingEnter: 'Oliver',
  certifiedUsername: 'certifieduser',
  testUser: 'testuser',
  errorCode: '404',
  invalidUserName: 'user!',
  tooShortUserName: 'us',
  notAvailableUsername: 'Twaha'
};

test.describe('Username Settings Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
  });

  test('Should display Username Input and Save Button', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await expect(inputLabel).toBeVisible();
    await expect(saveButton).toBeVisible();
  });

  test('Should handle Reserved Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.errorCode);
    await expect(
      page.getByText(
        translations.settings.username['is a reserved error code'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.errorCode
        )
      )
    ).toBeVisible();
  });

  test('Should handle Invalid Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.invalidUserName);
    await expect(
      page.getByText(
        translations.settings.username['contains invalid characters'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.invalidUserName
        )
      )
    ).toBeVisible();
  });

  test('Should handle Unavailable Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.notAvailableUsername);
    await expect(
      page.getByText(
        translations.settings.username['unavailable'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.notAvailableUsername
        )
      )
    ).toBeVisible();
  });

  test('Should handle Too Short Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.tooShortUserName);
    await expect(
      page.getByText(
        translations.settings.username['is too short'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.tooShortUserName
        )
      )
    ).toBeVisible();
  });

  test('Should save valid Username', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await inputLabel.fill(settingsObject.userNameAvailable);
    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(
      page.getByText(
        translations.flash['username-updated'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.userNameAvailable
        )
      )
    ).toBeVisible();
  });

  test('should update username in lowercase and reflect in the UI', async ({
    page
  }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await inputLabel.fill(settingsObject.userNameUpdateLowerCase);
    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(
      page.getByText(
        translations.flash['username-updated'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.userNameUpdateLowerCase
        )
      )
    ).toBeVisible();
  });

  test('should update username in uppercase and reflect in the UI', async ({
    page
  }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await inputLabel.fill(settingsObject.userNameUpdateUpperCase);
    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(
      page.getByText(
        translations.flash['username-updated'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.userNameUpdateUpperCase
        )
      )
    ).toBeVisible();
  });

  test('should update username by pressing enter', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.testUser);

    await expect(
      page.getByText(translations.settings.username.available)
    ).toBeVisible();

    await inputLabel.press('Enter');

    await expect(
      page.getByText(
        translations.flash['username-updated'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.testUser
        )
      )
    ).toBeVisible();
  });
});
