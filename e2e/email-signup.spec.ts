import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

test.describe('show email sign up page', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let page: Page;
  test.use({ storageState: 'playwright/.auth/certified-user.json' });
  test.beforeAll(() => {
    test.setTimeout(60000);
  });
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });
  test('should skip webkit', ({ browserName }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');
  });

  test('should render and has an element of yes please button', async ({
    page
  }) => {
    await expect(page.getByTestId('yes-please-button')).toBeVisible();
    await page.getByRole('button', { name: 'Yes Please' }).click();
  });

  test('should render and has an element of no thanks button', async ({
    page
  }) => {
    await page.getByTestId('no-thanks-button').click();
    await expect(page.getByTestId('no-thanks-button')).toBeVisible();
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

  test('get emails', async ({ page }) => {
    await expect(
      page
        .locator('paragraph')
        .filter({ hasText: translations.misc['email-blast'] })
        .first()
    ).toHaveScreenshot();
  });
});

test.describe('select email for signup', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test.beforeAll(() => {
    test.setTimeout(60000);
  });
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });
  test('should skip webkit', ({ browserName }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');
  });

  test('should render signup email list', async ({ page }) => {
    await expect(page.getByTestId('signup-email-list')).toBeVisible();
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
});
