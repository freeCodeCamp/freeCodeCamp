import { test, expect } from '@playwright/test';

const classicChallengeUrl =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';

//   Might need this test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto(classicChallengeUrl);
});

test.describe('Displays UI Correctly', () => {
  test('should render correctly', async ({ page }) => {
    const codeCheckButton = page.getByRole('button', {
      name: 'Check Your Code'
    });
    expect(codeCheckButton).toContain('Check Your Code (Ctrl + Enter)'); //  Test on mobile it just display's Check Your Code
  });
});
