import { execSync } from 'child_process';

import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { allowTrailingSlash } from './utils/url';

const apiLocation = process.env.API_LOCATION || 'http://localhost:3000';

test.describe('Email sign-up page when user is not signed in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
    await page.goto('/email-sign-up');
  });

  test("should not enable Quincy's weekly newsletter when the user clicks the sign up button", async ({
    page
  }) => {
    const signupLink = page.getByTestId('email-signup-sign-in-btn');

    await expect(signupLink).toHaveAttribute('href', `${apiLocation}/signin`);
    await signupLink.click();

    await page.waitForURL(allowTrailingSlash('/learn'));
    await expect(
      page.getByRole('heading', { name: 'Welcome back, Full Stack User' })
    ).toBeVisible();

    await page.goto('/settings');
    await expect(
      page.getByRole('group', { name: translations.settings.email.weekly })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toHaveAttribute('aria-pressed', 'false');
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toHaveAttribute('aria-pressed', 'true');
  });
});

test.describe('Email sign-up page when user is signed in', () => {
  test.beforeEach(async ({ page }) => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
    await page.goto('/email-sign-up');
  });

  test("should disable Quincy's weekly newsletter if the user clicks No", async ({
    page
  }) => {
    const noThanksButton = page.getByRole('button', {
      name: translations.buttons['no-thanks']
    });

    await noThanksButton.click();

    await page.waitForURL('/learn');
    await expect(
      page.getByRole('heading', { name: 'Welcome back, Full Stack User' })
    ).toBeVisible();

    await page.goto('/settings');
    await expect(
      page.getByRole('group', { name: translations.settings.email.weekly })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toHaveAttribute('aria-pressed', 'false');
  });

  test("should enable Quincy's weekly newsletter if the user clicks Yes", async ({
    page
  }) => {
    const signupButton = page.getByRole('button', {
      name: translations.buttons['yes-please']
    });

    await signupButton.click();

    await page.waitForURL('/learn');
    await expect(
      page.getByRole('heading', { name: 'Welcome back, Full Stack User' })
    ).toBeVisible();

    // `sendQuincyEmail` is not set in the DB since the endpoint is mocked,
    // so we are overriding the user data once again to mimic the real behavior.
    await page.route('*/**/user/session-user', async route => {
      const response = await route.fetch();
      const json = await response.json();

      json.user.certifieduser.sendQuincyEmail = true;
      await route.fulfill({ json });
    });

    await page.goto('/settings');
    await expect(
      page.getByRole('group', { name: translations.settings.email.weekly })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toHaveAttribute('aria-pressed', 'false');
  });
});
