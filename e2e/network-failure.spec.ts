import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Network Failure specific alert should display on any pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('*/**/user/get-session-user', route =>
      route.fulfill({ status: 500 })
    );
  });

  test('should display on home page', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByText(translations.flash['network-error'])
    ).toBeVisible();
  });

  test('should display on learn page', async ({ page }) => {
    await page.goto('/learn');
    await expect(
      page.getByText(translations.flash['network-error'])
    ).toBeVisible();
  });

  test('should display on lecture page', async ({ page }) => {
    await page.goto(
      '/learn/front-end-development-libraries-v9/lecture-introduction-to-javascript-libraries-and-frameworks/what-are-components-in-react-and-how-do-they-work'
    );
    await expect(
      page.getByText(translations.flash['network-error'])
    ).toBeVisible();
  });
});
