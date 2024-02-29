import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );
});

test.describe('Editor Component', () => {
  test('should allow the user to insert text', async ({
    page,
    isMobile,
    browserName
  }) => {
    const monacoEditor = page.getByLabel('Editor content');

    // The editor has an overlay div, which prevents the click event from bubbling up in iOS Safari.
    // This is a quirk in this browser-OS combination, and the workaround here is to use `.focus()`
    // in place of `.click()` to focus on the editor.
    // Ref: https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if (isMobile && browserName === 'webkit') {
      await monacoEditor.focus();
    } else {
      await monacoEditor.click();
    }
    await page.keyboard.insertText('<h2>FreeCodeCamp</h2>');
    const text = page.getByText('<h2>FreeCodeCamp</h2>');
    await expect(text).toBeVisible();
  });
});
