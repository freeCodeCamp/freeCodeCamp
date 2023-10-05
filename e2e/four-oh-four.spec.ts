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

test.describe('test for FourOhFour component', () => {
  test('should display 404 image', async () => {
    const image = page.getByTestId('404-img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      'alt',
      translations['404']['not-found']
    );
  });

  test('should display 404 heading', async () => {
    const heading = page.getByTestId('404-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(translations['404']['page-not-found']);
  });

  test('should display 404 heres-a-quote sentence', async () => {
    const heresAquote = page.getByTestId('404-heres-a-quote');
    await expect(heresAquote).toBeVisible();
    await expect(heresAquote).toContainText(
      translations['404']['heres-a-quote']
    );
  });

  test('should display 404 quote', async () => {
    await expect(page.getByTestId('404-quote')).toBeVisible();
  });

  test('should display curriculum link', async () => {
    const curriculumLink = page.getByTestId('404-view-curriculum-link');
    await expect(curriculumLink).toBeVisible();
    await expect(curriculumLink).toHaveAttribute('href', '/learn');
    await expect(curriculumLink).toContainText(
      translations.buttons['view-curriculum']
    );
  });
});
