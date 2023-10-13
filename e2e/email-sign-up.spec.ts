import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/email-sign-up');
});

test.describe('Email sign-up page', () => {

  test('The page renders with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(
        `Email Sign Up | freeCodeCamp.org`
      );
  });

  test('The page renders the correct content', async ({ page }) => {
      await expect(
        page.getByText(
          'freeCodeCamp is a proven path to your first software developer job.
        )
      ).toBeVisible();
});

  test('The sign up button renders and functions', async({ page }) => {
    const button = page.getByTestId('email-sign-up-button')

    await expect(button).toBeVisible()

    await button.click()

    await expect(page).toHaveURL(/.*\/learn\/?$/);
  })


});
