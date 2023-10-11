import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Challenge Description Component Tests', () => {
  test('should be visible', async () => {
    const challengeDescription = page.getByTestId('challenge-description');
    await expect(challengeDescription).toBeVisible();
  });

  test('should contain text', async () => {
    const challengeDescription = page.getByTestId('challenge-description');
    await expect(challengeDescription).toHaveText(/ */);
  });
});
