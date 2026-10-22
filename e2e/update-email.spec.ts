import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';
import { allowTrailingSlash } from './utils/url';
import {
  deleteEmailsForAddress,
  getEmailsForAddress,
  getFirstEmail,
  getSubject
} from './utils/email';

test.use({ userPreset: 'certified' });

test.describe('The update-email page when the user is signed in', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/update-email');
  });

  test('should display the content correctly', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Update your email address | freeCodeCamp.org'
    );
    await expect(
      page.getByRole('heading', { name: 'Update your email address here' })
    ).toBeVisible();

    const form = page.getByTestId('update-email-form');
    const emailInput = page.getByLabel('Email');
    const submitButton = page.getByRole('button', { name: 'Update my Email' });

    await expect(form).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute(
      'placeholder',
      'camperbot@example.com'
    );
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('should enable the submit button if the email input is valid', async ({
    page
  }) => {
    const emailInput = page.getByLabel(translations.misc.email);
    const submitButton = page.getByRole('button', { name: 'Update my Email' });

    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123');
    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123@gmail.com');
    await expect(submitButton).toBeEnabled();
  });

  test('actually sends an email', async ({ page, isolatedUser }) => {
    const updatedEmail = `updated-${isolatedUser.email}`;
    // Worker addresses are reused, so remove messages from earlier runs.
    await deleteEmailsForAddress(updatedEmail);
    const emailInput = page.getByLabel(translations.misc.email);
    const submitButton = page.getByRole('button', { name: 'Update my Email' });

    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123');
    await expect(submitButton).toBeDisabled();
    await emailInput.fill(updatedEmail);
    await submitButton.click();
    await expect(async () => {
      const emails = await getEmailsForAddress(updatedEmail);
      expect(emails.messages).toHaveLength(1);
      expect(getSubject(getFirstEmail(emails))).toBe(
        'Please confirm your updated email address for freeCodeCamp.org'
      );
    }).toPass();
  });
});

test.describe('The update-email page when the user is not signed in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/update-email');
  });

  test('should sign the user in and redirect them to /learn', async ({
    page,
    browserName
  }) => {
    // The signin step involves multiple navigations, which results a network error in Firefox.
    // The error is harmless but Playwright doesn't suppress it, causing the test to fail.
    // Ref: https://github.com/microsoft/playwright/issues/20749
    test.skip(browserName === 'firefox');

    await page.waitForURL(allowTrailingSlash('/learn'));

    await expect(
      page.getByRole('heading', { name: 'Welcome back, Full Stack User' })
    ).toBeVisible();
  });
});
