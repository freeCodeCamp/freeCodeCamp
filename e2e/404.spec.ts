import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/404');
});
test.afterAll(async () => {
  await page.close();
});

test('Should have page title "Page not found"', async () => {
  const image = page.getByTestId('404-img');
  await expect(image).toBeVisible();
});

test('Should display image "404"', async () => {
  await expect(page).toHaveTitle('Page not found| freeCodeCamp');
});

test('Should display "Page not found" message', async () => {
  const pageHeading1 = page.getByTestId('page-not-found');
  await expect(pageHeading1).toHaveText(translations['404']['page-not-found']);
});

test('Should display new qoute when clicked', async () => {
  const quoteWrapper = page.getByTestId('quote-wrapper');
  await page.click('body');
  await expect(quoteWrapper).toBeVisible();
});

test('Should display link to curriculum', async () => {
  const linkToCurriculum = page.getByTestId('page-not-found-curriculum-link');
  await expect(linkToCurriculum).toHaveText('View the Curriculum');
  await expect(linkToCurriculum).toHaveAttribute('href', '/learn');
});
