import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Should show the progress bar showing the completed percent on  challenges', () => {
  test('Should enter code in the editor and show the progress bar', async () => {
    const monacoEditor = page.locator(
      '.react-monaco-editor-container textarea'
    );
    await monacoEditor.click();

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    await page.keyboard.insertText(
      '<html><body><h1>CatPhotoApp</h1><h2>Cat Photos</h2></body></html>'
    );
    const lowerCheckButton = page.getByText('Check Your Code (Ctrl + Enter)');

    await lowerCheckButton.click({ force: true });
    const progressBarContanier = page.getByTestId('progress-bar-contanier');
    await expect(progressBarContanier).toContainText(
      'Learn HTML by Building a Cat Photo App'
    );
    await expect(progressBarContanier).toContainText('0% complete');
    const submitCheckButton = page.getByText('Submit and go to next challenge');
    await expect(submitCheckButton).toBeVisible();
  });
});
