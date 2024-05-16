import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { focusEditor } from './utils/challenge-editor';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
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
    await focusEditor({ page, isMobile, browserName });

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
