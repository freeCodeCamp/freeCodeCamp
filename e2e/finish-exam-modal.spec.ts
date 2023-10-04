import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const currentUrlPath = ''; //TODO add url

test.beforeEach(async ({ page }) => {
  await page.goto(currentUrlPath);
  //TODO navigate to the desired page
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Finish Exit exam Modal E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Finish Exit exam Modal', async ({
    page
  }) => {
    await expect(
      page.getByText(translations.learn.exam['finish-header'])
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.buttons.close
      })
    ).toBeVisible();
    await expect(page.getByText(translations.learn.exam.finish)).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.learn.exam['finish-yes']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.learn.exam['finish-no']
      })
    ).toBeVisible();
  });

  test('Closes the Finish Exit exam Modal When the User clicks on finish-no button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.learn.exam['exit-no'] })
      .click();
    await expect(
      page.getByText(translations.learn.exam['exit-header'])
    ).not.toBeVisible();
    await expect(page).toHaveURL(currentUrlPath);
  });

  test('Closes the Modal when the User clicks on finish-yes button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.learn.exam['finish-yes'] })
      .click();
    await expect(
      page.getByText(translations.learn.exam['finish-header'])
    ).not.toBeVisible();
    await expect(page).toHaveURL(currentUrlPath);
  });

  test('Closes the Modal when the User clicks on X button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();
    await expect(
      page.getByText(translations.learn.exam['finish-header'])
    ).not.toBeVisible();
    await expect(page).toHaveURL(currentUrlPath);
  });
});
