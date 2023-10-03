import { test, expect } from '@playwright/test';

test.describe('Should show the progress bar showing the completed percent on  challenges', () => {
  test('Should enter code in the editor and show the progress bar', async ({
    page
  }) => {
    test.slow();
    await page.goto(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
    );
    const lowerCheckButton = page.getByText('Check Your Code (Ctrl + Enter)');

    const monacoEditor = page.locator(
      '.react-monaco-editor-container textarea'
    );
    await monacoEditor.click();
    await monacoEditor.focus();
    await page.keyboard.press('Control+KeyA');
    await monacoEditor.clear();
    await page.keyboard.type(
      '<html><body><h1>CatPhotoApp</h1><h2>Cat Photos</h2></body></html>'
    );
    await lowerCheckButton.click();

    const progressBarContanier = page.getByTestId('progress-bar-contanier');
    await expect(progressBarContanier).toContainText(
      'Learn HTML by Building a Cat Photo App'
    );
    await expect(progressBarContanier).toContainText('0% complete');
    const submitCheckButton = page.getByText('Submit and go to next challenge');
    await expect(submitCheckButton).toBeVisible();
  });
});
