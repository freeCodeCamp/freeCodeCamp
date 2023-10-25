import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
  );
});

test.describe('Challenge Side Panel Component', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page.getByTestId('challenge-title')).toBeVisible();
    await expect(page.getByTestId('challenge-description')).toBeVisible();
    await expect(page.getByTestId('get-help-dropdown')).toBeVisible();
    await expect(page.getByTestId('test-result')).toBeVisible();
  });
});
