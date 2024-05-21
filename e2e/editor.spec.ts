import { expect, test, type Page } from '@playwright/test';

async function focusEditor({
  page,
  isMobile,
  browserName
}: {
  page: Page;
  isMobile: boolean;
  browserName: string;
}) {
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
}

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
    // First clear the editor
    // TODO: replace with ControlOrMeta when it's supported
    if (browserName === 'webkit') {
      await page.keyboard.press('Meta+a');
    } else {
      await page.keyboard.press('Control+a');
    }
    await page.keyboard.press('Backspace');
    // Then enter invalid code
    await page.keyboard.insertText('def');
    const preview = page.getByTestId('preview-pane');

    // While it's displayed on multiple lines, the string itself has no newlines, hence:
    const error = `>>> Traceback (most recent call last):  File "main.py", line 1    def       ^SyntaxError: invalid syntax`;
    // It shouldn't take this long, but the Python worker can be slow to respond.
    await expect(preview).toContainText(error, { timeout: 15000 });
  });
});

test.describe('Editor theme if the system theme is dark', () => {
  test.use({ colorScheme: 'dark' });

  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );
  });

  test.describe('If the user is signed in', () => {
    test.use({ storageState: 'playwright/.auth/certified-user.json' });

    test('should be in dark mode if the user selected theme is dark', async ({
      page
    }) => {
      // Open the nav menu and toggle the theme
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      await expect(toggle).toBeVisible();
      const isDarkMode = await toggle.getAttribute('aria-pressed');

      if (isDarkMode === 'false') {
        const listItem = page.getByRole('listitem').filter({ has: toggle });

        // The button's click event is intercepted by the `li`,
        // so we need to click on the `li` to trigger the theme change action.
        await listItem.click();

        // Ensure that the action is completed before checking the editor.
        await expect(
          page.getByText('We have updated your theme')
        ).toBeVisible();
      }

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });

    test('should be in light mode if the user selected theme is light', async ({
      page
    }) => {
      // Open the nav menu and toggle the theme
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      await expect(toggle).toBeVisible();
      const isDarkMode = await toggle.getAttribute('aria-pressed');

      if (isDarkMode === 'true') {
        const listItem = page.getByRole('listitem').filter({ has: toggle });

        // The button's click event is intercepted by the `li`,
        // so we need to click on the `li` to trigger the theme change action.
        await listItem.click();

        // Ensure that the action is completed before checking the editor.
        await expect(
          page.getByText('We have updated your theme')
        ).toBeVisible();
      }

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs(?!\w)/);
    });
  });

  test.describe('If the user is signed out', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('should be in dark mode', async ({ page }) => {
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });
  });
});

test.describe('Editor theme if the system theme is light', () => {
  test.use({ colorScheme: 'light' });

  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );
  });

  test.describe('If the user is signed in', () => {
    test.use({ storageState: 'playwright/.auth/certified-user.json' });

    test('should be in dark mode if the user selected theme is dark', async ({
      page
    }) => {
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      await expect(toggle).toBeVisible();
      const isDarkMode = await toggle.getAttribute('aria-pressed');

      if (isDarkMode === 'false') {
        const listItem = page.getByRole('listitem').filter({ has: toggle });

        // The button's click event is intercepted by the `li`,
        // so we need to click on the `li` to trigger the theme change action.
        await listItem.click();

        // Ensure that the action is completed before checking the editor.
        await expect(
          page.getByText('We have updated your theme')
        ).toBeVisible();
      }

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });

    test('should be in light mode if the user selected theme is light', async ({
      page
    }) => {
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      await expect(toggle).toBeVisible();
      const isDarkMode = await toggle.getAttribute('aria-pressed');

      if (isDarkMode === 'true') {
        const listItem = page.getByRole('listitem').filter({ has: toggle });

        // The button's click event is intercepted by the `li`,
        // so we need to click on the `li` to trigger the theme change action.
        await listItem.click();

        // Ensure that the action is completed before checking the editor.
        await expect(
          page.getByText('We have updated your theme')
        ).toBeVisible();
      }

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs(?!\w)/);
    });
  });

  test.describe('If the user is signed out', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('should be in light mode', async ({ page }) => {
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs(?!\w)/);
    });
  });
});
