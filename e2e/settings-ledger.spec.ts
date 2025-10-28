import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  // Set viewport to desktop size to ensure ledger is visible
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

test.describe('Settings Ledger Component', () => {
  test('should display the settings ledger', async ({ page }) => {
    const ledger = page.locator('.settings-ledger');
    await expect(ledger).toBeVisible();
  });

  test('should display main navigation links', async ({ page }) => {
    const ledger = page.locator('.settings-ledger');

    // Check for main section links using the actual translation text
    await expect(ledger.getByText('Account Settings')).toBeVisible();
    await expect(ledger.getByText('Privacy Settings')).toBeVisible();
    await expect(ledger.getByText('Email Settings')).toBeVisible();
    await expect(ledger.getByText('Academic Honesty Policy')).toBeVisible();
  });

  test('should display certification section headings', async ({ page }) => {
    const ledger = page.locator('.settings-ledger');

    // Check for certification section headings
    await expect(
      ledger.locator('.ledger-section-heading').first()
    ).toBeVisible();

    // Verify we have at least 2 section headings (Certifications and Legacy Certifications)
    await expect(ledger.locator('.ledger-section-heading')).toHaveCount(2);
  });

  test('should navigate when clicking a ledger link', async ({ page }) => {
    const ledger = page.locator('.settings-ledger');

    // Click on Privacy Settings link
    const privacyLink = ledger.getByText('Privacy Settings');
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();

    // Wait for scroll animation to complete
    await page.waitForTimeout(600);

    // Verify the link has the active class after clicking
    await expect(privacyLink).toHaveClass(/active/);
  });

  test('should display individual certification links', async ({ page }) => {
    const ledger = page.locator('.settings-ledger');

    // Check for at least one certification link
    const certLinks = ledger.locator('.ledger-anchor-btn');
    await expect(certLinks.first()).toBeVisible();
  });

  test('should handle hash navigation on page load', async ({ page }) => {
    // Navigate to settings with a hash
    await page.goto('/settings#cert-responsive-web-design');
    await page.waitForTimeout(600);

    // Verify we're on the settings page
    await expect(page.locator('.settings-container')).toBeVisible();
  });
});
