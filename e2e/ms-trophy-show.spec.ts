import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.describe('MS Trophy page if the user is signed in', () => {
  test('should render the content correctly', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Write Your First Code Using C# - Trophy - Write Your First Code Using C# | Learn | freeCodeCamp.org'
    );
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Trophy - Write Your First Code Using C#'
      })
    ).toBeVisible();

    await expect(
      page.getByText(
        'Now that you\'ve completed all of the "Write Your First Code Using C#" challenges, you should have earned the trophy for it on the Microsoft Learn platform.'
      )
    ).toBeVisible();

    await expect(page.getByRole('button', { name: 'Unlink' })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Verify Trophy' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Ask for Help' })
    ).toBeVisible();
  });
});

test.describe('MS Trophy page if the user is not signed in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('should render the content correctly', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Write Your First Code Using C# - Trophy - Write Your First Code Using C# | Learn | freeCodeCamp.org'
    );
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Trophy - Write Your First Code Using C#'
      })
    ).toBeVisible();

    await expect(
      page.getByText(
        'Now that you\'ve completed all of the "Write Your First Code Using C#" challenges, you should have earned the trophy for it on the Microsoft Learn platform.'
      )
    ).toBeVisible();

    // There are two "Sign in" buttons on the page: one in the nav, and one in the page body
    await expect(page.getByRole('link', { name: 'Sign in' })).toHaveCount(2);
    await expect(
      page.getByRole('button', { name: 'Verify Trophy' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Verify Trophy' })
    ).toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Ask for Help' })
    ).toBeVisible();
  });
});
