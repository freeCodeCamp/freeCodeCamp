import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/update-email');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('The update-email page', () => {
  test('The page renders with correct title', async () => {
    await expect(page).toHaveTitle(
      'Update your email address | freeCodeCamp.org'
    );
  });

  test('The page has correct header', async () => {
    const header = page.getByTestId('update-email-heading');

    await expect(header).toBeVisible();
    await expect(header).toContainText(translations.misc['update-email-2']);
  });

  test('The page has update email form', async () => {
    const form = page.getByTestId('update-email-form');
    const emailInput = page.getByTestId('update-email-input');
    const submitButton = page.getByTestId('update-email-submit-button');

    await expect(form).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute(
      'placeholder',
      'camperbot@example.com'
    );
    await expect(submitButton).toHaveAttribute('type', 'submit');
    await expect(submitButton).toContainText(
      translations.buttons['update-email']
    );
  });

  test('The page has sign out button', async () => {
    const signOutButton = page.getByTestId('update-email-sign-out-button');

    await expect(signOutButton).toBeVisible();
    await expect(signOutButton).toContainText(translations.buttons['sign-out']);
    await expect(signOutButton).toHaveAttribute('href', '/signout');
  });
});
