import { test, expect, Page } from '@playwright/test';

test.describe('BlockedPage', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/blocked');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Should have the correct page title', async () => {
    await expect(page).toHaveTitle('Access Denied | freeCodeCamp.org');
  });

  test('Should render the main heading', async () => {
    await expect(page.locator('h1#content-start')).toBeVisible();
    const headingText = await page.locator('h1#content-start').innerText();
    expect(headingText).toBe("We can't log you in.");
  });

  test('Should render the body content', async () => {
    await expect(page.locator('.blocked-body')).toBeVisible();
    const bodyText = await page.locator('.blocked-body').innerText();
    expect(bodyText).toContain(
      'United States export control and economic sanctions rules'
    );
    expect(bodyText).toContain(
      'If you want, you can learn more about these restrictions.'
    );
  });

  test('Should have a valid "learn more" link', async () => {
    await expect(
      page.locator('a[href="https://www.okta.com/blocked"]')
    ).toBeVisible();
  });
});
