import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';
const exitUrl =
  '/learn/foundational-c-sharp-with-microsoft/#foundational-c-sharp-with-microsoft-certification-exam';

test.beforeEach(async ({ page }) => {
  await page.goto(examUrl);
  await page
    .getByRole('button', {
      name: translations.buttons['click-start-exam']
    })
    .click();
  const QUESTION_COUNT = 5;
  for (let i = 0; i < QUESTION_COUNT; i++) {
    const quizOptions = await page.getByRole('radio').all();
    await quizOptions[0].check({ force: true });

    if (i < QUESTION_COUNT - 1) {
      await page
        .getByRole('button', {
          name: translations.buttons['next-question']
        })
        .click();
    } else {
      await page
        .getByRole('button', {
          name: translations.buttons['finish-exam']
        })
        .click();
    }
  }
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Exam Results E2E Test Suite', () => {
  test('Verifies the Correct Rendering of the Exam results', async ({
    page
  }) => {
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

  test('Exam Results When the User clicks on Download button', async ({
    page
  }) => {
    await page.waitForEvent('download'); // wait for download to start
    await page.getByTestId('download-exam-results').click();
    await expect(page).toHaveURL(examUrl);
  });

  test('Exam Results when the User clicks on Exit button', async ({ page }) => {
    await page.getByTestId('exit-exam').click();
    await expect(page.getByTestId('exam-results-header')).not.toBeVisible();
    await expect(page).toHaveURL(exitUrl);
  });
});
