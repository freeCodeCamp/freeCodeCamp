import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import intro from '../client/i18n/locales/english/intro.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

let page: Page;
const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';

test.afterAll(async () => {
  await page.close();
});

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.beforeEach(async () => {
  await page.goto(examUrl);
  await page
    .getByRole('button', {
      name: translations.buttons['click-start-exam']
    })
    .click();
});

test.describe('Exam Show E2E Test Suite for started exam', () => {
  test('The page renders with correct title', async () => {
    await expect(page).toHaveTitle(
      'Foundational C# with Microsoft Certification Exam: Foundational C# with Microsoft Certification Exam | freeCodeCamp.org'
    );
  });

  test('The page has correct navigation direct flow', async () => {
    const headerTitle = page.getByTestId('exam-show-title');
    const prevQuestionBtn = page.getByRole('button', {
      name: translations.buttons['previous-question']
    });
    const exitButton = page.getByRole('button', {
      name: translations.buttons['exit-exam']
    });
    const nextBtn = page.getByRole('button', {
      name: translations.buttons['next-question']
    });
    const finishExamBtn = page.getByRole('button', {
      name: translations.buttons['finish-exam']
    });
    for (let i = 1; i < 6; i++) {
      await expect(headerTitle).toBeVisible();
      await expect(headerTitle).toContainText(
        intro['foundational-c-sharp-with-microsoft'].blocks[
          'foundational-c-sharp-with-microsoft-certification-exam'
        ].title
      );

      await expect(page.getByTestId('exam-show-question-time')).toContainText(
        translations.learn.exam.time.split(':')[0]
      );
      await expect(
        page.getByText('Question ' + String(i) + ' of 5')
      ).toBeVisible();

      await expect(prevQuestionBtn).toBeVisible();
      if (i != 1) {
        await expect(prevQuestionBtn).toBeEnabled();
      } else {
        await expect(prevQuestionBtn).not.toBeEnabled();
      }
      for (let j = 0; j < 5; j++) {
        // 4 answers
        await page.getByTestId('exam-answer-label-' + String(j)).check();
      }
      await expect(exitButton).toBeVisible();
      await expect(exitButton).toBeEnabled();
      if (i < 5) {
        await expect(finishExamBtn).not.toBeVisible();
        await expect(nextBtn).toBeVisible();
        await nextBtn.click();
      } else {
        await expect(finishExamBtn).toBeEnabled();
        await expect(finishExamBtn).toBeVisible();
        await expect(nextBtn).not.toBeVisible();
      }
    }
  });

  test('The page has correct navigation back flow', async () => {
    const headerTitle = page.getByTestId('exam-show-title');
    await expect(headerTitle).toBeVisible();
    await expect(headerTitle).toContainText(
      intro['foundational-c-sharp-with-microsoft'].blocks[
        'foundational-c-sharp-with-microsoft-certification-exam'
      ].title
    );
    await expect(page.getByTestId('exam-show-question-time')).toContainText(
      translations.learn.exam.time.split(':')[0]
    );

    await page.getByTestId('exam-answer-label-0').check();
    await page
      .getByRole('button', { name: translations.buttons['next-question'] })
      .click();
    await expect(page.getByText('Question 2 of 5')).toBeVisible();
    await page
      .getByRole('button', { name: translations.buttons['previous-question'] })
      .click();
    await expect(page.getByText('Question 1 of 5')).toBeVisible();
  });
});
