import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import metaTags from '../client/i18n/locales/english/meta-tags.json';

let page: Page;

test.afterAll(async () => {
  await page.close();
});

test.describe('The unsubscribed page without unsubscribeId', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/unsubscribed');
  });

  test('The page renders with correct title', async () => {
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

  test('The page has no button to resubscribe', async () => {
    const resubscribeButton = page.getByRole('link', {
      name: translations.buttons['resubscribe']
    });

    await expect(resubscribeButton).not.toBeVisible();
  });
});

test.describe('The unsubscribed page with unsubscribeId', () => {
  const unsubscribeId = Math.floor(Math.random() * 1000000000);

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`/unsubscribed/${unsubscribeId}`);
  });

  test('The page renders with correct title', async () => {
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
    expect(resubscribeButtonHref).toContain(`/resubscribe/${unsubscribeId}`);
  });
});
