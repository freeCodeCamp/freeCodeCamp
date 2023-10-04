import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;
const startUrl = '/learn';
const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';
const cancelExamUrl =
  '/learn/foundational-c-sharp-with-microsoft/#foundational-c-sharp-with-microsoft-certification-exam';

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto(startUrl);
  //sign-in
  await page
    .getByRole('link', { name: translations.buttons['sign-in'], exact: true })
    .click();
});

test.beforeEach(async () => {
  await page.goto(examUrl);
  await page
    .getByRole('button', {
      name: translations.buttons['click-start-exam']
    })
    .click();
  await page
    .getByRole('button', {
      name: translations.buttons['exit-exam']
    })
    .click();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Exit exam Modal E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Exit exam Modal', async () => {
    await expect(
      page.getByText(translations.learn.exam['exit-header'])
    ).toBeVisible();
    await expect(page.getByText(translations.learn.exam.exit)).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.learn.exam['exit-yes']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.buttons.close
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations.learn.exam['exit-no']
      })
    ).toBeVisible();
  });

  test('Closes the Exit exam Modal When the User clicks on exit-no button', async () => {
    await page
      .getByRole('button', { name: translations.learn.exam['exit-no'] })
      .click();
    await expect(
      page.getByText(translations.learn.exam['exit-header'])
    ).not.toBeVisible();
    await expect(page).toHaveURL(examUrl);
  });

  test('Closes the Modal when the User clicks on exit-yes button', async () => {
    await page
      .getByRole('button', { name: translations.learn.exam['exit-yes'] })
      .click();
    await expect(
      page.getByText(translations.learn.exam['exit-header'])
    ).not.toBeVisible();

    await expect(page).toHaveURL(cancelExamUrl);
  });

  test('Closes the Modal when the User clicks on X button', async () => {
    await page
      .getByRole('button', {
        name: translations.buttons.close
      })
      .click();
    await expect(
      page.getByText(translations.learn.exam['exit-header'])
    ).not.toBeVisible();
    await expect(page).toHaveURL(examUrl);
  });
});
