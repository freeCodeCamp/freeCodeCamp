import { test, expect, type Page } from '@playwright/test';

let page: Page;

const settingsPageElement = {
  emailSettingsSectionHeader: 'email-settings-header',
  emailVerificationAlert: 'email-verification-alert',
  currentEmailText: 'current-email',
  newEmailInput: 'new-email-input',
  confirmEmailInput: 'confirm-email-input',
  saveButton: 'save-email-button',
  emailSubscriptionYesPleaseButton: 'yes-please-button',
  emailSubscriptionNoThanksButton: 'no-thanks-button',
  flashMessageAlert: 'flash-message'
} as const;

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/settings');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Email Settings', () => {
  test('should display email settings section header on settings page', async () => {
    await expect(
      page.getByTestId(settingsPageElement.emailSettingsSectionHeader)
    ).toHaveText('Email Settings');
  });

  test('should display current email address', async () => {
    await expect(
      page.getByTestId(settingsPageElement.currentEmailText)
    ).toHaveText('foo@bar.com');
  });

  test('should display email verification alert after email update', async () => {
    const newEmailAddress = 'foo-update@bar.com';

    await page
      .getByTestId(settingsPageElement.newEmailInput)
      .fill(newEmailAddress);
    await page
      .getByTestId(settingsPageElement.confirmEmailInput)
      .fill(newEmailAddress);
    await page.getByTestId(settingsPageElement.saveButton).click();
    await expect(
      page.getByTestId(settingsPageElement.flashMessageAlert)
    ).toBeVisible();

    await page.reload();
    await expect(
      page.getByTestId(settingsPageElement.emailVerificationAlert)
    ).toBeVisible();
  });

  test('should display flash message when email subscription is toggled', async () => {
    let subscriptionButton: string =
      settingsPageElement.emailSubscriptionYesPleaseButton;

    const isSubscribed =
      (await page
        .getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
        .getAttribute('aria-pressed')) === 'true';

    if (isSubscribed) {
      subscriptionButton = settingsPageElement.emailSubscriptionNoThanksButton;
    }

    await page.getByTestId(subscriptionButton).click();

    await expect(
      page.getByTestId(settingsPageElement.flashMessageAlert)
    ).toContainText("We have updated your subscription to Quincy's email");
  });
});
