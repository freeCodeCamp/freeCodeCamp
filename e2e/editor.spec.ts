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

test.describe('Editor Component', () => {
  test('Should be clicked and able to insert text', async () => {
    const monacoEditor = page.getByLabel('Editor content');
    await monacoEditor.click();
    await page.keyboard.insertText('<h2>FreeCodeCamp</h2>');
    const text = page.getByText('<h2>FreeCodeCamp</h2>');
    await expect(text).toBeVisible();
  });
});
