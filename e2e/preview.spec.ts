import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );
});

test.describe('Challenge Preview Component', () => {
  test('should render correct output of default code', async ({
    page,
    isMobile
  }) => {
    if (isMobile) {
      await page
        .getByRole('tab', { name: translations.learn['editor-tabs'].preview })
        .click();
    }
    await expect(
      page
        .frameLocator('.challenge-preview-frame')
        .first()
        .getByRole('heading', { name: 'CatPhotoApp' })
    ).toBeVisible();
  });

  test('should render correct output of changed code', async ({
    page,
    browserName,
    isMobile
  }) => {
    // The editor has an overlay div, which prevents the click event from bubbling up in iOS Safari.
    // This is a quirk in this browser-OS combination, and the workaround here is to use `.focus()`
    // in place of `.click()` to focus on the editor.
    // Ref: https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if (isMobile && browserName === 'webkit') {
      await page.getByLabel('Editor content').focus();
    } else {
      await page.getByLabel('Editor content').click();
    }

    await page.keyboard.insertText('<h1>FreeCodeCamp</h1>');
    if (isMobile) {
      await page
        .getByRole('tab', { name: translations.learn['editor-tabs'].preview })
        .click();
    }
    await expect(
      page
        .frameLocator('.challenge-preview-frame')
        .first()
        .getByRole('heading', { name: 'FreeCodeCamp' })
    ).toBeVisible();
  });
});
