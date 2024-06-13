import { expect, test } from '@playwright/test';

test.describe('third-party donation tests', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
  });

  test('Should have a donation button', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Donate', exact: true })
    ).toBeVisible();
  });

  test('The donation widget should have four donation options', async ({
    page
  }) => {
    await expect(page.locator('#radix-4-trigger-500')).toBeVisible();
    await expect(page.locator('#radix-4-trigger-1000')).toBeVisible();
    await expect(page.locator('#radix-4-trigger-2000')).toBeVisible();
    await expect(page.locator('#radix-4-trigger-4000')).toBeVisible();
  });

  test('The donation widget should let you know what you"ll support per donation value', async ({
    page
  }) => {
    await page.locator('#radix-4-trigger-500').click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $5 / month:'
    );
    await expect(page.locator('.tab-content').nth(0)).toContainText(
      'Your $5 donation will provide 250 hours of learning to people around the world each month.'
    );

    await page.locator('#radix-4-trigger-1000').click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $10 / month:'
    );
    await expect(page.locator('.tab-content').nth(1)).toContainText(
      'Your $10 donation will provide 500 hours of learning to people around the world each month.'
    );

    await page.locator('#radix-4-trigger-2000').click();
    await expect(page.getByTestId('donation-tier-selector')).toContainText(
      'Confirm your donation of $20 / month:'
    );
    await expect(page.locator('.tab-content').nth(2)).toContainText(
      'Your $20 donation will provide 1,000 hours of learning to people around the world each month.'
    );

    await page.locator('#radix-4-trigger-4000').click();
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

    await expect(page.getByText(' Secure donation')).toBeVisible();
  });

  // We do NOT want to test the implementation of the third-party services
  // We only want to test that the buttons are there (our buttons ^) and that they are visible
  // and that the donation widget works as expected if we do decide on testing the implementation
  // of the third-party services this will be a good starting point

  // test('It should have a Paypal and Patreon button', async ({ page }) => {
  //   await page.getByRole('button', { name: 'Donate', exact: true }).click();
  //   await expect(
  //     page.locator('[data-paypal-smart-button-version="5.0.440"]')
  //   ).toBeVisible();
  //   await expect(
  //     page.locator('[data-patreon-widget-type="become-patron-button"]')
  //   ).toBeVisible();
  // });

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
