import { test, expect } from '@playwright/test';

const breadcrumbNavs = {
  leftBreadcrumb: '(New) Foundational C# with Microsoft',
  rightBreadcrumb: 'Write Your First Code Using C#'
};

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
    await expect(
      page
        .getByRole('listitem')
        .filter({ hasText: breadcrumbNavs.leftBreadcrumb })
    ).toBeVisible();
    await expect(
      page
        .getByRole('listitem')
        .filter({ hasText: breadcrumbNavs.rightBreadcrumb })
    ).toBeVisible();
  });

  test('left breadcrumb nav link should have correct URL', async ({ page }) => {
    await page
      .getByRole('listitem')
      .filter({ hasText: breadcrumbNavs.leftBreadcrumb })
      .click();
    await expect(page).toHaveURL(
      'http://localhost:8000/learn/foundational-c-sharp-with-microsoft'
    );
  });

  test('right breadcrumb nav link should have correct URL', async ({
    page
  }) => {
    await page
      .getByRole('listitem')
      .filter({ hasText: breadcrumbNavs.rightBreadcrumb })
      .click();
    await expect(page).toHaveURL(
      'http://localhost:8000/learn/foundational-c-sharp-with-microsoft/#write-your-first-code-using-c-sharp'
    );
  });
});
