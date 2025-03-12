import { execSync } from 'child_process';

import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { allowTrailingSlash } from './utils/url';

const apiLocation = process.env.API_LOCATION || 'http://localhost:3000';

test.describe('Email sign-up page when user is not signed in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/email-sign-up');
  });

  test('should display the content correctly', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: translations.misc['email-signup']
      })
    ).toBeVisible();
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();
    await expect(
      page.getByRole('link', {
        name: translations.buttons['sign-up-email-list']
      })
    ).toBeVisible();
  });

  test("should not enable Quincy's weekly newsletter when the user clicks the sign up button", async ({
    page
  }) => {
    await expect(page).toHaveTitle('Email Sign Up | freeCodeCamp.org');
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();

    const signupLink = page.getByRole('link', {
      name: translations.buttons['sign-up-email-list']
    });

    await expect(signupLink).toBeVisible();
    await expect(signupLink).toHaveAttribute('href', `${apiLocation}/signin`);
    await signupLink.click();

    // The user is signed in and automatically redirected to /learn after clicking the button.
    // We wait for this navigation to complete before moving onto the next.
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
    // It's necessary to seed with a user that has not accepted the privacy
    // terms, otherwise the user will be redirected away from the email sign-up
    // page.
    execSync(
      'node ./tools/scripts/seed/seed-demo-user --certified-user --set-false acceptedPrivacyTerms'
    );

    await page.goto('/email-sign-up');
  });

  test('should display the content correctly', async ({ page }) => {
    await expect(page).toHaveTitle('Email Sign Up | freeCodeCamp.org');
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toBeVisible();
  });

  test("should disable Quincy's weekly newsletter if the user clicks No", async ({
    page
  }) => {
    await expect(page).toHaveTitle('Email Sign Up | freeCodeCamp.org');
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();

    const noThanksButton = page.getByRole('button', {
      name: translations.buttons['no-thanks']
    });

    await expect(noThanksButton).toBeVisible();
    await noThanksButton.click();

    // The user is signed in and automatically redirected to /learn after clicking the button.
    // We wait for the navigation to complete.
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
    await expect(page).toHaveTitle('Email Sign Up | freeCodeCamp.org');
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();

    const signupButton = page.getByRole('button', {
      name: translations.buttons['yes-please']
    });

    await expect(signupButton).toBeVisible();
    await signupButton.click();

    // The user is signed in and automatically redirected to /learn after clicking the button.
    // We wait for the navigation to complete.
    await page.waitForURL('/learn');
    await expect(
      page.getByRole('heading', { name: 'Welcome back, Full Stack User' })
    ).toBeVisible();

    // When the user clicks Yes, the /update-privacy-terms API is called
    // to update both `acceptedPrivacyTerms` and `sendQuincyEmail`.
    // But `sendQuincyEmail` is not set in the DB since the endpoint is mocked,
    // so we are overriding the user data once again to mimic the real behavior.
    await page.route('*/**/user/get-session-user', async route => {
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

test.describe('Email sign-up page when the user is new', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeEach(async ({ page }) => {
    // It's necessary to seed with a user that has not accepted the privacy
    // terms, otherwise the user will be redirected away from the email sign-up
    // page.
    execSync(
      'node ./tools/scripts/seed/seed-demo-user --set-false acceptedPrivacyTerms'
    );

    await page.goto('/email-sign-up');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
  });

  test('should display the content correctly', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: translations.misc['brand-new-account']
      })
    ).toBeVisible();
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toBeVisible();
  });
});
