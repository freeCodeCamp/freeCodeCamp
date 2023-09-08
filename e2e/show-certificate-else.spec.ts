import { test, expect, type Page } from '@playwright/test';

test.describe('Show certification else', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/certification/certifieduser/responsive-web-design');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('while viewing someone else, should display certificate', async () => {
    expect(await page.isVisible('text=successfully completed')).toBeTruthy();
    expect(await page.isVisible('text=Responsive Web Design')).toBeTruthy();
  });

  test('while viewing someone else, should not render a LinkedIn button and Twitter button', async () => {
    await expect(
      page.locator('text=Add this certification to my LinkedIn profile')
    ).toBeHidden();
    await expect(
      page.locator('text=Share this certification on Twitter')
    ).toBeHidden();
  });
});
