import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Exam Token Widget', () => {
  test('should tell you to not share the token with anyone', async ({
    page
  }) => {
    await expect(
      page.getByText(
        'Your exam token is a secret key that allows you to access the exam. Do not share this token with anyone'
      )
    ).toBeVisible();
  });

  test('should be able to generate a token', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate Exam Token' }).click();
    await expect(page.getByText('Your Exam Token is:')).toBeVisible();
  });
});
