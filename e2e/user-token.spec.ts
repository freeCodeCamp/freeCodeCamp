import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
test.use({ storageState: 'playwright/.auth/development-user.json' });

test.beforeEach(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user');
});

test.afterAll(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
});

test.describe('Initially', () => {
  test('should not render', async ({ page }) => {
    await page.goto('/settings');
    await expect(page.getByTestId('user-token')).not.toBeVisible();
  });
});

test.describe('After creating token', () => {
  test('should allow you to delete your token', async ({ page }) => {
    await page.goto(
      '/learn/relational-database/learn-bash-by-building-a-boilerplate/build-a-boilerplate'
    );
    await page.getByRole('button', { name: 'Start the course' }).click();

    await page.goto('/settings');
    await expect(page.getByTestId('user-token')).toBeVisible();
    await page.getByRole('button', { name: 'Delete my user token' }).click();
    await expect(page.getByTestId('flash-message')).toContainText(
      /Your user token has been deleted./
    );
    await expect(page.getByTestId('user-token')).not.toBeVisible();
  });
});
