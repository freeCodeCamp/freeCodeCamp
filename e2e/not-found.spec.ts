import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

const pageElements = {
  notFoundImage: 'not-found-image',
  notFoundHeading: 'not-found-heading',
  heresQuoteParagraph: 'heres-quote-paragraph',
  quoteWrapper: 'quote-wrapper',
  quoteContent: 'quote-content',
  authorName: 'author-name',
  viewCurriculumBtn: 'view-curriculum-btn'
};

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/404');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Not-Found Page Tests', () => {
  test('should display correct page title', async () => {
    await expect(page).toHaveTitle(
      `${translations[404]['page-not-found']}| freeCodeCamp`
    );
  });

  test('should display 404 image', async () => {
    const notFoundImage = page.getByTestId(pageElements.notFoundImage);
    await expect(notFoundImage).toBeVisible();
  });

  test('should display not found heading', async () => {
    const notFoundHeading = page.getByTestId(pageElements.notFoundHeading);
    await expect(notFoundHeading).toHaveText(
      `${translations[404]['page-not-found']}.`
    );
  });

  test('should display heres a quote message', async () => {
    const heresQuoteParagraph = page.getByTestId(
      pageElements.heresQuoteParagraph
    );
    await expect(heresQuoteParagraph).toHaveText(
      translations[404]['heres-a-quote']
    );
  });

  test('should load a quote component', async () => {
    const quoteWrapper = page.getByTestId(pageElements.quoteWrapper);
    const quoteContent = page.getByTestId(pageElements.quoteContent);
    const authorName = page.getByTestId(pageElements.authorName);

    await expect(quoteWrapper).toBeVisible();
    expect(quoteContent).not.toBeNull();
    expect(authorName).not.toBeNull();
  });

  test('should display view curriculum link', async () => {
    await expect(
      page.getByRole('link', {
        name: translations.buttons['view-curriculum']
      })
    ).toBeVisible();
  });
});
