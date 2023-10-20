import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

test.describe('show email sign up page', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/signup');
  });

  test.afterAll(async () => {
    await page.close();
  });
});
test('should render accept terms yes please button', async ({ page }) => {
  await expect(page.getByTestId('yes-please-button')).toBeVisible();
});

test('should render accept terms no thanks button', async ({ page }) => {
  await expect(page.getByTestId('no-thanks-button')).toBeVisible();
});

test('should render signup email list', async ({ page }) => {
  await expect(page.getByTestId('signup-email-list')).toBeVisible();
});

test('should open signin page', async ({ page }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  await page.goto(`${process.env.API_LOCATION}/signin`);
});

test('has title', async ({ page }) => {
  const titlePage = page.getByTestId('misc-email-signup');

  await expect(titlePage).toHaveText(`freeCodeCamp.org`);
  await expect(titlePage).toHaveText(translations.misc['email-signup']);
});

test('has Heading', async ({ page }) => {
  await expect(page.getByTestId('brand-new-account')).toHaveText(
    translations.misc['brand-new-account']
  );
});

test('get danger zone link', async ({ page }) => {
  await page.goto('/settings#danger-zone');
  await page.getByRole('link', { name: 'link-to-danger-zone' }).click();
});

test('get emails', async ({ page }) => {
  await expect(page.getByTestId('misc-email-blast')).toHaveScreenshot(
    translations.misc['email-blast']
  );
});
