import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import metaTags from '../client/i18n/locales/english/meta-tags.json';

let page: Page;

test.afterEach(async () => {
  await page.close();
});

test.describe('The unsubscribed page without Id', () => {
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/unsubscribed');
  });

  test('page renders with correct title', async () => {
    await expect(page).toHaveTitle(
      `${metaTags['youre-unsubscribed']} | freeCodeCamp.org`
    );
  });

  test('The page has correct main heading', async () => {
    const mainHeading = page.getByTestId('main-heading');

    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText(translations.misc['unsubscribed']);
  });

  test('The page has correct motivation text', async () => {
    const motivationText = page.getByTestId('motivation-text');

    await expect(motivationText).toBeVisible();
    await expect(motivationText).toContainText(
      translations.misc['keep-coding']
    );
  });
});

test.describe('The unsubscribed page with Id', () => {
  const randomId = Math.floor(Math.random() * 1000000000);

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`/unsubscribed/${randomId}`);
  });

  test('page renders with correct title', async () => {
    await expect(page).toHaveTitle(
      `${metaTags['youre-unsubscribed']} | freeCodeCamp.org`
    );
  });

  test('The page has correct main heading', async () => {
    const mainHeading = page.getByTestId('main-heading');

    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText(translations.misc['unsubscribed']);
  });

  test('The page has correct motivation text', async () => {
    const motivationText = page.getByTestId('motivation-text');

    await expect(motivationText).toBeVisible();
    await expect(motivationText).toContainText(
      translations.misc['keep-coding']
    );
  });

  test('The page has button to resubscribe', async () => {
    const resubscribeButton = page.getByRole('link', {
      name: translations.buttons['resubscribe']
    });

    await expect(resubscribeButton).toBeVisible();
    const resubscribeButtonHref = await resubscribeButton.getAttribute('href');
    expect(resubscribeButtonHref).toContain(`/resubscribe/${randomId}`);
  });
});
