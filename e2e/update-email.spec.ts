import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('The update-email page when the user is signed in', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test.beforeEach(async ({ page }) => {
    await page.goto('/update-email');
  });

  test('should display the content correctly', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Update your email address | freeCodeCamp.org'
    );
    await expect(
      page.getByRole('heading', { name: translations.misc['update-email-2'] })
    ).toBeVisible();

    const form = page.getByTestId('update-email-form');
    const emailInput = page.getByLabel(translations.misc.email);
    const submitButton = page.getByRole('button', {
      name: translations.buttons['update-email']
    });

    await expect(form).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute(
      'placeholder',
      'camperbot@example.com'
    );
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveAttribute('type', 'submit');

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
    const submitButton = page.getByRole('button', {
      name: translations.buttons['update-email']
    });
    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123');
    await expect(submitButton).toBeDisabled();
    await emailInput.fill('123@gmail.com');
    await expect(submitButton).toBeEnabled();
  });
});

test.describe('The update-email page when the user is not signed in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/update-email');
  });

  test('should redirect to the signin page', async ({ page }) => {
    await page.waitForURL('**/learn');

    await expect(
      page.getByRole('heading', { name: 'Welcome back, Full Stack User' })
    ).toBeVisible();
  });
});
