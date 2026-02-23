import { expect, test } from '@playwright/test';
import { clearEditor, focusEditor } from './utils/editor';

test.describe('Progress bar component in editor', () => {
  test('Should appear with the correct content after the user has submitted their code', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );
    // If focusEditor fails, typically it's because the instructions are too
    // large. There's a bug that means `scrollIntoView` does not work in the
    // editor and so we have to pick less verbose challenges until that's fixed.
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.keyboard.insertText(
      '<html><body><h1>CatPhotoApp</h1><h2>Cat Photos</h2><p>Everyone loves cute cats online!</p></body></html>'
    );

    await page.getByTestId('independentLowerJaw-check-button').click();

    const progressBarContainer = page.getByTestId('progress-bar-container');
    await expect(progressBarContainer).toContainText(
      'Learn HTML by Building a Cat Photo App'
    );
    await expect(progressBarContainer).toContainText(/\d% complete/);
    await page.getByRole('button', { name: 'Submit and continue' }).click();
  });
});

test.describe('Progress bar component in modal', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });
  test('should appear in the completion modal after user has submitted their code', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
    );
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.keyboard.insertText('var myName;');

    if (isMobile) {
      await page
        .getByRole('button', {
          name: 'Run',
          exact: false
        })
        .click();
    } else {
      await page.getByTestId('independentLowerJaw-check-button').click();
    }

    await expect(page.locator('.completion-block-meta')).toContainText(
      /\d% complete/
    );

    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  });
});
