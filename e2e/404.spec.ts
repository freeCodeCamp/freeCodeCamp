import { test, expect, type Page } from '@playwright/test';
import words from '../client/i18n/locales/english/motivation.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/404');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('404 Page Tests', () => {
  test('should display the correct title', async () => {
    await expect(page).toHaveTitle('Page not found | freeCodeCamp.org');
  });

  test('should display the main heading', async () => {
    await expect(
      page.getByRole('heading', { name: 'Page not found' })
    ).toBeVisible();
  });

  test('should display the body text', async () => {
    await expect(
      page.getByText(
        "We couldn't find what you were looking for, but here is a quote:"
      )
    ).toBeVisible();
  });

  test('should display a random quote', async () => {
    const shownQuote = await page.getByTitle('quote').textContent();
    const shownAuthorText = await page.getByTitle('author').textContent();
    const shownAuthor = shownAuthorText?.replace('- ', '');

    const allMotivationalQuotes = words.motivationalQuotes.map(mq => mq.quote);
    const allAuthors = words.motivationalQuotes.map(mq => mq.author);

    expect(allMotivationalQuotes).toContain(shownQuote);
    expect(allAuthors).toContain(shownAuthor);
  });

  test('should have a link to view curriculum', async () => {
    const viewCurriculumLink = page.getByRole('link', {
      name: 'View the Curriculum'
    });
    await expect(viewCurriculumLink).toBeVisible();
    await expect(viewCurriculumLink).toHaveAttribute('href', '/learn');
  });
});
