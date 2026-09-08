import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

import translations from '../client/i18n/locales/english/translations.json';
import { test, expect } from './fixtures/isolated-user';
import quizFixture from './fixtures/quiz-fixture.json';
import { allowTrailingSlash } from './utils/url';

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';
const coursePath = '/learn/javascript-v9';
const quizPath = `${coursePath}/quiz-javascript-loops/quiz-javascript-loops`;
const quizBlockPath = `${coursePath}/#quiz-javascript-loops`;
const nextChallengePath = `${coursePath}/lecture-working-with-types-and-objects/what-is-a-string-object-and-how-does-it-differ-from-string-primitive`;
const quizId = '66edcd49e73385dd4df54ac7';
const reviewId = '6723c837cd3276aa73e6da25';

interface QuizPageData {
  result: {
    data: {
      challengeNode: {
        challenge: { quizzes: typeof quizFixture };
      };
    };
  };
}

test('Continue Learning skips a completed quiz after resubmission and reload', async ({
  page
}) => {
  const completedQuiz = page.getByRole('link', {
    name: `JavaScript Loops Quiz , ${translations.learn.completed} ${translations.learn['block-type'].quiz}`,
    exact: true
  });
  const continueLearning = page.getByRole('link', {
    name: translations.misc['continue-learning'],
    exact: true
  });

  await test.step('Complete the quiz before the preceding review', async () => {
    const csrfToken = (await page.request.storageState()).cookies.find(
      cookie => cookie.name === 'csrf_token'
    )?.value;
    expect(csrfToken).toBeTruthy();

    // Earlier lessons remain incomplete: resuming should still move forward.
    const completionDates: number[] = [];
    for (const data of [
      { id: quizId, challengeType: challengeTypes.quiz },
      { id: reviewId, challengeType: challengeTypes.review }
    ]) {
      const response = await page.request.post(
        new URL('/modern-challenge-completed', apiLocation).toString(),
        { data, headers: { 'csrf-token': csrfToken! } }
      );
      expect(response.status()).toBe(200);
      const completion = (await response.json()) as { completedDate: number };
      completionDates.push(completion.completedDate);
    }
    expect(completionDates[1]).toBeGreaterThan(completionDates[0]);
  });

  await test.step('Resubmit the quiz through the real API', async () => {
    // Only the questions are replaced; progress is saved by the real API.
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
    const submission = page.waitForResponse(
      response =>
        response.url() ===
          new URL(
            '/encoded/modern-challenge-completed',
            apiLocation
          ).toString() && response.request().method() === 'POST'
    );
    await page
      .getByRole('dialog')
      .getByRole('button', { name: translations.buttons['submit-and-go'] })
      .click();
    const response = await submission;
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({ alreadyCompleted: true });
  });

  await test.step('Continue Learning points to the next incomplete lesson', async () => {
    await expect(page).toHaveURL(quizBlockPath);
    await expect(completedQuiz).toBeVisible();
    await expect(continueLearning).toHaveAttribute('href', nextChallengePath);
  });

  await test.step('Reload and follow Continue Learning', async () => {
    // Reload restores the quiz's original completion date, older than the review.
    await page.reload();
    await expect(completedQuiz).toBeVisible();
    await expect(continueLearning).toHaveAttribute('href', nextChallengePath);
    await continueLearning.click();
    await expect(page).toHaveURL(allowTrailingSlash(nextChallengePath));
  });
});
