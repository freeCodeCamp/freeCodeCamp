import { execSync } from 'child_process';

import { expect, test, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';
import { allowTrailingSlash } from './utils/url';

const apiLocation = process.env.API_LOCATION || 'http://localhost:3000';
const unsubscribeId = 'tBX8stC5jiustPBteF2mV';

const seedCertifiedUser = () =>
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');

const expectNewsletterPreference = async (page: Page, enabled: boolean) => {
  await page.goto('/settings');

  await expect(
    page.getByRole('group', { name: translations.settings.email.weekly })
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: translations.buttons['yes-please'] })
  ).toHaveAttribute('aria-pressed', enabled.toString());
  await expect(
    page.getByRole('button', { name: translations.buttons['no-thanks'] })
  ).toHaveAttribute('aria-pressed', (!enabled).toString());
};

test.describe('Newsletter preference flow', () => {
  test.beforeEach(seedCertifiedUser);

  test.afterAll(seedCertifiedUser);

  test('persists a learn-page opt-out after reload', async ({ page }) => {
    await page.goto('/learn');

    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();
    await page
      .getByRole('button', { name: translations.buttons['no-thanks'] })
      .click();
    await alertToBeVisible(
      page,
      translations.flash['subscribe-to-quincy-updated']
    );

    await expect(
      page.getByText(translations.misc['email-blast'])
    ).not.toBeVisible();
    await expectNewsletterPreference(page, false);

    await page.reload();
    await expectNewsletterPreference(page, false);
  });

  test('persists an email sign-up opt-in after redirect', async ({ page }) => {
    await page.goto('/email-sign-up');

    await page
      .getByRole('button', { name: translations.buttons['yes-please'] })
      .click();

    await expect(page).toHaveURL(allowTrailingSlash('/learn'));
    await expectNewsletterPreference(page, true);

    await page.reload();
    await expectNewsletterPreference(page, true);
  });

  test('resubscribes from an unsubscribe link and persists the preference', async ({
    page
  }) => {
    await page.goto(`${apiLocation}/ue/${unsubscribeId}`);

    await expect(page).toHaveURL(new RegExp(`/unsubscribed/${unsubscribeId}`));
    await expect(
      page.getByText("We've successfully updated your email preferences.")
    ).toBeVisible();

    await page
      .getByRole('link', { name: translations.buttons.resubscribe })
      .click();

    await expect(page).toHaveURL(new RegExp('/\\?messages='));
    await expect(
      page.getByText(
        "We've successfully updated your email preferences. Thank you for resubscribing."
      )
    ).toBeVisible();
    await expectNewsletterPreference(page, true);
  });
});

test.describe('Newsletter sign-up for signed-out campers', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(seedCertifiedUser);

  test.afterAll(seedCertifiedUser);

  test('signs in without selecting a newsletter preference', async ({
    page
  }) => {
    await page.goto('/email-sign-up');

    const signInButton = page.getByTestId('email-signup-sign-in-btn');
    await expect(signInButton).toHaveAttribute('href', `${apiLocation}/signin`);
    await signInButton.click();

    await expect(page).toHaveURL(allowTrailingSlash('/learn'));

    await page.goto('/email-sign-up');
    await expect(
      page.getByRole('heading', { name: translations.misc['email-signup'] })
    ).toBeVisible();
  });
});
