import translations from '../client/i18n/locales/english/translations.json';
import { test, expect } from './fixtures/isolated-user';
import quizFixture from './fixtures/quiz-fixture.json';
import { clearEditor, focusEditor, getEditors } from './utils/editor';
import { allowTrailingSlash } from './utils/url';

const stepBlock =
  'learn-introductory-javascript-by-building-a-pyramid-generator';
const stepSuperblock = '/learn/javascript-algorithms-and-data-structures-v8';
const stepBlockPath = `${stepSuperblock}/#${stepBlock}`;
const quizPath =
  '/learn/responsive-web-design-v9/quiz-basic-html/quiz-basic-html';
const quizBlockPath = '/learn/responsive-web-design-v9/#quiz-basic-html';

interface QuizPageData {
  result: {
    data: {
      challengeNode: {
        challenge: { quizzes: typeof quizFixture };
      };
    };
  };
}

test('classic step completion persists after a reload', async ({
  page,
  browserName,
  isMobile
}) => {
  test.skip(isMobile, 'The classic editor uses a separate mobile tab layout.');

  const completedStep = page.getByRole('link', {
    name: `Step 2 ${translations.icons.passed}`,
    exact: true
  });

  await test.step('Complete and submit the step', async () => {
    await page.goto(`${stepSuperblock}/${stepBlock}/step-2`);
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });
    await getEditors(page).fill('let character;');
    await page
      .getByRole('button', { name: translations.buttons['check-code'] })
      .click();
    await page
      .getByRole('button', { name: translations.buttons['submit-continue'] })
      .click();
    await expect(page).toHaveURL(
      allowTrailingSlash(`${stepSuperblock}/${stepBlock}/step-3`)
    );
  });

  await test.step('Navigate to the block and confirm completion', async () => {
    await page
      .getByRole('link', {
        name: 'Learn Introductory JavaScript by Building a Pyramid Generator',
        exact: true
      })
      .click();
    await expect(page).toHaveURL(stepBlockPath);
    await expect(completedStep).toBeVisible();
  });

  await test.step('Reload the block page', async () => {
    await page.reload();
  });

  await test.step('Assert the step is still complete', async () => {
    // Exact names distinguish Passed from Not Passed.
    await expect(completedStep).toBeVisible();
  });
});

test('quiz completion persists after a reload', async ({ page }) => {
  const completedQuiz = page.getByRole('link', {
    name: `Basic HTML Quiz , ${translations.learn.completed} ${translations.learn['block-type'].quiz}`,
    exact: true
  });

  await test.step('Complete and submit the quiz', async () => {
    // Only quiz content is deterministic; submission uses the real API.
    await page.route(`**/page-data${quizPath}/page-data.json`, async route => {
      const response = await route.fetch();
      const pageData = (await response.json()) as QuizPageData;
      pageData.result.data.challengeNode.challenge.quizzes = quizFixture;
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(pageData)
      });
    });

    await page.goto(quizPath);
    const questions = page.getByRole('radiogroup');
    await expect(questions).toHaveCount(quizFixture[0].questions.length);
    for (const question of await questions.all()) {
      await question.getByRole('radio', { name: /Correct answer/ }).click();
    }
    await page
      .getByRole('button', { name: translations.buttons['finish-quiz'] })
      .click();
    await page
      .getByRole('button', { name: translations.learn.exam['finish-yes'] })
      .click();
    await page
      .getByRole('dialog')
      .getByRole('button', { name: translations.buttons['submit-and-go'] })
      .click();
  });

  await test.step('Land on the block and confirm completion', async () => {
    await expect(page).toHaveURL(quizBlockPath);
    await expect(completedQuiz).toBeVisible();
  });

  await test.step('Reload the block page', async () => {
    await page.reload();
  });

  await test.step('Assert the quiz is still complete', async () => {
    await expect(completedQuiz).toBeVisible();
  });
});
