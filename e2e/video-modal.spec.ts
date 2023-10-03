import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const currentUrlPath =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript';

test.beforeEach(async ({ page }) => {
  await page.goto(currentUrlPath);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Exit Video Modal E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Video Modal', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons['get-help'] })
      .click();
    await page
      .getByRole('button', { name: translations.buttons['watch-video'] })
      .click();

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
    await expect(page).toHaveURL(currentUrlPath);
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
    await expect(page).toHaveURL(currentUrlPath);
  });
});
