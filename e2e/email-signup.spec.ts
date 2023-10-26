import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });
test.describe('show email sign up page', () => {
  let page: Page;

  test.beforeAll(() => {
    test.setTimeout(60000);
  });
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/signup');
  });
  test('should skip webkit', ({ browserName }) => {
    test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');
  });
  test.afterAll(async () => {
    await page.close();
  });
});

test('should render accept terms yes please button', async ({ page }) => {
  await expect(page.getByTestId('yes-please-button')).toBeVisible();
});

test('should render accept terms no thanks button', async ({ page }) => {
  await page.getByTestId('no-thanks-button').click();
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

test('get emails', ({ page }) => {
  expect(
    page
      .locator('paragraph')
      .filter({ hasText: translations.misc['email-blast'] })
      .first()
  ).toMatchSnapshot();
  //expect(page.getByText(translations.misc['email-blast'])).toMatchSnapshot();
  //expect(page.getByTestId('misc-email-blast')).toContainText(translations.misc['email-blast'])
  /*await page
    .locator('paragraph')
    .filter({ hasText: translations.misc['email-blast'] })
    .first()
    .isVisible() */
});
