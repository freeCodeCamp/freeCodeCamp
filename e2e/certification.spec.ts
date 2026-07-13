import { test, expect, Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

test.describe('Certification page', () => {
  test('renders a non-Microsoft certification route', async ({ page }) => {
    await page.goto('/certification/certifieduser/responsive-web-design');

    await expect(page.locator('[data-testid="cert-wrapper"]')).toBeVisible();
    await expect(page.locator('[data-testid="cert-links"]')).toBeVisible();
    await expect(
      page.locator('[data-testid="donation-section"]')
    ).toBeVisible();
    await expect(page.locator('[data-testid="project-links"]')).toBeVisible();
  });

  test('renders a Microsoft certification route', async ({ page }) => {
    await page.goto(
      '/certification/certifieduser/foundational-c-sharp-with-microsoft'
    );

    await expect(page.locator('[data-testid="cert-wrapper"]')).toBeVisible();
    await expect(page.locator('[data-testid="cert-links"]')).toBeVisible();
    await expect(
      page.locator('[data-testid="donation-section"]')
    ).toBeVisible();
    await expect(page.locator('[data-testid="project-links"]')).toBeVisible();
  });
});

test.describe('Invalid certification page', () => {
  const testInvalidCertification = async ({ page }: { page: Page }) => {
    await page.goto('/certification/certifieduser/invalid-certification');
    await expect(page).toHaveURL('/');
    await alertToBeVisible(page, translations.flash['certificate-missing']);
  };
  test.describe('for authenticated user', () => {
    test(
      'it should redirect to / and display an error message',
      testInvalidCertification
    );
  });

  test.describe('for unauthenticated user', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    test(
      'it should redirect to / and display an error message',
      testInvalidCertification
    );
  });
});
