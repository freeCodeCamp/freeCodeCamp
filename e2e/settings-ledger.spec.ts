import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Settings Ledger Component', () => {
  test('should display the settings ledger with all navigation links', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');
    await expect(ledger).toBeVisible();

    // Check for main section links
    await expect(
      ledger.getByRole('link', { name: 'Account Settings' })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', { name: 'Privacy Settings' })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', { name: 'Email Settings' })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', { name: 'Academic Honesty Policy' })
    ).toBeVisible();

    // Check for Certifications section header
    await expect(
      ledger.getByRole('link', { name: 'Certifications', exact: true })
    ).toBeVisible();

    // Check for Legacy Certifications section header
    await expect(
      ledger.getByRole('link', { name: 'Legacy Certifications' })
    ).toBeVisible();
  });

  test('should navigate to the correct section when a ledger link is clicked', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');

    // Click on Privacy Settings link
    await ledger.getByRole('link', { name: 'Privacy Settings' }).click();
    await page.waitForTimeout(600); // Wait for smooth scroll

    // Verify the Privacy section is visible
    const privacySection = page.locator('[name="privacy"]');
    await expect(privacySection).toBeInViewport();
  });

  test('should have the active class on the current section link', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');

    // Click on Email Settings
    await ledger.getByRole('link', { name: 'Email Settings' }).click();
    await page.waitForTimeout(600);

    // Check if the Email Settings link has the active class
    const emailLink = ledger.getByRole('link', { name: 'Email Settings' });
    await expect(emailLink).toHaveClass(/active/);
  });

  test('should display individual certification links under Certifications section', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');

    // Check for some current certifications
    await expect(
      ledger.getByRole('link', { name: /Responsive Web Design/ })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', {
        name: /JavaScript Algorithms and Data Structures/
      })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', { name: /Front End Development Libraries/ })
    ).toBeVisible();
  });

  test('should display individual certification links under Legacy Certifications section', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');

    // Check for legacy certifications
    await expect(
      ledger.getByRole('link', { name: /Legacy Front End/ })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', { name: /Legacy Back End/ })
    ).toBeVisible();
    await expect(
      ledger.getByRole('link', { name: /Legacy Data Visualization/ })
    ).toBeVisible();
  });

  test('should navigate to a specific certification when clicked', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');

    // Click on a certification link
    await ledger.getByRole('link', { name: /Responsive Web Design/ }).click();
    await page.waitForTimeout(600);

    // Verify the certification section is in view
    const certSection = page
      .locator('[name="cert-responsive-web-design"]')
      .first();
    await expect(certSection).toBeInViewport();
  });

  test('should show section headings with special styling', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');

    // Check that section headings have the special class
    const certsHeading = ledger.getByRole('link', {
      name: 'Certifications',
      exact: true
    });
    await expect(certsHeading).toHaveClass(/ledger-section-heading/);

    const legacyCertsHeading = ledger.getByRole('link', {
      name: 'Legacy Certifications'
    });
    await expect(legacyCertsHeading).toHaveClass(/ledger-section-heading/);
  });

  test('should handle hash navigation on page load', async ({ page }) => {
    // Navigate to settings with a hash
    await page.goto('/settings#cert-data-visualization');
    await page.waitForTimeout(600);

    // Verify the Data Visualization certification section is in view
    const certSection = page
      .locator('[name="cert-data-visualization"]')
      .first();
    await expect(certSection).toBeInViewport();
  });
});
