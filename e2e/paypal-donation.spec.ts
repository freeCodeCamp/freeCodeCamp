import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

async function clickDonate(page: Page) {
  await page
    .getByRole('button', { name: translations.buttons.donate, exact: true })
    .click();
}

async function expectRealPaypalButtonToBeVisible(page: Page) {
  await clickDonate(page);

  // The widget can also render a "Debit or Credit Card" funding option
  // alongside the PayPal one, so the PayPal link must be targeted by name.
  const paypalButtonIframe = page.frameLocator('.component-frame');
  const paypalButton = paypalButtonIframe.getByRole('link', {
    name: 'PayPal'
  });
  await expect(paypalButton).toBeVisible();
  await expect(paypalButton).toHaveAttribute('aria-label', 'PayPal');
}

const FAKE_APPROVE_DATA = `{ orderID: 'FAKE_ORDER_ID', subscriptionID: 'FAKE_SUBSCRIPTION_ID' }`;
const FAKE_APPROVE_ACTIONS = `{ order: { capture: function () { return Promise.resolve({}); } } }`;
const FAKE_PAYPAL_SDK = `
  function FakeButtons(options) {
    return {
      render: function (container) {
        var btn = document.createElement('button');
        btn.textContent = 'Fake PayPal Approve';
        // This project configures a custom testIdAttribute in
        // playwright.config.ts, so getByTestId() looks for this attribute,
        // not the Playwright default "data-testid".
        btn.setAttribute('data-playwright-test-label', 'fake-paypal-approve');
        btn.onclick = function () {
          options.onApprove(${FAKE_APPROVE_DATA}, ${FAKE_APPROVE_ACTIONS});
        };
        container.appendChild(btn);
        // The SDK's render() is async, and react-paypal-js chains .catch().
        return Promise.resolve();
      },
      isEligible: function () { return true; },
      close: function () { return Promise.resolve(); }
    };
  }
  window.paypal = {
    Buttons: FakeButtons
  };
`;

async function mockPaypalSdk(page: Page) {
  await page.route('https://www.paypal.com/sdk/js**', route =>
    route.fulfill({
      contentType: 'application/javascript',
      body: FAKE_PAYPAL_SDK
    })
  );
}

async function expectDonationToComplete(
  page: Page,
  { withActivation = false } = {}
) {
  await clickDonate(page);
  await page.getByTestId('fake-paypal-approve').click();

  if (withActivation) {
    await page.route('**/user/session-user', async route => {
      const response = await route.fetch();
      const body = await response.json();
      const username = body.result;
      await route.fulfill({
        response,
        json: {
          ...body,
          user: {
            ...body.user,
            [username]: { ...body.user[username], isDonating: true }
          }
        }
      });
    });
  }

  await expect(page.getByText(translations.donate['thank-you'])).toBeVisible();
  await expect(page.getByText(translations.donate['free-tech'])).toBeVisible();
}

test.describe('PayPal donation button', () => {
  test.describe('Authenticated User', () => {
    test('renders the real PayPal button', async ({ page }) => {
      await page.goto('/donate');
      await expectRealPaypalButtonToBeVisible(page);
    });

    test('completes the donation flow once PayPal approves the payment', async ({
      page
    }) => {
      // Register the mock before navigating, so PayPal's real script is
      // never requested at all.
      await mockPaypalSdk(page);

      await page.goto('/donate');
      await expectDonationToComplete(page, { withActivation: true });
    });
  });

  test.describe('Unauthenticated User', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('renders the real PayPal button', async ({ page }) => {
      await page.goto('/donate');
      await expectRealPaypalButtonToBeVisible(page);
    });

    test('completes the donation flow once PayPal approves the payment', async ({
      page
    }) => {
      // Unauthenticated donors do not need activation polling, so approval
      // goes straight to the success screen.
      await mockPaypalSdk(page);

      await page.goto('/donate');
      await expectDonationToComplete(page);
    });
  });
});
