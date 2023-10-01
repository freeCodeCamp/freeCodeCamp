import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/unsubscribed');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('The unsubscribe page', () => {
  test('The page renders with correct title', async () => {
    await expect(page).toHaveTitle(
      'You have been unsubscribed | freeCodeCamp.org'
    );
  });

  test('The page renders successful unsubscription message', async () => {
    const heading = page.getByTestId('unsubscribed-heading');
    const description = page.getByTestId('unsubscribed-description');

    await expect(heading).toContainText(translations.misc.unsubscribed);
    await expect(description).toContainText(translations.misc['keep-coding']);
  });

  test('The page renders resubscribe button when user access /unsubscribed/:unsubscribeId route', async () => {
    const unsubscribeId = 'foo@baz.com';

    await page.goto(`/unsubscribed/${unsubscribeId}`);

    const resubscribeButton = page.getByTestId(
      'unsubscribed-resubscribe-button'
    );
    const resubscribeButtonHref = await resubscribeButton.getAttribute('href');

    await expect(resubscribeButton).toContainText(
      translations.buttons.resubscribe
    );
    expect(resubscribeButtonHref).toContain(`/resubscribe/${unsubscribeId}`);
  });
});
