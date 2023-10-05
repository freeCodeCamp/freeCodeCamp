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

test.describe('Challenge Title Component tests', () => {
  test('Entire Component is rendered correctly', async () => {
    await expect(page.getByTestId('challenge-title-wrap')).toBeVisible();
    await expect(page.getByTestId('challenge-title')).toBeVisible();
  });

  test('Title Displays correctly', async () => {
    const title = page.getByText('Trophy - Write Your First Code Using C#', {
      exact: true
    });
    await expect(title).toBeVisible();
  });
});
