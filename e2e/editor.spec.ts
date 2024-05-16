import { expect, test } from '@playwright/test';

import { clearEditor, focusEditor } from './utils/challenge-editor';

test.describe('Editor Component', () => {
  test('should allow the user to insert text', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );

    await focusEditor({ page, isMobile, browserName });
    await page.keyboard.insertText('<h2>FreeCodeCamp</h2>');
    const text = page.getByText('<h2>FreeCodeCamp</h2>');
    await expect(text).toBeVisible();
  });
});

test.describe('Python Terminal', () => {
  test('should display error message when the user enters invalid code', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      'learn/scientific-computing-with-python/learn-string-manipulation-by-building-a-cipher/step-2'
    );

    await focusEditor({ page, isMobile, browserName });
    await clearEditor({ page, browserName });
    // Then enter invalid code
    await page.keyboard.insertText('def');
    const preview = page.getByTestId('preview-pane');

    // While it's displayed on multiple lines, the string itself has no newlines, hence:
    const error = `Traceback (most recent call last):  File "main.py", line 1    def       ^SyntaxError: invalid syntax`;
    // It shouldn't take this long, but the Python worker can be slow to respond.
    await expect(preview).toContainText(error, { timeout: 15000 });
  });
});
