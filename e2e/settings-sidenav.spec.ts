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
  test('should display the settings sideNav with correct links', async ({
    page,
    isMobile
  }) => {
    test.skip(isMobile, 'Sidebar is hidden on mobile');

    const sideNav = page.locator('aside');

    const expectedLinks = [
      { name: 'Account', href: '#account' },
      { name: 'Privacy', href: '#privacy' },
      { name: 'Email', href: '#email' },
      { name: 'Academic Honesty Policy', href: '#honesty' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Legacy Certifications', href: '#legacy-certifications' },
      { name: 'Danger Zone', href: '#danger-zone' }
    ];

    for (const { name, href } of expectedLinks) {
      const link = sideNav.locator('a').getByText(name, { exact: true });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(new RegExp(href + '$'));
    }
  });
});
