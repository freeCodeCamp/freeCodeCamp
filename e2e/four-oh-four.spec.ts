import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/404');
});

test.describe('test for FourOhFour component', () => {
  test('should display 404 image', async ({ page }) => {
    const image = page.getByTestId('not-found-image');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      'alt',
      translations['404']['not-found']
    );
  });

  test('should display 404 heading', async ({ page }) => {
    const heading = page.getByTestId('not-found-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(translations['404']['page-not-found']);
  });

  test('should display 404 heres-a-quote sentence', async ({ page }) => {
    const heresQuoteParagraph = page.getByTestId('heres-quote-paragraph');
    await expect(heresQuoteParagraph).toBeVisible();
    await expect(heresQuoteParagraph).toContainText(
      translations['404']['heres-a-quote']
    );
  });

  test('should display 404 quote', async ({ page }) => {
    await expect(page.getByTestId('quote-wrapper')).toBeVisible();
  });

  test('should display curriculum link', async ({ page }) => {
    const curriculumLinkBtn = page.getByTestId('view-curriculum-btn');
    await expect(curriculumLinkBtn).toBeVisible();
    await expect(curriculumLinkBtn).toHaveAttribute('href', '/learn');
    await expect(curriculumLinkBtn).toContainText(
      translations.buttons['view-curriculum']
    );
  });
});
