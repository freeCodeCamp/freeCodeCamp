import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/nonexistent-url');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('404 Page Tests', () => {
  test('The page should have correct heading', async () => {
    const heading = page.getByTestId('404-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(translations[404]['page-not-found']);
  });

  test('The page should display the quote', async () => {
    await expect(page.getByTestId('404-quote')).toBeVisible();
  });

  test('The page should have CTA link', async () => {
    const cta = page.getByTestId('404-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText(translations.buttons['view-curriculum']);
    expect(await cta.getAttribute('href')).toBe('/learn');
  });
});
