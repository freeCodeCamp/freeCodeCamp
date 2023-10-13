import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const currentUrlPath =
  '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1';

test.beforeEach(async ({ page }) => {
  await page.goto(currentUrlPath);
});

test.afterEach(async ({ page }) => {
  await page.close();
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
    await expect(page.getByTestId('project-preview-modal-title')).toBeVisible();
    await expect(
      page.locator('div.modal-body').getByTestId('preview-iframe')
    ).toBeVisible();
    // JS will generate 2 iframes, the right one should be chosen
    await expect(
      page.getByTestId('project-preview-modal-closeButton')
    ).toBeVisible();
  });

  test('Closes the Project Preview Modal When the User clicks on the close Button', async ({
    page
  }) => {
    await page.getByTestId('project-preview-modal-closeButton').click();
    await expect(
      page.getByTestId('project-preview-modal-title')
    ).not.toBeVisible();
  });

  test('Closes the Project Preview Modal when the User clicks on X button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();
    await expect(
      page.getByTestId('project-preview-modal-title')
    ).not.toBeVisible();
  });
});
