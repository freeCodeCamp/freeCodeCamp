import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const currentUrlPath =
  '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1';

test.beforeEach(async ({ page }) => {
  await page.goto(currentUrlPath);
});

test.describe('Exit Project Preview Modal E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Project Preview Modal', async ({
    page
  }) => {
    await expect(
      page.getByRole('button', {
        name: translations.buttons.close
      })
    ).toBeVisible();

    const dialog = page.getByRole('dialog', {
      name: translations.learn['project-preview-title']
    });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByTitle('CatPhotoApp preview')).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Start Coding!' })
    ).toBeVisible();
  });

  test('Closes the Project Preview Modal When the User clicks on the close Button', async ({
    page
  }) => {
    const dialog = page.getByRole('dialog', {
      name: translations.learn['project-preview-title']
    });

    await expect(dialog).toBeVisible();

    await page.getByRole('button', { name: 'Start Coding!' }).click();

    await expect(dialog).not.toBeVisible();
  });

  test('Closes the Project Preview Modal when the User clicks on X button', async ({
    page
  }) => {
    const dialog = page.getByRole('dialog', {
      name: translations.learn['project-preview-title']
    });

    await expect(dialog).toBeVisible();

    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();

    await expect(dialog).not.toBeVisible();
  });
});
