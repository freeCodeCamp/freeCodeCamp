import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.describe('Challenge Breadcrumb Component Tests', () => {
  test('should display correctly', async ({ page }) => {
    const superBlock = page.getByRole('listitem').first();
    await expect(superBlock).toBeVisible();

    const superBlockLink = superBlock.getByRole('link', {
      name: '(New) Foundational C# with Microsoft'
    });
    await expect(superBlockLink).toBeVisible();
    await expect(superBlockLink).toHaveAttribute(
      'href',
      '/learn/foundational-c-sharp-with-microsoft'
    );

    const block = page.getByRole('listitem').last();
    await expect(superBlock).toBeVisible();

    const blockLink = block.getByRole('link', {
      name: 'Write Your First Code Using C#'
    });
    await expect(blockLink).toBeVisible();
    await expect(blockLink).toHaveAttribute(
      'href',
      '/learn/foundational-c-sharp-with-microsoft/#write-your-first-code-using-c-sharp'
    );
  });
});
