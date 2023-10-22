import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import words from '../client/i18n/locales/english/motivation.json';

const elements = {
  notFoundImage: 'not-found-image',
  notFoundHeading: 'not-found-heading',
  heresQuoteParagraph: 'heres-quote-paragraph',
  quoteWrapper: 'quote-wrapper',
  quoteContent: 'quote-content',
  authorName: 'author-name',
  viewCurriculumBtn: 'view-curriculum-btn'
};

test.beforeEach(async ({ page }) => {
  /**
   * TODO: an experimental component testing API is out,
   * try and use it when it's available.
   * read https://playwright.dev/docs/test-components
   */

  await page.goto('/404');
});

test.describe('Four Oh Four Component Tests', () => {
  test('should have 404 image', async ({ page }) => {
    const notFoundImage = page.getByTestId(elements.notFoundImage);
    await expect(notFoundImage).toBeVisible();
  });

  test('should have not-found heading', async ({ page }) => {
    const notFoundHeading = page.getByTestId(elements.notFoundHeading);
    await expect(notFoundHeading).toHaveText(
      `${translations[404]['page-not-found']}.`
    );
  });

  test(`should have here's a quote text`, async ({ page }) => {
    const heresQuoteParagraph = page.getByTestId(elements.heresQuoteParagraph);
    await expect(heresQuoteParagraph).toHaveText(
      translations[404]['heres-a-quote']
    );
  });

  test('should load quote component', async ({ page }) => {
    const quoteWrapper = page.getByTestId(elements.quoteWrapper);
    const quoteContent = page.getByTestId(elements.quoteContent);
    const authorName = page.getByTestId(elements.authorName);

    await expect(quoteWrapper).toBeVisible();
    expect(quoteContent).not.toBeNull();
    expect(authorName).not.toBeNull();
  });

  test('should load random quotes', async ({ page }) => {
    const allMotivationalQuotes = words.motivationalQuotes.map(mq => mq.quote);
    const allAuthors = words.motivationalQuotes.map(mq => mq.author);

    const prevShownQuote = await page
      .getByTestId(elements.quoteContent)
      .textContent();
    const prevShownAuthorText = await page
      .getByTestId(elements.authorName)
      .textContent();
    const prevShownAuthor = prevShownAuthorText?.replace('- ', '');

    // TODO: simulate click anywhere on the page
    await page.getByTestId(elements.quoteWrapper).click();

    const newShownQuote = await page
      .getByTestId(elements.quoteContent)
      .textContent();
    const newShownAuthorText = await page
      .getByTestId(elements.authorName)
      .textContent();
    const newShownAuthor = newShownAuthorText?.replace('- ', '');

    expect(allMotivationalQuotes).toContain(prevShownQuote);
    expect(allAuthors).toContain(prevShownAuthor);
    expect(allMotivationalQuotes).toContain(newShownQuote);
    expect(allAuthors).toContain(newShownAuthor);
  });

  test('should display view curriculum link', async ({ page }) => {
    await expect(
      page.getByRole('link', {
        name: translations.buttons['view-curriculum']
      })
    ).toBeVisible();
  });
});
