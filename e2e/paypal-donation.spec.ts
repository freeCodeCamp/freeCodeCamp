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

// PayPal's SDK is consumed two different ways across the codebase's history:
// the legacy \`Buttons.driver('react', { React, ReactDOM })\` API (which
// returns a React component, and is what production currently uses), and
// the plain \`Buttons({...}).render(container)\` API (imperative, no React
// involved). This fake supports both call shapes so the test keeps working
// across that implementation detail.
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
      },
      close: function () { return Promise.resolve(); }
    };
  }
  FakeButtons.driver = function (reactString, deps) {
    return function FakeDriverButton(props) {
      return deps.React.createElement('button', {
        'data-playwright-test-label': 'fake-paypal-approve',
        onClick: function () {
          props.onApprove(${FAKE_APPROVE_DATA}, ${FAKE_APPROVE_ACTIONS});
        }
      }, 'Fake PayPal Approve');
    };
  };
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

async function expectDonationToComplete(page: Page) {
  await clickDonate(page);
  await page.getByTestId('fake-paypal-approve').click();

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
      let addDonationCalled = false;
      await page.route('**/donate/add-donation', route => {
        addDonationCalled = true;
        return route.fulfill({ json: {} });
      });
      await mockPaypalSdk(page);

      await page.goto('/donate');
      await expectDonationToComplete(page);

      expect(addDonationCalled).toBe(true);
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
      // Unauthenticated donors are never recorded via /donate/add-donation
      // (see donation-saga.js), so completion here should not call our API
      // at all - it should go straight to the success screen.
      let addDonationCalled = false;
      await page.route('**/donate/add-donation', route => {
        addDonationCalled = true;
        return route.fulfill({ json: {} });
      });
      await mockPaypalSdk(page);

      await page.goto('/donate');
      await expectDonationToComplete(page);

      expect(addDonationCalled).toBe(false);
    });
  });
});
