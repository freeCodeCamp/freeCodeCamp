import { test, expect, type Page } from '@playwright/test';
//import { useTranslation } from 'react-i18next'
import { apiLocation } from '../client/config/env.json';

// eslint-disable-next-line react-hooks/rules-of-hooks
//const { t } = useTranslation()

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
  await page.goto(`${apiLocation}/signin`);
});

test('has title', async ({ page }) => {
  const titlePage = page.getByTestId('misc-email-signup');
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  await expect(titlePage).toHaveText(`freeCodeCamp.org`);
  //await expect(titlePage).toHaveText(`{${t('misc.email-signup')} | freeCodeCamp.org`)
});

/*test('has Heading', async ({ page }) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    await expect(page.getByTestId('brand-new-account')).toHaveText(`${t('misc.brand-new-account').toString()}`)
}) */

test('get danger zone link', async ({ page }) => {
  await page.goto('/settings#danger-zone');
  await page.getByRole('link', { name: 'link-to-danger-zone' }).click();
});

/* test('get emails', async ({ page }) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    await expect(page.getByTestId('misc-email-blast')).toHaveText(`${t('misc.email-blast').toString()}`)
}) */
