import { expect, test } from '@playwright/test';
test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.describe('Progress bar component', () => {
  test('Should appear with the correct content after the user has submitted their code', async ({
    page
  }) => {
    await page.goto(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
    );

    const monacoEditor = page.getByLabel('Editor content');

    // Using focus instead of click since we're not testing if the editor
    // behaves correctly, we're using it to complete the challenge.
    await monacoEditor.focus();
    await page.keyboard.press('Control+A');
    //Meta + A works in webkit
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    await page.keyboard.insertText(
      '<html><body><h1>CatPhotoApp</h1><h2>Cat Photos</h2></body></html>'
    );

    await page.getByRole('button', { name: 'Check Your Code' }).click();

    const progressBarContainer = page.getByTestId('progress-bar-container');
    await expect(progressBarContainer).toContainText(
      'Learn HTML by Building a Cat Photo App'
    );
    await expect(progressBarContainer).toContainText('0% complete');
    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  });

  test('should appear in the completion modal after user has submitted their code', async ({
    page
  }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
    );

    const monacoEditor = page.getByLabel('Editor content');
    await monacoEditor.focus();

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    await page.keyboard.insertText('var myName;');

    await page
      .getByRole('button', { name: 'Run the Tests (Ctrl + Enter)' })
      .click();

    await expect(page.locator('.completion-block-meta')).toContainText(
      '99% complete'
    );

    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  });
});
