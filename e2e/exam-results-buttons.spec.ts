import * as fs from 'fs';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';

test.beforeEach(async ({ page }) => {
  await page.goto(examUrl);
  await page
    .getByRole('button', {
      name: translations.buttons['click-start-exam']
    })
    .click();
  const QUESTION_COUNT = 5;
  for (let i = 0; i < QUESTION_COUNT; i++) {
    await page.getByRole('radio').first().check({ force: true });

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
      await page
        .getByRole('button', { name: translations.learn.exam['finish-yes'] })
        .click();
    }
  }
});

test.describe('Exam Results E2E Test Suite', () => {
  test('Exam Results When the User clicks on Download button', async ({
    page
  }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByTestId('download-exam-results').click()
    ]);
    const suggestedFileName = download.suggestedFilename();
    await download.saveAs(suggestedFileName);
    expect(fs.existsSync(suggestedFileName)).toBeTruthy();
    await download.delete();
    await expect(page).toHaveURL(examUrl);
  });
});
