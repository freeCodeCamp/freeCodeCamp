import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
const url =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';
test.describe('Exam Survey', () => {
  test.beforeAll(() => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
    execSync('node ../tools/scripts/seed/seed-surveys.js delete-only');
  });

  test('submits the survey and shows the success flash', async ({ page }) => {
    await page.goto(url);

    await expect(page.getByTestId('c-sharp-survey-alert')).toBeVisible();
    await page.getByRole('button', { name: 'Take the survey' }).click();

    await page.getByText('Student developer').click();
    await page.getByText('Novice (no prior experience)').click();
    await page.getByRole('button', { name: 'Submit the survey' }).click();

    await expect(page.getByTestId('flash-message')).toContainText(
      /Thank you. Your survey was submitted./
    );
  });
});
