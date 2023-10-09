import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });
test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Flash Message component E2E test', () => {
  test('renders the flash message when click on night mode', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons.menu, exact: true })
      .click();
    await page
      .getByRole('button', {
        name: translations.settings.labels['night-mode'],
        exact: true
      })
      .click();
    await expect(
      page.getByText(translations.flash['updated-themes'])
    ).toBeVisible();
  });

  test('renders the flash message when click on campfire mode', async ({
    page
  }) => {
    await page
      .getByLabel(translations.settings.labels['sound-mode'])
      .getByRole('button', { name: translations.buttons.on })
      .click();
    await expect(
      page.getByText(translations.flash['updated-sound'])
    ).toBeVisible();
  });
});
