import { test, expect, type Page } from '@playwright/test';

const settingsPageElement = {
  emailSettingsSectionHeader: 'email-settings-header',
  emailVerificationAlert: 'email-verification-alert',
  emailVerificationLink: 'email-verification-link',
  currentEmailText: 'current-email',
  newEmailInput: 'new-email-input',
  confirmEmailInput: 'confirm-email-input',
  saveButton: 'save-email-button',
  emailSubscriptionYesPleaseButton: 'yes-please-button',
  emailSubscriptionNoThanksButton: 'no-thanks-button',
  flashMessageAlert: 'flash-message'
} as const;

let page: Page;

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

    const getSessionUserResponsePromise = page.waitForResponse(response =>
      response.url().includes('get-session-user')
    );
    await page.reload();
    const getSessionUserResponse = await getSessionUserResponsePromise;
    const getSessionUserResponseBody = await getSessionUserResponse.json();
    const isEmailVerified =
      getSessionUserResponseBody.user.certifieduser.isEmailVerified;
    expect(
      isEmailVerified,
      JSON.stringify(await page.context().cookies(), null, 2)
    ).toBe(false);

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

  test('should display flash message when email subscription is toggled', async () => {
    const subscriptionResponsePromise = page.waitForResponse(response =>
      response.url().includes('update-my-quincy-email')
    );
    await page
      .getByTestId(settingsPageElement.emailSubscriptionYesPleaseButton)
      .click();
    const subscriptionResponse = await subscriptionResponsePromise;
    const subscriptionRequestHeaders = JSON.stringify(
      await subscriptionResponse.request().allHeaders(),
      null,
      2
    );

    expect(subscriptionResponse.status(), subscriptionRequestHeaders).toBe(200);

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
