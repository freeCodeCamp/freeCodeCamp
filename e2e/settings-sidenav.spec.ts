import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  // Set viewport to desktop size to ensure sideNav is visible
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('/settings');

  // Wait for the main heading to appear
  await expect(
    page.getByRole('heading', { level: 1, name: 'Settings for certifieduser' })
  ).toBeVisible();
});

test.describe('Settings SideNav Component', () => {
  test('should display the settings sideNav with links to all main sections', async ({
    page,
    isMobile
  }) => {
    test.setTimeout(30000);
    test.skip(isMobile, 'Sidebar is hidden on mobile');

    const sideNav = page.getByRole('complementary');
    const main = page.getByRole('main');

    // Get all h2 and h3 heading in the main section
    const h2Texts = await main
      .getByRole('heading', { level: 2 })
      .allTextContents();
    const h3Texts = await main
      .getByRole('heading', { level: 3 })
      .allTextContents();

    const headingTexts = [...h2Texts, ...h3Texts];

    // Make sure the sideNav contains the same number of links as headings
    const sideNavLinks = sideNav.getByRole('link');
    await expect(sideNavLinks).toHaveCount(headingTexts.length);

    // For each heading text, find the link by accessible name and test click behavior
    for (const headingText of headingTexts) {
      const link = sideNav.getByRole('link', {
        name: headingText,
        exact: true
      });

      await expect(link).toBeVisible();

      // Get the href and assert the URL ends with it after click
      const href = await link.getAttribute('href');
      await link.click();

      // Wait for scroll animation
      // Playwright performs click very fast, which could lead to URL check before scroll ends
      await page.waitForTimeout(300);

      await expect(page).toHaveURL(new RegExp(href + '$'));
    }
  });
});
