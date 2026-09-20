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

    // Every section should have a link in the sidebar.
    for (const headingText of headingTexts) {
      const link = sideNav.getByRole('link', {
        name: headingText,
        exact: true
      });

      await expect(link).toBeVisible();
    }

    await sideNav
      .getByRole('link', { name: 'Danger Zone', exact: true })
      .click();
    await expect(page).toHaveURL(/#danger-zone$/);
    await expect(
      main.getByRole('heading', { name: 'Danger Zone', exact: true })
    ).toBeInViewport();
  });
});
