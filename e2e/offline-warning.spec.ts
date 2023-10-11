import { test, expect } from '@playwright/test';

const offwarn = {
  testid: 'offline-warning',
  timeout: 5500
} as const;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Should render the component when client is offline and client is logged in.', async ({
  page
}) => {
  // Simulate network error when client is online
  await page.route('**/*', route => route.fulfill({ status: 500 }));
  // await page.waitForTimeout(offwarn.timeout); DEPRECATED!
  const locator = page.getByTestId(offwarn.testid);
  await expect(locator).toBeVisible({ timeout: offwarn.timeout });
  // Clear network filter.
  await page.route('**/*', route => route.continue());
});

test('Should render the component when server is offline and client is logged in.', async ({
  page,
  context
}) => {
  // Simulates client offline.
  await context.setOffline(true);
  const locator = page.getByTestId(offwarn.testid);
  await expect(locator).toBeVisible({ timeout: offwarn.timeout });
  // Restore client connection.
  await context.setOffline(false);
});

test('Should not render the component when server and client are online.', async ({
  page
}) => {
  const locator = page.getByTestId(offwarn.testid);
  await expect(locator).not.toBeVisible({ timeout: offwarn.timeout });
});

test('Should not render the componet when client isnt logged in, but server and client are online.', async ({
  page
}) => {
  const locator = page.getByTestId(offwarn.testid);
  await expect(locator).not.toBeVisible({ timeout: offwarn.timeout });
});
