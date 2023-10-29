import { test, expect } from '@playwright/test';

test('Exercise description features syntax highlighting', async ({ page }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/initializing-variables-with-the-assignment-operator'
  );

  await expect(page.getByLabel('JavaScript code example')).toBeVisible();
  await expect(page.getByTestId('challenge-description')).toHaveScreenshot();
});
