import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/blocked');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Blocked Page Tests', () => {
  test('should display the correct title', async () => {
    await expect(page).toHaveTitle('Access Denied | freeCodeCamp.org');
  });

  test('should display the main heading', async () => {
    const mainHeading = page.getByTestId('main-heading');
    expect(mainHeading).not.toBeNull();
    expect(await mainHeading.textContent()).toBe("We can't log you in.");
  });

  test('should display the blocked body text', async () => {
    const blockedBodyText = page.getByTestId('blocked-body-text');
    expect(blockedBodyText).not.toBeNull();
    expect(await blockedBodyText.textContent()).toContain(
      "United States export control and economic sanctions rules don't allow us to log in visitors from your region. Sorry about this. The situation may change in the future."
    );
    expect(await blockedBodyText.textContent()).toContain(
      'If you want, you can learn more about these restrictions.'
    );
  });

  test('should have a link to learn more about restrictions', async () => {
    const learnMoreLink = page.getByTestId('learn-more-link');
    expect(learnMoreLink).not.toBeNull();
    expect(await learnMoreLink.getAttribute('href')).toBe(
      'https://www.okta.com/blocked'
    );
  });
});
