import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

async function clickDonate(page: Page) {
  await page
    .getByRole('button', { name: translations.buttons.donate, exact: true })
    .click();
}

async function fillTestCard(page: Page, cardNumber: string) {
  const cardNumberIframe = page
    .locator('iframe[src*="elements-inner-card"]')
    .nth(0)
    .contentFrame();
  const cardExpiryIframe = page
    .locator('iframe[src*="elements-inner-card"]')
    .nth(1)
    .contentFrame();

  await cardNumberIframe
    .locator('input[data-elements-stable-field-name="cardNumber"]')
    .fill(cardNumber);
  // Per Stripe's testing guide, any future expiry works with test cards.
  // Tokenization only validates the card is well-formed; declines and other
  // failure scenarios only surface once a charge is actually attempted, so
  // the expiry itself is never the point being tested here - it just needs
  // to stay in the future indefinitely.
  await cardExpiryIframe
    .locator('input[data-elements-stable-field-name="cardExpiry"]')
    .fill('1239');
}

async function expectWalletsToMountWithoutError(page: Page) {
  const pageErrors: string[] = [];
  page.on('pageerror', err => pageErrors.push(err.message));

  await clickDonate(page);
  await expect(page.locator('.wallets-form')).toBeAttached();
  await page.waitForTimeout(2000);

  expect(pageErrors).toEqual([]);
}

test.describe('Stripe donation form', () => {
  test.describe('Authenticated User', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/donate');
    });

    test('renders the real Stripe card element', async ({ page }) => {
      await clickDonate(page);

      await expect(
        page.getByText(translations.donate['or-card'])
      ).toBeVisible();

      const cardNumberIframe = page
        .locator('iframe[src*="elements-inner-card"]')
        .nth(0)
        .contentFrame();
      await expect(
        cardNumberIframe.locator(
          'input[data-elements-stable-field-name="cardNumber"]'
        )
      ).toBeVisible();

      const cardExpiryIframe = page
        .locator('iframe[src*="elements-inner-card"]')
        .nth(1)
        .contentFrame();
      await expect(
        cardExpiryIframe.locator(
          'input[data-elements-stable-field-name="cardExpiry"]'
        )
      ).toBeVisible();
    });

    test('mounts the wallets (Apple/Google Pay) integration without erroring', async ({
      page
    }) => {
      await expectWalletsToMountWithoutError(page);
    });

    test('completes a donation with a real (test-mode) card', async ({
      page
    }) => {
      await clickDonate(page);

      // 4242424242424242 is Stripe's well-known always-succeeds test card
      // number. We let this hit Stripe's real test-mode API for
      // tokenization (per Stripe's testing guide, this is what test mode is
      // for) rather than mocking it - only our own backend, which we don't
      // have test credentials for here, is mocked.
      await fillTestCard(page, '4242424242424242');

      await page.route(
        new URL(
          'donate/charge-stripe-card',
          process.env.API_LOCATION
        ).toString(),
        route => route.fulfill({ json: { isDonating: true } })
      );

      await clickDonate(page);

      await expect(page.getByRole('alert')).toBeVisible();
      await alertToBeVisible(page, translations.donate['free-tech']);
      await alertToBeVisible(page, translations.donate['visit-supporters']);
    });

    test('shows an error when the charge is declined', async ({ page }) => {
      await clickDonate(page);

      // Per Stripe's testing guide, tokenization (createPaymentMethod)
      // succeeds for any well-formed test card - card-specific decline
      // behavior (e.g. 4000000000000002, a generic decline) only surfaces
      // when a charge is actually attempted, which happens server-side in
      // our own backend. So the decline itself has to be simulated via our
      // backend's response, not by choosing a particular "decline" test
      // card number here.
      await fillTestCard(page, '4242424242424242');

      await page.route(
        new URL(
          'donate/charge-stripe-card',
          process.env.API_LOCATION
        ).toString(),
        route =>
          route.fulfill({
            json: { error: { type: 'GenericDecline' } }
          })
      );

      await clickDonate(page);

      await expect(page.getByRole('alert')).toBeVisible();
      await alertToBeVisible(page, translations.donate.error);
      await alertToBeVisible(page, translations.donate['error-2']);
      await expect(
        page.getByRole('button', { name: translations.buttons['try-again'] })
      ).toBeVisible();
    });
  });

  test.describe('Unauthenticated User', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ page }) => {
      await page.goto('/donate');
    });

    test('does not render the Stripe card element (PayPal handles card payment instead)', async ({
      page
    }) => {
      await clickDonate(page);

      await expect(
        page.getByText(translations.donate['or-card'])
      ).not.toBeVisible();
      await expect(
        page.locator('iframe[src*="elements-inner-card"]')
      ).toHaveCount(0);
    });

    test('mounts the wallets (Apple/Google Pay) integration without erroring', async ({
      page
    }) => {
      await expectWalletsToMountWithoutError(page);
    });
  });
});
