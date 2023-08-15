import { test, expect } from '@playwright/test';

const certifiedUser = '/certification/certifieduser/responsive-web-design';
const home = '/';
const ISSUED_DATE = 'Developer Certification on August 3, 2018';

test.describe("while viewing someone else's,", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(certifiedUser);
  });

  test('should display certificate', async ({ page }) => {
    await expect(page.locator('text=successfully completed')).toBeVisible();
    await expect(page.locator('text=Responsive Web Design')).toBeVisible();
  });

  test('should not render a LinkedIn button', async ({ page }) => {
    await expect(
      page.locator('text=Add this certification to my LinkedIn profile')
    ).toBeHidden();
  });

  test('should not render a Twitter button', async ({ page }) => {
    await expect(
      page.locator('text=Share this certification on Twitter')
    ).toBeHidden();
  });
});

test.describe('while viewing your own,', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(home);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.goto(certifiedUser);
  });

  test('should render a LinkedIn button', async ({ page }) => {
    await expect(
      page.locator('text=Add this certification to my LinkedIn profile')
    ).toBeVisible();
  });

  test('should render a Twitter button', async ({ page }) => {
    await expect(
      page.locator('text=Share this certification on Twitter')
    ).toBeVisible();
  });

  test('should be issued with the submission date', async ({ page }) => {
    await expect(page.locator('[data-cy=issue-date]')).toContainText(
      ISSUED_DATE
    );
  });
});
