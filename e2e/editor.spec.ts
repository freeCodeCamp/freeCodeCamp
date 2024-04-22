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

test.describe('Editor theme', () => {
  test.describe('If the user is signed in', () => {
    test.use({ storageState: 'playwright/.auth/certified-user.json' });

    test('should be in dark mode if the user selected theme is dark', async ({
      page
    }) => {
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      const isDarkMode = await toggle.getAttribute('aria-pressed');

      if (isDarkMode === 'false') {
        const listItem = page.getByRole('listitem').filter({ has: toggle });

        // The button's click event is intercepted by the `li`,
        // so we need to click on the `li` to trigger the theme change action.
        await listItem.click();
      }

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });

    test('should be in light mode if the user selected theme is light', async ({
      page
    }) => {
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      const isDarkMode = await toggle.getAttribute('aria-pressed');

      if (isDarkMode === 'true') {
        const listItem = page.getByRole('listitem').filter({ has: toggle });

        // The button's click event is intercepted by the `li`,
        // so we need to click on the `li` to trigger the theme change action.
        await listItem.click();
      }

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs(?!\w)/);
    });
  });

  test.describe('If the user is signed out and the system theme is dark', () => {
    test.use({
      storageState: { cookies: [], origins: [] },
      colorScheme: 'dark'
    });

    test('should be in dark mode', async ({ page }) => {
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });
  });

  test.describe('If the user is signed out and the system theme is light', () => {
    test.use({
      storageState: { cookies: [], origins: [] },
      colorScheme: 'light'
    });

    test('should be in light mode', async ({ page }) => {
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs(?!\w)/);
    });
  });
});
