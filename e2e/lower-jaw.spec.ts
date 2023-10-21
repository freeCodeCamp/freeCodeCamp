import { test, expect } from '@playwright/test';

const classicChallengeUrl =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';

//   Might need this test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto(classicChallengeUrl);
});

test.describe('<LowerJaw /> tests', () => {
  test('Should render UI correctly', async ({ page }) => {
    const codeCheckButton = page.getByRole('button', {
      name: 'Check Your Code'
    });
    const lowerJawTips = page.getByTestId('failing-test-feedback');
    await expect(codeCheckButton).toHaveText('Check Your Code (Ctrl + Enter)');
    await expect(lowerJawTips).toHaveCount(0);
    await codeCheckButton.click();
  });

  test('Should display full button text on desktop but hide (Ctrl + Enter on mobile)', async ({
    page,
    isMobile
  }) => {
    const codeCheckButton = page.getByRole('button', {
      name: 'Check Your Code'
    });
    await expect(codeCheckButton).toHaveText('Check Your Code (Ctrl + Enter)');

    if (isMobile) {
      await expect(codeCheckButton).toHaveText('Check Your Code');
    }
  });
});
