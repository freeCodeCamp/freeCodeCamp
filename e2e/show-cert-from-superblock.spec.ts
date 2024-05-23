import { execSync } from 'child_process';
import { expect, test } from '@playwright/test';

test.describe('When the user HAS NOT claimed their cert they should see "Go to settings to claim your certification"', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/front-end-development-libraries');
  });

  test('should navigate to "/settings#cert-front-end-development-libraries" when clicking the "Go to settings to claim your certification" anchor', async ({
    page
  }) => {
    await page
      .getByRole('link', { name: 'Go to settings to claim your certification' })
      .click();
    expect(page.url()).toContain(
      '/settings/#cert-front-end-development-libraries'
    );
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });
});

test.describe('When the user HAS claimed their cert they should see "Go to settings to claim your certification"', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/front-end-development-libraries');
  });

  test('should navigate to "/settings#cert-front-end-development-libraries" when clicking the "Go to settings to claim your certification" anchor', async ({
    page
  }) => {
    await page.getByRole('link', { name: 'Show Certification' }).click();
    expect(page.url()).toContain(
      '/certification/certifieduser/front-end-development-libraries'
    );
  });
});
