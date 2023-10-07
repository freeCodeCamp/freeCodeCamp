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

test.describe('Progress bar component', () => {
  test('Should appear with the correct content after the user has submitted their code', async () => {
    const monacoEditor = page.getByLabel('Editor content');
    await monacoEditor.click();
    await page.keyboard.press('Control+A');
    //Meta + A works in webkit
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    await page.keyboard.insertText(
      '<html><body><h1>CatPhotoApp</h1><h2>Cat Photos</h2></body></html>'
    );
    await page
      .getByRole('button', { name: 'Check Your Code (Ctrl + Enter)' })
      .click();

    const progressBarContainer = page.getByTestId('progress-bar-container');
    await expect(progressBarContainer).toContainText(
      'Learn HTML by Building a Cat Photo App'
    );
    await expect(progressBarContainer).toContainText('0% complete');
    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  });
});
