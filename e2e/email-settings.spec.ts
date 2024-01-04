import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const settingsPageElement = {
  emailSettingsSectionHeader: 'email-settings-header',
  emailVerificationAlert: 'email-verification-alert',
  emailVerificationLink: 'email-verification-link',
  currentEmailText: 'current-email',
  saveButton: 'save-email-button',
  emailSubscriptionYesPleaseButton: 'yes-please-button',
  emailSubscriptionNoThanksButton: 'no-thanks-button',
  flashMessageAlert: 'flash-message'
} as const;

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Email Settings', () => {
  test('should display email settings section header on settings page', async ({
    page
  }) => {
    await expect(
      page.getByTestId(settingsPageElement.emailSettingsSectionHeader)
    ).toHaveText(translations.settings.email.heading);
  });

  test('should display current email address', async ({ page }) => {
    await expect(
      page.getByTestId(settingsPageElement.currentEmailText)
    ).toHaveText('foo@bar.com');
  });

  test('should disable save button by default', async ({ page }) => {
    await expect(
      page.getByTestId(settingsPageElement.saveButton)
    ).toBeDisabled();
  });

  test('should display email verification alert after email update', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

    const newEmailAddress = 'foo-update@bar.com';

    await page
      .getByLabel(translations.settings.email.new, { exact: true })
      .fill(newEmailAddress);
    await page
      .getByLabel(translations.settings.email.confirm, { exact: true })
      .fill(newEmailAddress);
    await page.getByTestId(settingsPageElement.saveButton).click();
    await expect(
      page.getByTestId(settingsPageElement.flashMessageAlert)
    ).toBeVisible();

    await page.reload();
    await expect(
      page.getByTestId(settingsPageElement.emailVerificationAlert)
    ).toBeVisible();

    const emailVerificationLink = page.getByTestId(
      settingsPageElement.emailVerificationLink
    );
    await expect(emailVerificationLink).toHaveAttribute(
      'href',
      '/update-email'
    );
  });

  test('should display email subscription description', async ({ page }) => {
    await expect(
      page
        .getByRole('group', { name: translations.settings.email.weekly })
        .locator('legend')
    ).toBeVisible();
  });

  test('should have yes please button not pressed by default', async ({
    page
  }) => {
    await expect(
      page.getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
    ).toHaveAttribute('aria-pressed', 'false');
  });

  test('should have no thanks button pressed by default', async ({ page }) => {
    await expect(
      page.getByTestId(settingsPageElement.emailSubscriptionNoThanksButton)
    ).toHaveAttribute('aria-pressed', 'true');
  });

  test('should toggle email subscription correctly', async ({ page }) => {
    await page
      .getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
      .click();
    await expect(
      page.getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.getByTestId(settingsPageElement.emailSubscriptionNoThanksButton)
    ).toHaveAttribute('aria-pressed', 'false');

    await page
      .getByTestId(settingsPageElement.emailSubscriptionNoThanksButton)
      .click();
    await expect(
      page.getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
    ).toHaveAttribute('aria-pressed', 'false');
    await expect(
      page.getByTestId(settingsPageElement.emailSubscriptionNoThanksButton)
    ).toHaveAttribute('aria-pressed', 'true');
  });

  test('should display flash message when email subscription is toggled', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

    await page
      .getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
      .click();

    await expect(
      page.getByTestId(settingsPageElement.flashMessageAlert)
    ).toContainText("We have updated your subscription to Quincy's email");

    // Undo subscription change
    await Promise.all([
      page.waitForResponse(
        response =>
          response.url().includes('update-my-quincy-email') &&
          response.status() === 200
      ),
      page
        .getByTestId(settingsPageElement.emailSubscriptionNoThanksButton)
        .click()
    ]);
  });
});
