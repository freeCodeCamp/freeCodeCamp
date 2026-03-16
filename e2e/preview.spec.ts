import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { focusEditor } from './utils/editor';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
  );
});

test.describe('Challenge Preview Component', () => {
  test('should render correct output for default and changed code', async ({
    page,
    isMobile
  }) => {
    if (isMobile) {
      await page
        .getByRole('tab', { name: translations.learn['editor-tabs'].preview })
        .click();
    }

    // Check default code output
    await expect(
      page
        .frameLocator('.challenge-preview-frame')
        .getByRole('heading', { name: 'CatPhotoApp' })
    ).toBeVisible();

    // Change code
    await focusEditor({ page, isMobile });
    await page.keyboard.insertText('<h1>FreeCodeCamp</h1>');
    if (isMobile) {
      await page
        .getByRole('tab', { name: translations.learn['editor-tabs'].preview })
        .click();
    }

    // Check changed code output
    await expect(
      page
        .frameLocator('.challenge-preview-frame')
        .getByRole('heading', { name: 'FreeCodeCamp' })
    ).toBeVisible();
  });
});
