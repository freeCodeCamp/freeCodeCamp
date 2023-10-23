import { test, expect } from '@playwright/test';
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
    isMobile
  }) => {
    await page.getByLabel('Editor content').click();
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
