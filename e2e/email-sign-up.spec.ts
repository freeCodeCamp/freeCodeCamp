import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/email-sign-up');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Email sign-up page', () => {

  test('The page renders with correct title', async () => {
    await expect(page).toHaveTitle(
        `Email Sign Up | freeCodeCamp.org`
      );
  });

  test('The page renders the correct content', async () => {
      await expect(
        page.locator(
          "text=freeCodeCamp is a proven path to your first software developer job."
        )
      ).toBeVisible();
});

  test('The sign up button renders and functions', async() => {
    const button = page.getByTestId('email-sign-up-button')

    await expect(button).toBeVisible()

    await button.click()

    await expect(page).toHaveURL(/.*\/learn\/?$/);
  })


});
