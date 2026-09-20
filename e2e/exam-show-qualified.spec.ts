import { test, expect } from '@playwright/test';
import intro from '../client/i18n/locales/english/intro.json';
import translations from '../client/i18n/locales/english/translations.json';

const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';

test.beforeEach(async ({ page }) => {
  await page.goto(examUrl);
});

test.describe('Exam Show E2E Test Suite for qualified user', () => {
  test('starts the exam without navigating away', async ({ page }) => {
    await page
      .getByRole('button', {
        name: translations.buttons['click-start-exam']
      })
      .click();
    await expect(page).toHaveURL(examUrl);
    await expect(page.getByTestId('exam-show-title')).toHaveText(
      intro['foundational-c-sharp-with-microsoft'].blocks[
        'foundational-c-sharp-with-microsoft-certification-exam'
      ].title
    );
  });
});
