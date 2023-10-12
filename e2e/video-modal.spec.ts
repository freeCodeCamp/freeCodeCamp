import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const currentUrlPath =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript';

test.beforeEach(async ({ page }) => {
  await page.goto(currentUrlPath);
  await page.getByTestId('get-help-dropdown').click();
  await page.getByTestId('watch-a-video').click();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Exit Video Modal E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Video Modal', async ({
    page
  }) => {
    await expect(page.getByTestId('video-modal-title')).toBeVisible();
    await expect(
      page.getByTestId('video-modal-video-player-iframe')
    ).toBeVisible();
    await expect(
      page.getByText(translations.learn['scrimba-tip'])
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.close })
    ).toBeVisible();
  });

  test('Closes the Video Modal When the User clicks on exit button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();
    await expect(
      page.getByText(translations.buttons['watch-video'])
    ).not.toBeVisible();
  });
});
