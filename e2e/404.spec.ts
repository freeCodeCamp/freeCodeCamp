import { test, expect, type Page } from '@playwright/test';
let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/404');
});
test.afterAll(async () => {
  await page.close();
});

test('Should have page title "Page not found"', async () => {
  await expect(page).toHaveTitle('Page not found| freeCodeCamp');
});

test('Should display "Page not found" message', async () => {
  const pageHeading1 = page.getByTestId('page-not-found-big-heading-1');
  await expect(pageHeading1).toHaveText('Page not found.');
});

test('Should display link to curriculum', async () => {
  const linkToCurriculum = page.getByTestId('page-not-found-curriculum-link');
  await expect(linkToCurriculum).toHaveText('View the Curriculum');
  await expect(linkToCurriculum).toHaveAttribute('href', '/learn');
});
