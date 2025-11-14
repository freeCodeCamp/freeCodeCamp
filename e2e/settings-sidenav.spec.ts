import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  // Set viewport to desktop size to ensure sideNav is visible
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('/settings');

  // Wait for the settings page to load (wait for the main heading to appear)
  await page.waitForSelector(
    '[data-playwright-test-label="settings-heading"]',
    {
      timeout: 10000
    }
  );
});

test.describe('Settings sideNav Component', () => {
  test('should display the settings sideNav', async ({ page }) => {
    const sideNav = page.locator('aside');
    await expect(sideNav.getByText('Account')).toBeVisible();
    await expect(sideNav.getByText('Privacy')).toBeVisible();
    await expect(sideNav.getByText('Email')).toBeVisible();
    await expect(sideNav.getByText('Academic Honesty Policy')).toBeVisible();
    await expect(
      sideNav.getByText('Certifications', { exact: true })
    ).toBeVisible();
    await expect(sideNav.getByText('Legacy Certifications')).toBeVisible();
    await expect(sideNav.getByText('Danger Zone')).toBeVisible();
    await expect(sideNav.getByText('User Token')).not.toBeVisible();
    await expect(sideNav.getByText('Exam Token')).not.toBeVisible();
  });
});

// exam token and user token tests to be added when exam-token-spec.ts is enabled.
