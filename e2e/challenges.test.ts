import { test, expect } from '@playwright/test';

// TODO: are there other paths that need tests?
const pathsToTest = [{ input: '/challenges', expected: '/learn' }];

test.describe('Legacy Challenge Path Redirection Tests', () => {
  for (const { input, expected } of pathsToTest) {
    test(`should redirect from ${input} to ${expected}`, async ({ page }) => {
      await page.goto(input);
      await expect(page).toHaveURL(new RegExp(`${expected}/?`));
    });
  }
});
