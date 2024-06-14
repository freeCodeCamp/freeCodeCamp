import { expect, test } from '@playwright/test';

test.describe('third-party donation tests', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
  });

  test('The donation widget should have four donation options and donation button', async ({
    page
  }) => {
    await expect(
      page.getByRole('button', { name: 'Donate', exact: true })
    ).toBeVisible();

    await expect(page.getByRole('tab', { name: '$5' })).toBeVisible();
    await expect(page.getByRole('tab', { name: '$10' })).toBeVisible();
    await expect(page.getByRole('tab', { name: '$20' })).toBeVisible();
    await expect(page.getByRole('tab', { name: '$40' })).toBeVisible();
  });

  test('The donation widget should let you know what you"ll support per donation value', async ({
    page
  }) => {
    await page.getByRole('tab', { name: '$5' }).click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $5 / month:'
    );
    await expect(page.locator('.tab-content').nth(0)).toContainText(
      'Your $5 donation will provide 250 hours of learning to people around the world each month.'
    );

    await page.getByRole('tab', { name: '$10' }).click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $10 / month:'
    );
    await expect(page.locator('.tab-content').nth(1)).toContainText(
      'Your $10 donation will provide 500 hours of learning to people around the world each month.'
    );

    await page.getByRole('tab', { name: '$20' }).click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $20 / month:'
    );
    await expect(page.locator('.tab-content').nth(2)).toContainText(
      'Your $20 donation will provide 1,000 hours of learning to people around the world each month.'
    );

    await page.getByRole('tab', { name: '$40' }).click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $40 / month:'
    );
    await expect(page.locator('.tab-content').nth(3)).toContainText(
      'Your $40 donation will provide 2,000 hours of learning to people around the world each month.'
    );
  });

  test('When the donation button is clicked it should tell you that it is secure', async ({
    page
  }) => {
    await page.getByRole('button', { name: 'Donate', exact: true }).click();

    await expect(page.getByText('Secure donation')).toBeVisible();
  });

  test('All elements are present in the widget', async ({ page }) => {
    await page.getByRole('button', { name: 'Donate', exact: true }).click();

    // Paypal button should be present

    const paypalButtonIframe = page.frameLocator('.component-frame');
    const paypalButton = paypalButtonIframe.getByRole('link');
    await expect(paypalButton).toBeVisible();
    await expect(paypalButton).toHaveAttribute('aria-label', 'PayPal');

    // Patreon button should be present

    const patreonButton = page.locator('.patreon-button');
    await expect(patreonButton).toBeVisible();

    // "Or dontate with card" button should be present

    await expect(page.getByText('Or donate with card')).toBeVisible();

    // The card inputs should be present (to check this we will try to fill them with some values)

    const cardNumberIframe = page
      .frameLocator('iframe[src*="elements-inner-card"]')
      .nth(0);

    const cardExpiryIframe = page
      .frameLocator('iframe[src*="elements-inner-card"]')
      .nth(1);

    await cardNumberIframe
      .locator('input[data-elements-stable-field-name="cardNumber"]')
      .fill('4242424242424242');

    await cardExpiryIframe
      .locator('input[data-elements-stable-field-name="cardExpiry"]')
      .fill('1025');
  });

  // We do NOT want to test the implementation of the third-party services
  // We only want to test that the buttons are there (our buttons ^) and that they are visible
  // and that the donation widget works as expected if we do decide on testing the implementation
  // of the third-party services this will be a good starting point

  // test('It is possible to donate with a card', async ({ page }) => {
  //   await page.getByRole('button', { name: 'Donate', exact: true }).click();
  //   await expect(page.getByText('Or donate with card')).toBeVisible();

  //   const cardNumberIframe = page
  //     .frameLocator('iframe[src*="elements-inner-card"]')
  //     .nth(0);

  //   const cardExpiryIframe = page
  //     .frameLocator('iframe[src*="elements-inner-card"]')
  //     .nth(1);

  //   await cardNumberIframe
  //     .locator('input[data-elements-stable-field-name="cardNumber"]')
  //     .fill('4242424242424242');

  //   await cardExpiryIframe
  //     .locator('input[data-elements-stable-field-name="cardExpiry"]')
  //     .fill('1025');

  //   await page.getByRole('button', { name: 'Donate', exact: true }).click();

  //   await expect(page.getByRole('alert')).toBeVisible({ timeout: 10000 });

  //   await expect(page.getByRole('alert')).toContainText(
  //     'Your donations will support free technology education for people all over the world.'
  //   );
  //   await expect(page.getByRole('alert')).toContainText(
  //     'Visit supporters page to learn about your supporter benefits.'
  //   );

  //   await expect(
  //     page.getByRole('link', { name: 'Go to Supporters Page' })
  //   ).toBeVisible();
  // });
});
