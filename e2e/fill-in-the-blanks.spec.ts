import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';

interface FillInTheBlank {
  sentence: string;
  blanks: Array<{
    answer: string;
    feedback: string | null;
  }>;
}

interface Fixture extends FillInTheBlank {
  explanation?: string;
}

interface PageData {
  result: {
    data: {
      challengeNode: {
        challenge: {
          fillInTheBlank: FillInTheBlank;
          explanation?: string;
        };
      };
    };
  };
}

const challengePath =
  '/learn/a2-english-for-developers/learn-greetings-in-your-first-day-at-the-office/task-47';

test.describe('Fill in the blanks challenge', () => {
  test.beforeEach(async ({ page }) => {
    const fixturePath = path.join(
      __dirname,
      'fixtures',
      'fill-in-the-blank-fixture.json'
    );
    const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8')) as Fixture;

    // Intercept Gatsby page-data and inject a deterministic fill-in-the-blank fixture
    await page.route(
      `**/page-data${challengePath}/page-data.json`,
      async route => {
        const response = await route.fetch();
        const body = await response.text();

        const pageData = JSON.parse(body) as PageData;
        pageData.result.data.challengeNode.challenge.fillInTheBlank = {
          sentence: fixture.sentence,
          blanks: fixture.blanks
        };
        pageData.result.data.challengeNode.challenge.explanation =
          fixture.explanation;

        await route.fulfill({
          contentType: 'application/json',
          body: JSON.stringify(pageData)
        });
      }
    );

    await page.goto(challengePath);
  });

  test('should display feedback if there is an incorrect answer', async ({
    page
  }) => {
    const blanks = page.getByRole('textbox', { name: 'blank' });

    await blanks.first().fill('foo'); // Answer the first blank correctly
    await blanks.last().fill('wrong'); // Answer the second blank incorrectly
    await page.getByRole('button', { name: 'Check your answer' }).click();

    await expect(
      page.getByText("Sorry, that's not the right answer. Give it another try?")
    ).toBeVisible();

    // Once a blank is answered correctly, it is no longer rendered as an input field
    await expect(blanks).toHaveCount(1);

    await expect(blanks.last()).toHaveAttribute('aria-invalid', 'true');
  });

  test('should not display feedback if all blanks are answered correctly', async ({
    page
  }) => {
    const blanks = page.getByRole('textbox', { name: 'blank' });

    await blanks.first().fill('foo');
    await blanks.last().fill('bar');
    await page.getByRole('button', { name: 'Check your answer' }).click();

    // Close the completion modal
    await page
      .getByRole('dialog')
      .getByRole('button', { name: 'Close' })
      .click();

    await expect(
      page.getByText("Sorry, that's not the right answer. Give it another try?")
    ).toBeHidden();

    // There aren't any blanks as all the inputs are rendered as text
    await expect(blanks).toBeHidden();
  });

  test('should expand explanation when input is non-whitespace', async ({
    page
  }) => {
    const blanks = page.getByRole('textbox', { name: 'blank' });
    const explanationDetails = page.locator(
      'details:has(summary:has-text("Explanation"))'
    );

    // Fill with only spaces
    await blanks.first().fill('   ');
    await expect(explanationDetails).not.toHaveAttribute('open', '');

    // Fill with non-whitespace
    await blanks.first().fill('foo');
    await expect(explanationDetails).toHaveAttribute('open', '');
  });
});
