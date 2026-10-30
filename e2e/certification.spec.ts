import { type Page } from '@playwright/test';
import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

test.use({ userPreset: 'certified' });

test.describe('Certification page', () => {
  test('renders a non-Microsoft certification route', async ({
    page,
    isolatedUser
  }) => {
    await page.goto(
      `/certification/${isolatedUser.username}/responsive-web-design`
    );

    await expect(page.locator('[data-testid="cert-wrapper"]')).toBeVisible();
    await expect(page.locator('[data-testid="cert-links"]')).toBeVisible();
    await expect(
      page.locator('[data-testid="donation-section"]')
    ).toBeVisible();
    await expect(page.locator('[data-testid="project-links"]')).toBeVisible();
  });

  test('renders a Microsoft certification route', async ({
    page,
    isolatedUser
  }) => {
    await page.goto(
      `/certification/${isolatedUser.username}/foundational-c-sharp-with-microsoft`
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
  const testInvalidCertification = async ({
    page,
    isolatedUser
  }: {
    page: Page;
    isolatedUser: { username: string };
  }) => {
    await page.goto(
      `/certification/${isolatedUser.username}/invalid-certification`
    );
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
