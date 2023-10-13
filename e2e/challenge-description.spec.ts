import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.describe('Challenge Description Component Tests', () => {
  test('should be visible', async ({ page }) => {
    const challengeDescription = page.getByTestId('challenge-description');
    await expect(challengeDescription).toBeVisible();
  });

  test('should contain text', async ({ page }) => {
    const challengeDescription = page.getByTestId('challenge-description');
    await expect(challengeDescription).toHaveText(/ */);
  });
});
