import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Challenge Breadcrumb Component Tests', () => {
  test('breadcrumb nav links should be visible', async ({ page }) => {
    const leftBreadcrumb = page.getByTestId('breadcrumb-left');
    const rightBreadcrumb = page.getByTestId('breadcrumb-right');
    await expect(leftBreadcrumb).toBeVisible();
    await expect(rightBreadcrumb).toBeVisible();
  });

  test('breadcrumb nav links should have correct name', async ({ page }) => {
    const leftBreadcrumb = page.getByTestId('breadcrumb-left');
    const rightBreadcrumb = page.getByTestId('breadcrumb-right');
    await expect(leftBreadcrumb).toHaveText(
      '(New) Foundational C# with Microsoft'
    );
    await expect(rightBreadcrumb).toHaveText('Write Your First Code Using C#');
  });

  test('left breadcrumb nav link should have correct URL', async ({ page }) => {
    await page.getByTestId('breadcrumb-left').click();
    await expect(page).toHaveURL(
      'http://localhost:8000/learn/foundational-c-sharp-with-microsoft'
    );
  });

  test('right breadcrumb nav link should have correct URL', async ({
    page
  }) => {
    await page.getByTestId('breadcrumb-right').click();
    await expect(page).toHaveURL(
      'http://localhost:8000/learn/foundational-c-sharp-with-microsoft/#write-your-first-code-using-c-sharp'
    );
  });
});
