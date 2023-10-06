import { test, expect } from '@playwright/test';

const headerComponentElements = {
  skipContent: 'header-skip-content',
  examNav: 'header-exam-nav',
  universalNav: 'header-universal-nav',
  universalNavLogo: 'header-universal-nav-logo'
} as const;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Has link for skip content', async ({ page }) => {
  const skipContent = page.getByTestId(headerComponentElements.skipContent);
  await expect(skipContent).toBeVisible();
});

test('Has nav for universal', async ({ page }) => {
  const universalNavigation = page.getByTestId(
    headerComponentElements.universalNav
  );
  const universalNavigationLogo = page.getByTestId(
    headerComponentElements.universalNavLogo
  );
  await expect(universalNavigation).toBeVisible();
  await expect(universalNavigationLogo).toBeVisible();
});
