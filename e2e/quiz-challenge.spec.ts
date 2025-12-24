import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';
import { allowTrailingSlash } from './utils/url';

interface QuizQuestion {
  distractors: string[];
  text: string;
  answer: string;
}

interface Quiz {
  questions: QuizQuestion[];
}

interface PageData {
  result: {
    data: {
      challengeNode: {
        challenge: { quizzes: Quiz[] };
      };
    };
  };
}

const quizPath =
  '/learn/responsive-web-design-v9/quiz-basic-html/quiz-basic-html';

test.describe('Quiz challenge', () => {
  test.beforeEach(async ({ page }) => {
    const fixturePath = path.join(__dirname, 'fixtures', 'quiz-fixture.json');
    const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8')) as Quiz[];

    // Intercept Gatsby page-data and inject a deterministic quiz fixture
    await page.route(`**/page-data${quizPath}/page-data.json`, async route => {
      const response = await route.fetch();
      const body = await response.text();

      const pageData = JSON.parse(body) as PageData;
      pageData.result.data.challengeNode.challenge.quizzes = fixture;

      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(pageData)
      });
    });

    await page.goto(quizPath);
  });

  test('should display a list of unanswered questions if user has not answered all questions', async ({
    page
  }) => {
    // Wait for the page content to render
    await expect(page.getByRole('radiogroup')).toHaveCount(20);
    const radioGroups = await page.getByRole('radiogroup').all();

    // The radio label contents are rendered with `PrismFormatted`.
    // For accessibility we must ensure:
    // - The formatted content is wrapped in a `span`
    // - No ARIA role is added to `pre` elements
    const firstGroup = radioGroups[0];
    const spanLabel = firstGroup.locator('span.quiz-answer-label');
    await expect(spanLabel).toHaveCount(4);

    const preWithRole = firstGroup.locator('pre[role]');
    await expect(preWithRole).toHaveCount(0);

    for (let i = 0; i < 15; i++) {
      const radioGroups = await page.getByRole('radiogroup').all();
      await radioGroups[i].getByRole('radio').first().click();
    }

    await page.getByRole('button', { name: 'Finish the quiz' }).click();

    await expect(
      page.getByText(
        'The following questions are unanswered: 16, 17, 18, 19, 20. You must answer all questions.'
      )
    ).toBeVisible();
  });

  test('should allow user to complete the block when they pass the quiz', async ({
    page
  }) => {
    test.setTimeout(20000);

    // Wait for the page content to render
    await expect(page.getByRole('radiogroup')).toHaveCount(20);

    const radioGroups = await page.getByRole('radiogroup').all();

    // Answer 18 questions correctly.
    // This is enough to pass the quiz, and also allowing us to test the quiz passing criteria.
    for (let i = 0; i < radioGroups.length; i++) {
      const group = radioGroups[i];
      const correct = group.getByRole('radio', { name: /Correct answer/i });
      const wrong = group.getByRole('radio', { name: /Wrong 1/i });
      if (i <= 17) {
        await correct.click();
      } else {
        await wrong.click();
      }
    }

    await page.getByRole('button', { name: 'Finish the quiz' }).click();
    await page.getByRole('button', { name: 'Yes, I am finished' }).click();

    // Wait for the finish quiz modal to close
    await expect(
      page.getByRole('dialog', { name: 'Finish Quiz' })
    ).toBeHidden();

    // Check that the completion modal shows up
    await expect(
      page
        .getByRole('dialog')
        .filter({ has: page.getByRole('button', { name: /submit and go/i }) })
    ).toBeVisible();

    await page
      .getByRole('dialog')
      .getByRole('button', { name: /close/i })
      .click();

    // Wait for the completion modal to close
    await expect(page.getByRole('dialog')).toBeHidden();

    // If the user closes the modal without submitting,
    // the finish quiz button is replaced by the submit one.
    await expect(
      page.getByRole('button', { name: 'Finish the quiz' })
    ).toBeHidden();
    await expect(
      page.getByRole('button', { name: /submit and go/i })
    ).toBeVisible();

    await expect(
      page.getByText('You have 18 out of 20 questions correct.')
    ).toBeVisible();

    // Confirm that all options are disabled.
    // We do this by finding all of the disabled radio elements on the page,
    // and check if the count matches the total number of quiz answers (4 answers x 20 questions).
    // This approach is much faster than querying each radio on the page and check if they are disabled.
    await expect(
      page.locator("[role='radio'][aria-disabled='true']")
    ).toHaveCount(4 * 20);
  });

  test("should not allow user to complete the block when they don't pass the quiz", async ({
    page
  }) => {
    test.setTimeout(20000);

    // Wait for the page content to render
    await expect(page.getByRole('radiogroup')).toHaveCount(20);

    const radioGroups = await page.getByRole('radiogroup').all();

    // Answer only 10 questions correctly.
    for (let i = 0; i < radioGroups.length; i++) {
      const group = radioGroups[i];
      const correct = group.getByRole('radio', { name: /Correct answer/i });
      const wrong = group.getByRole('radio', { name: /Wrong 1/i });
      if (i <= 9) {
        await correct.click();
      } else {
        await wrong.click();
      }
    }

    await page.getByRole('button', { name: 'Finish the quiz' }).click();
    await page.getByRole('button', { name: 'Yes, I am finished' }).click();

    // Wait for the finish quiz modal to close
    await expect(
      page.getByRole('dialog', { name: 'Finish Quiz' })
    ).toBeHidden();

    await expect(
      page.getByText('You have 10 out of 20 questions correct.')
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Finish the quiz' })
    ).toBeDisabled();

    // Confirm that all options are disabled.
    // We do this by finding all of the disabled radio elements on the page,
    // and check if the count matches the total number of quiz answers (4 answers x 20 questions).
    // This approach is much faster than querying each radio on the page and check if they are disabled.
    await expect(
      page.locator("[role='radio'][aria-disabled='true']")
    ).toHaveCount(4 * 20);
  });

  test('should show a confirm exit modal when user clicks on the exit button', async ({
    page
  }) => {
    // Wait for the page content to render
    await expect(page.getByRole('radiogroup')).toHaveCount(20);

    await page.getByRole('button', { name: 'Exit the quiz' }).click();

    // The navigation should be blocked, the user should stay on the same page
    await expect(page).toHaveURL(
      allowTrailingSlash(
        '/learn/responsive-web-design-v9/quiz-basic-html/quiz-basic-html'
      )
    );

    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('dialog', { name: 'Exit Quiz' })).toBeVisible();

    await page
      .getByRole('button', { name: 'No, I would like to continue the quiz' })
      .click();
    await expect(page.getByRole('dialog', { name: 'Exit Quiz' })).toBeHidden();

    await page.getByRole('button', { name: 'Exit the quiz' }).click();
    await expect(page.getByRole('dialog', { name: 'Exit Quiz' })).toBeVisible();
    await page
      .getByRole('button', { name: 'Yes, I want to leave the quiz' })
      .click();

    await page.waitForURL('/learn/responsive-web-design-v9/#quiz-basic-html');
    await expect(
      page.getByRole('heading', { level: 3, name: 'Basic HTML Quiz' })
    ).toBeVisible();
  });

  test('should show a confirm exit modal when user clicks on a link', async ({
    page
  }) => {
    // Wait for the page content to render
    await expect(page.getByRole('radiogroup')).toHaveCount(20);

    await page.getByRole('link', { name: 'Basic HTML Quiz' }).click();

    await expect(page.getByRole('dialog', { name: 'Exit Quiz' })).toBeVisible();
    await page
      .getByRole('button', { name: 'Yes, I want to leave the quiz' })
      .click();

    await page.waitForURL('/learn/responsive-web-design-v9/#quiz-basic-html');
    await expect(
      page.getByRole('heading', { level: 3, name: 'Basic HTML Quiz' })
    ).toBeVisible();
  });

  test('should show a confirm exit modal when user closes the page', async ({
    page
  }) => {
    // Wait for the page content to render
    await expect(page.getByRole('radiogroup')).toHaveCount(20);

    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('beforeunload');
      await dialog.dismiss();
    });

    await page.close({ runBeforeUnload: true });
  });
});
