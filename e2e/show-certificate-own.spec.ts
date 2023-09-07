import { test, expect, type Page } from '@playwright/test';

test.use({ storageState: 'LoginAuth.json' });

test.describe('Show certification own', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/certification/certifieduser/responsive-web-design');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should display certificate details', async () => {
    expect(await page.isVisible('text=successfully completed')).toBeTruthy();
    expect(await page.isVisible('text=Responsive Web Design')).toBeTruthy();
    await expect(page.locator('[data-cy=issue-date]')).toContainText(
      'Developer Certification on August 3, 2018'
    );
  });

  test('should render LinkedIn and Twitter buttons', async () => {
    expect(
      await page.isVisible('text=Add this certification to my LinkedIn profile')
    ).toBeTruthy();
    expect(
      await page.isVisible('text=Share this certification on Twitter')
    ).toBeTruthy();
  });
});
