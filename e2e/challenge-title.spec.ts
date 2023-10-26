import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Challenge Title Component', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page.getByText('Developing a Port Scanner')).toBeVisible();

    await expect(page.getByLabel('Passed')).not.toBeVisible();
  });
});
