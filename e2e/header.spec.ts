import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const headerComponentElements = {
  skipContent: 'header-skip-content',
  examNav: 'header-exam-nav',
  examNavLogo: 'header-exam-nav-microsoft-logo',
  universalNav: 'header-universal-nav',
  universalNavLogo: 'header-universal-nav-logo'
} as const;

const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto(examUrl);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Has link for skip content', async ({ page }) => {
  const skipContent = page.getByTestId(headerComponentElements.skipContent);
  await expect(skipContent).toBeVisible();
  await expect(skipContent).toHaveAttribute('href', '#content-start');
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
  await expect(universalNavigationLogo).toHaveAttribute('href', '/learn');
});

test('Has nav for exams', async ({ page }) => {
  await page
    .getByRole('button', {
      name: translations.buttons['click-start-exam']
    })
    .click();
  await expect(page).toHaveURL(examUrl);
  await expect(page.getByTestId(headerComponentElements.examNav)).toBeVisible();
  await expect(
    page.getByTestId(headerComponentElements.examNavLogo)
  ).toBeVisible();
});
