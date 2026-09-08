import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

// Unlike PayPal and Stripe, Patreon isn't a third-party SDK integration - it's
// a plain link built from static config, so it can't crash the page the way
// a broken third-party script can. Still worth a basic presence/href check so
// a regression in the URL-building logic itself doesn't go unnoticed.
async function expectPatreonButtonToBeVisible(page: Page) {
  await page
    .getByRole('button', { name: translations.buttons.donate, exact: true })
    .click();

  const patreonButton = page.locator('.patreon-button');
  await expect(patreonButton).toBeVisible();
  await expect(patreonButton).toHaveAttribute(
    'href',
    /^https:\/\/www\.patreon\.com\/oauth2\/become-patron\?/
  );
}

test.describe('Patreon donation button', () => {
  test.describe('Authenticated User', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/donate');
    });

    test('renders the Patreon button', async ({ page }) => {
      await expectPatreonButtonToBeVisible(page);
    });
  });

  test.describe('Unauthenticated User', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ page }) => {
      await page.goto('/donate');
    });

    test('renders the Patreon button', async ({ page }) => {
      await expectPatreonButtonToBeVisible(page);
    });
  });
});
