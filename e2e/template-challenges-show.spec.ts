import { test, expect } from './fixtures/isolated-user';

import translations from '../client/i18n/locales/english/translations.json';

const challengeURL =
  '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code';
const nextChallengeURL =
  '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/store-and-retrieve-data-using-literal-and-variable-values-in-c-sharp';

test.use({ userPreset: 'development' });

test.describe('Template Challenges Show', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(challengeURL);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('saves completion after the user completes the assignment and answers the quiz correctly', async ({
    page
  }) => {
    const completedIcon = page
      .locator('.challenge-title')
      .getByLabel(translations.icons.passed, { exact: true });
    await expect(
      page.getByRole('heading', {
        name: 'Write Your First C# Code',
        exact: true
      })
    ).toBeVisible();
    await expect(completedIcon).not.toBeVisible();

    // Tick the assignment box
    await page.getByRole('checkbox').check();

    // Find and click the third quiz option, which is the correct answer.
    // Set `force: true` to bypass Playwright's check
    // as the radio is visually hidden and the click event is intercepted by the `span` element.
    await page.getByRole('radio').nth(2).check({ force: true });

    await page
      .getByRole('button', { name: translations.buttons['check-answer'] })
      .click();

    await expect(
      page.getByText(translations.learn['assignment-not-complete_one'])
    ).not.toBeVisible();

    await expect(
      page.getByText(translations.learn['assignment-not-complete_other'])
    ).not.toBeVisible();

    await expect(
      page.getByText(translations.learn['wrong-answer'])
    ).not.toBeVisible();

    const completionDialog = page.getByRole('dialog').filter({
      has: page.getByTestId('completion-success-icon')
    });
    await expect(completionDialog).toBeVisible();
    await completionDialog
      .getByRole('button', {
        name: translations.buttons['submit-and-go']
      })
      .click();
    await expect(page).toHaveURL(nextChallengeURL);

    // A full page load must restore the saved completion from the server.
    await page.goto(challengeURL);
    await expect(completedIcon).toBeVisible();
  });
});
