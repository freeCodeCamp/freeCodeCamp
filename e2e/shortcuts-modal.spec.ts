import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page, isMobile }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
  );
  if (isMobile) {
    await page.getByRole('tab', { name: 'Code' }).click();
  }
  await page.keyboard.press('Escape');
  await page.keyboard.press('Shift+?');
});

test.describe('Challenge Shortcuts Modal Tests', () => {
  test('should render the modal correctly', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: translations.shortcuts['title']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.close })
    ).toBeVisible();
    await expect(page.getByRole('table')).toBeVisible();
    await expect(
      page.getByLabel('Keyboard shortcuts').locator('p')
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.on })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.buttons.on,
        pressed: true
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.buttons.off,
        pressed: false
      })
    ).toBeVisible();
  });

  test('should close the modal after user click on close', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();
    await expect(
      page.getByRole('heading', {
        name: translations.shortcuts['title']
      })
    ).not.toBeVisible();
  });
});
