import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ userPreset: 'certified' });

const settingsObject = {
  usernamePlaceholder: '{{username}}',
  usernameUpdateToLowerCase: 'quincy',
  usernameUpdateToUpperCase: 'Mrugesh',
  usernameAvailable: 'Sem',
  usernameAvailablePressingEnter: 'Oliver',
  usernameNotAvailable: 'Twaha',
  usernameInvalid: 'user!',
  usernameTooShort: 'us',
  testUser: 'testuser',
  errorCode: '404'
};

test.describe('Username Settings Validation', () => {
  test.beforeEach(async ({ page, isolatedUser }) => {
    await page.goto(`/${isolatedUser.username}`);

    await page.getByRole('button', { name: 'Edit my profile' }).click();
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
          settingsObject.usernamePlaceholder,
          settingsObject.errorCode
        )
      )
    ).toBeVisible();
  });

  test('Should handle Invalid Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.usernameInvalid);
    await expect(
      page.getByText(
        translations.settings.username['contains invalid characters'].replace(
          settingsObject.usernamePlaceholder,
          settingsObject.usernameInvalid
        )
      )
    ).toBeVisible();
  });

  test('Should handle Unavailable Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.usernameNotAvailable);
    await expect(
      page.getByText(
        translations.settings.username['unavailable'].replace(
          settingsObject.usernamePlaceholder,
          settingsObject.usernameNotAvailable
        )
      )
    ).toBeVisible();
  });

  test('Should handle Too Short Username Error', async ({ page }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(settingsObject.usernameTooShort);
    await expect(
      page.getByText(
        translations.settings.username['is too short'].replace(
          settingsObject.usernamePlaceholder,
          settingsObject.usernameTooShort
        )
      )
    ).toBeVisible();
  });

  test('Should save valid Username', async ({ page, isolatedUser }) => {
    const newUsername = `${settingsObject.usernameAvailable}-${isolatedUser.email.split('@')[0]}`;
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    const flashText = translations.flash['username-updated'].replace(
      settingsObject.usernamePlaceholder,
      newUsername
    );

    await inputLabel.fill(newUsername);
    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(
      page.getByRole('alert').filter({ hasText: flashText }).first()
    ).toBeVisible();
    await expect(page).toHaveURL(`/${newUsername}`);
  });

  test('should update username in lowercase and reflect in the UI', async ({
    page,
    isolatedUser
  }) => {
    const newUsername = `${settingsObject.usernameUpdateToLowerCase}-${isolatedUser.email.split('@')[0]}`;
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    const flashText = translations.flash['username-updated'].replace(
      settingsObject.usernamePlaceholder,
      newUsername
    );

    await inputLabel.fill(newUsername);
    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(
      page.getByRole('alert').filter({ hasText: flashText }).first()
    ).toBeVisible();
  });

  test('should update username in uppercase and reflect in the UI', async ({
    page,
    isolatedUser
  }) => {
    const newUsername = `${settingsObject.usernameUpdateToUpperCase}-${isolatedUser.email.split('@')[0]}`;
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    const flashText = translations.flash['username-updated'].replace(
      settingsObject.usernamePlaceholder,
      newUsername
    );

    await inputLabel.fill(newUsername);
    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(
      page.getByRole('alert').filter({ hasText: flashText }).first()
    ).toBeVisible();
  });

  test('should update username by pressing enter', async ({
    page,
    isolatedUser
  }) => {
    const newUsername = `${settingsObject.testUser}-${isolatedUser.email.split('@')[0]}`;
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    await inputLabel.fill(newUsername);

    const flashText = translations.flash['username-updated'].replace(
      settingsObject.usernamePlaceholder,
      newUsername
    );

    await expect(
      page.getByText(translations.settings.username.available)
    ).toBeVisible();

    await inputLabel.press('Enter');

    await expect(
      page.getByRole('alert').filter({ hasText: flashText }).first()
    ).toBeVisible();
  });

  test('should not be able to update username to the same username', async ({
    page,
    isolatedUser
  }) => {
    const inputLabel = page.getByLabel(translations.settings.labels.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await inputLabel.fill(isolatedUser.username);
    await expect(saveButton).toBeDisabled();
  });
});
