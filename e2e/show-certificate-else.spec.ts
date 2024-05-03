import { test, expect } from '@playwright/test';

test.describe('Show certification else', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/certification/certifieduser/responsive-web-design');
  });

  test('while viewing someone else, should display the certificate information', async ({
    page
  }) => {
    await expect(page.getByTestId('successful-completion')).toBeVisible();
    await expect(page.getByTestId('certification-title')).toBeVisible();
    await expect(page.getByTestId('issue-date')).toContainText(
      'Developer Certification on August 3, 2018'
    );
  });

  test('while viewing someone else, should not render a LinkedIn button and Twitter button', async ({
    page
  }) => {
    await expect(page.getByTestId('linkedin-share-btn')).toBeHidden();
    await expect(page.getByTestId('twitter-share-btn')).toBeHidden();
  });
});
