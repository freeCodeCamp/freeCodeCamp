import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';
const exitUrl =
  '/learn/foundational-c-sharp-with-microsoft/#foundational-c-sharp-with-microsoft-certification-exam';
let page: Page;

test.beforeEach(async () => {
  await page.goto(examUrl);
  await page
    .getByRole('button', {
      name: translations.buttons['click-start-exam']
    })
    .click();
  for (let i = 0; i < 4; i++) {
    await page.getByTestId('exam-answer-label-0').check();
    await page
      .getByRole('button', {
        name: translations.buttons['next-question']
      })
      .click();
  }
  await page.getByTestId('exam-answer-label-0').check();
  await page
    .getByRole('button', {
      name: translations.buttons['finish-exam']
    })
    .click();
  await page
    .getByRole('button', {
      name: translations.learn.exam['finish-yes']
    })
    .click();
});

test.afterAll(async () => {
  await page.close();
});

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.describe('Exam Results E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Exam results', async () => {
    await expect(page.getByTestId('exam-results-header')).toBeVisible();
    await expect(page.getByTestId('exam-results-message')).toBeVisible();
    await expect(
      page.getByTestId('exam-results-question-results')
    ).toBeVisible();
    await expect(
      page.getByTestId('exam-results-percent-results')
    ).toBeVisible();
    await expect(page.getByTestId('exam-time')).toBeVisible();
    await expect(page.getByTestId('download-exam-results')).toBeVisible();
    await expect(page.getByTestId('exit-exam')).toBeVisible();
  });

  // test('Exam Results When the User clicks on Download button', async () => {
  //   const [downloadProm] = await Promise.all([
  //     page.waitForEvent('download'), // wait for download to start
  //     page.getByTestId('download-exam-results').click()
  //   ]);
  //   const path = await downloadProm.path();
  //   console.log('File was saved in ' + String(path));
  //
  //   await expect(page).toHaveURL(examUrl);
  // });

  test('Exam Results when the User clicks on Exit button', async () => {
    await page.getByTestId('exit-exam').click();
    await expect(page.getByTestId('exam-results-header')).not.toBeVisible();
    await expect(page).toHaveURL(exitUrl);
  });
});
