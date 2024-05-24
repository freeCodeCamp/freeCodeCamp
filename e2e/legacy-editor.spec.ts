import { test, expect } from '@playwright/test';
import { focusEditor } from './utils/editor';

test.describe('Editor Shortcuts', () => {
  test('Should handle Alt+Enter', async ({ page, isMobile, browserName }) => {
    await page.goto(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    await focusEditor({ page, isMobile, browserName });

    await page.keyboard.press('Control+Enter');
    await expect(
      page.getByTestId('editor-container-indexhtml').getByText('<h1>Hello</h1>')
    ).toBeVisible();
  });

  test('Should ignore Ctrl+Enter', async ({ page, isMobile, browserName }) => {
    await page.goto(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    await focusEditor({ page, isMobile, browserName });

    await page.keyboard.press('Control+Enter');
    await expect(
      page.getByTestId('editor-container-indexhtml').getByText('<h1>Hello</h1>')
    ).toBeVisible();
  });
});
