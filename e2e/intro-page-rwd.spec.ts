import { execSync } from 'child_process';

import { test, expect } from '@playwright/test';

test.describe('Certification intro page', () => {
  // Use the development user so the certification blocks are incomplete and
  // therefore rendered expanded. The fully certified user has completed every
  // challenge, which collapses the blocks and hides their descriptions.
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeAll(() => {
    execSync('node ../tools/scripts/seed/seed-demo-user');
  });

  test.afterAll(() => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
  });

  test('Should render and toggle correctly', async ({ page }) => {
    const firstBlockToggle = page.getByRole('button', {
      name: /^Learn HTML by Building a Cat Photo App/
    });

    const firstBlockText = page.getByText(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    );

    const secondBlockText = page.getByText(
      'CSS tells the browser how to display your webpage. You can use CSS to set the color, font, size, and other aspects of HTML elements.'
    );

    const superBlockText = page.getByText(
      "this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages"
    );

    await page.goto('/learn/2022/responsive-web-design');

    await expect(page).toHaveTitle(
      'Legacy Responsive Web Design V8 | freeCodeCamp.org'
    );
    await expect(superBlockText).toBeVisible();
    await expect(firstBlockText).toBeVisible();
    await expect(secondBlockText).not.toBeVisible();

    await firstBlockToggle.click();
    await expect(firstBlockText).not.toBeVisible();

    await firstBlockToggle.click();
    await expect(firstBlockText).toBeVisible();
  });
});
