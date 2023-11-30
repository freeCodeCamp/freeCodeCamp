import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/update-stripe-card');
});

test.describe('Update Card Page for Non-Donor Authenticated User', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });
  test('should display the correct', async () => {
    await expect(page).toHaveTitle(
      `${translations.misc['update-your-card']} | freeCodeCamp.org`
    );
  });
  test('should display the info for signedin non-donor', async () => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveText(
      `${translations.learn['donation-record-not-found']}`
    );
  });
});

test.describe('Update Card Page Unauthenticated User', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test('should display the info for signedin non-donor', async () => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveText(`${translations.learn['sign-in-card-update']}`);
    const signInButton = page.getByRole('link', {
      name: translations.buttons['sign-in']
    });
    await expect(signInButton).toHaveText(`${translations.buttons['sign-in']}`);
  });
});

// Sign in as a donor user states should be added here in upcoming PRs
