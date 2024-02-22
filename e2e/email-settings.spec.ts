import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const settingsPageElement = {
  emailVerificationAlert: 'email-verification-alert',
  emailVerificationLink: 'email-verification-link',
  flashMessageAlert: 'flash-message'
} as const;

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Email Settings', () => {
  test('should display the content correctly', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: translations.settings.email.heading })
    ).toBeVisible();

    await expect(page.getByText('foo@bar.com')).toBeVisible();

    await expect(
      page.getByRole('button', {
        name: `${translations.buttons.save} ${translations.settings.email.heading}`
      })
    ).toBeDisabled();

    await expect(
      page
        .getByRole('group', { name: translations.settings.email.weekly })
        .locator('legend')
    ).toBeVisible();

    await expect(
      page.getByRole('button', {
        name: translations.buttons['yes-please']
      })
    ).toHaveAttribute('aria-pressed', 'false');

    await expect(
      page.getByRole('button', {
        name: translations.buttons['no-thanks']
      })
    ).toHaveAttribute('aria-pressed', 'true');
  });

  test('should display email verification alert after email update', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

    const newEmailAddress = 'foo-update@bar.com';

    // Need exact match as there are "New email" and "Confirm new email" labels
    await page
      .getByLabel(translations.settings.email.new, { exact: true })
      .fill(newEmailAddress);

    await page
      .getByLabel(translations.settings.email.confirm)
      .fill(newEmailAddress);

    await page
      .getByRole('button', {
        name: `${translations.buttons.save} ${translations.settings.email.heading}`
      })
      .click();

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

  test('should toggle email subscription correctly', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

    const yesPleaseButton = page.getByRole('button', {
      name: translations.buttons['yes-please']
    });
    const noThanksButton = page.getByRole('button', {
      name: translations.buttons['no-thanks']
    });

    await yesPleaseButton.click();
    await expect(yesPleaseButton).toHaveAttribute('aria-pressed', 'true');
    await expect(noThanksButton).toHaveAttribute('aria-pressed', 'false');

    await noThanksButton.click();
    await expect(yesPleaseButton).toHaveAttribute('aria-pressed', 'false');
    await expect(noThanksButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('should display flash message when email subscription is toggled', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

    await page
      .getByRole('button', {
        name: translations.buttons['yes-please']
      })
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
        .getByRole('button', {
          name: translations.buttons['no-thanks']
        })
        .click()
    ]);
  });
});
