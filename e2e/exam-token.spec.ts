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
    await expect(
      page.getByRole('button', { name: 'View Exam Token' })
    ).toBeVisible();
  });

  test('should be able to let the user view their token', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate Exam Token' }).click();
    await page.getByRole('button', { name: 'View Exam Token' }).click();

    await expect(page.getByText('Your Exam Token is:')).toBeVisible();
    await expect(page.getByTestId('exam-token')).toBeVisible();
  });

  test('should be able to let the user to hide their token', async ({
    page
  }) => {
    await page.getByRole('button', { name: 'Generate Exam Token' }).click();
    await page.getByRole('button', { name: 'View Exam Token' }).click();

    await expect(page.getByText('Your Exam Token is:')).toBeVisible();
    await expect(page.getByTestId('exam-token')).toBeVisible();

    await page.getByRole('button', { name: 'Hide Exam Token' }).click();
    await expect(page.getByTestId('exam-token')).not.toBeVisible();
  });

  test('should be able to let the user delete their token', async ({
    page
  }) => {
    await page.getByRole('button', { name: 'Generate Exam Token' }).click();
    await page.getByRole('button', { name: 'Delete Exam Token' }).click();

    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('button', { name: 'Delete Exam Token' }).click();

    await expect(
      page.getByRole('button', { name: 'View Exam Token' })
    ).not.toBeVisible();
  });
});
