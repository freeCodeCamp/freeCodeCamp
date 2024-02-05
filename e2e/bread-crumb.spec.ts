import { test, expect } from '@playwright/test';

const breadcrumbNavs = {
  left: {
    text: '(New) Foundational C# with Microsoft',
    url: '/learn/foundational-c-sharp-with-microsoft'
  },
  right: {
    text: 'Write Your First Code Using C#',
    url: '/learn/foundational-c-sharp-with-microsoft/#write-your-first-code-using-c-sharp'
  }
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
      page.getByRole('listitem').filter({ hasText: breadcrumbNavs.left.text })
    ).toBeVisible();
    await expect(
      page.getByRole('listitem').filter({ hasText: breadcrumbNavs.right.text })
    ).toBeVisible();
  });

  test('left breadcrumb nav link should have correct URL', async ({ page }) => {
    await page
      .getByRole('listitem')
      .filter({ hasText: breadcrumbNavs.left.text })
      .click();
    await expect(page).toHaveURL(breadcrumbNavs.left.url);
  });

  test('right breadcrumb nav link should have correct URL', async ({
    page
  }) => {
    await page
      .getByRole('listitem')
      .filter({ hasText: breadcrumbNavs.right.text })
      .click();
    await expect(page).toHaveURL(breadcrumbNavs.right.url);
  });
});
