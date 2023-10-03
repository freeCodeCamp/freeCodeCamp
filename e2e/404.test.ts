import { test, expect, type Page } from '@playwright/test';

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
    await expect(page).toHaveTitle('Page not found| freeCodeCamp');
  });

  test('should display the main heading', async () => {
    const mainHeading = page.getByTestId('main-heading');
    expect(mainHeading).not.toBeNull();
    expect(await mainHeading.textContent()).toBe('Page not found.');
  });

  test('should display the 404 body text', async () => {
    const BodyText = page.getByTestId('404-body-text');
    expect(BodyText).not.toBeNull();
    expect(await BodyText.textContent()).toContain(
      "We couldn't find what you were looking for, but here is a quote:"
    );
  });
  test('should click the link and navigate to /learn', async () => {
    await page.click('[data-playwright-test-label="view-curriculum-link"]');
    expect(page.url()).toBe('/learn'); // Replace with the expected URL
  });
});
