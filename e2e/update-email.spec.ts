import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('The update-email page when the user is not signed in', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/update-email');
  });

  test('should redirect to the signin page', async ({ page }) => {
    await page.waitForURL('**/learn');

    await expect(
      page.getByRole('heading', { name: 'Welcome back, Development User' })
    ).toBeVisible();
  });
});

test.describe('The update-email page when the user is signed in', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page
      .context()
      .storageState({ path: 'playwright/.auth/certified-user.json' });
    await page.goto('/update-email');
  });

  test('The page renders with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Update your email address | freeCodeCamp.org'
    );
  });

  test('The page has correct header', async ({ page }) => {
    const header = page.getByTestId('update-email-heading');

    await expect(header).toBeVisible();
    await expect(header).toContainText(translations.misc['update-email-2']);
  });

  test('The page has update email form', async ({ page }) => {
    const form = page.getByTestId('update-email-form');
    const emailInput = page.getByLabel(translations.misc.email);
    const submitButton = page.getByTestId('update-email-button');

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

  test('The page has sign out button', async ({ page }) => {
    const signOutButton = page.getByRole('link', {
      name: translations.buttons['sign-out']
    });

    await expect(signOutButton).toBeVisible();
    await expect(signOutButton).toHaveAttribute('href', '/signout');
  });

  test('should enable the submit button if the email input is valid', async ({
    page
  }) => {
    const emailInput = page.getByLabel(translations.misc.email);
    const submitButton = page.getByTestId('update-email-button');
    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123');
    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123@gmail.com');
    await expect(submitButton).toBeEnabled();
  });
});
