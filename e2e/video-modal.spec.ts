import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const currentUrlPath =
  '/learn/responsive-web-design/responsive-web-design-principles/create-a-media-query';

test.describe('Exit Video Modal E2E Test Suite - Mobile', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(currentUrlPath);
    await page.getByTestId('get-help-dropdown').click();
    await page.getByTestId('watch-a-video').click();
  });

  test('Verifies the Correct Rendering of the Video Modal', async ({
    page
  }) => {
    await expect(
      page.getByRole('dialog', { name: translations.buttons['watch-video'] })
    ).toBeVisible();
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
    const dialog = page.getByRole('dialog', {
      name: translations.buttons['watch-video']
    });

    await expect(dialog).toBeVisible();

    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();

    await expect(dialog).not.toBeVisible();
  });
});

test.describe('Exit Video Modal E2E Test Suite - Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(currentUrlPath);
    // Open help modal via independent lower jaw
    await page.getByTestId('independentLowerJaw-help-button').click();
    // Click watch video link from help modal
    await page.getByTestId('watch-a-video-modal-button').click();
  });

  test('Verifies the Correct Rendering of the Video Modal on Desktop', async ({
    page
  }) => {
    const dialog = page.getByRole('dialog', {
      name: translations.buttons['watch-video']
    });

    await expect(dialog).toBeVisible();
    await expect(
      page.getByTestId('video-modal-video-player-iframe')
    ).toBeVisible();
    await expect(
      page.getByText(translations.learn['scrimba-tip'])
    ).toBeVisible();
    await expect(
      dialog.getByRole('button', { name: translations.buttons.close })
    ).toBeVisible();
  });

  test('Closes the Video Modal When the User clicks on exit button on Desktop', async ({
    page
  }) => {
    const dialog = page.getByRole('dialog', {
      name: translations.buttons['watch-video']
    });

    await expect(dialog).toBeVisible();

    await dialog
      .getByRole('button', { name: translations.buttons.close })
      .click();

    await expect(dialog).not.toBeVisible();
  });
});
