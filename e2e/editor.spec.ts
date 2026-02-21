import { APIRequestContext, Page, expect, test } from '@playwright/test';

import { clearEditor, focusEditor, getEditors } from './utils/editor';
import { authedRequest } from './utils/request';

const setTheme = async (
  request: APIRequestContext,
  theme: 'default' | 'night'
) =>
  authedRequest({
    request,
    endpoint: '/update-my-theme',
    method: 'put',
    data: {
      theme
    }
  });

const testPage =
  '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3';

const openPythonTerminal = async (page: Page, isMobile: boolean) => {
  if (isMobile) {
    const previewTab = page.getByRole('tab', { name: 'Preview' });
    if ((await previewTab.count()) > 0) await previewTab.click();
  } else {
    const terminalButton = page.getByRole('button', { name: 'Terminal' });
    if ((await terminalButton.count()) > 0) {
      await terminalButton.first().click();
    }
  }

  await expect(
    page.getByTestId('xterm-terminal').locator('.xterm-rows').first()
  ).toBeVisible();
};

const runPythonCode = async (page: Page) => {
  const runCodeButton = page.getByRole('button', {
    name: 'Run Code',
    exact: true
  });
  await expect(runCodeButton.first()).toBeVisible();
  await runCodeButton.first().click();
};

const clickCheckYourCode = async (page: Page) => {
  const checkButtonByTestId = page.getByTestId('lowerJaw-check-button');
  if ((await checkButtonByTestId.count()) > 0) {
    await expect(checkButtonByTestId.first()).toBeVisible();
    await checkButtonByTestId.first().click();
    return;
  }

  const checkButtonByName = page.getByRole('button', {
    name: /Check Your Code/i
  });
  await expect(checkButtonByName.first()).toBeVisible();
  await checkButtonByName.first().click();
};

test.describe('Editor Component', () => {
  test('should allow the user to insert text', async ({ page, isMobile }) => {
    await page.goto(testPage);

    await focusEditor({ page, isMobile });
    await page.keyboard.insertText('<h2>FreeCodeCamp</h2>');
    const text = page.getByText('<h2>FreeCodeCamp</h2>');
    await expect(text).toBeVisible();
  });
});

test.describe('Python Terminal', () => {
  test('should show Cancel while code is running and switch back to Run Code when done', async ({
    page,
    browserName,
    isMobile
  }) => {
    await page.goto(
      'learn/scientific-computing-with-python/learn-string-manipulation-by-building-a-cipher/step-2'
    );

    // Enter a medium-heavy one-liner so we can observe the running state.
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName, isMobile });
    await getEditors(page).fill('sum(x * x for x in range(120_000_000))');

    await openPythonTerminal(page, isMobile);

    const runCodeButton = page.getByRole('button', {
      name: 'Run Code',
      exact: true
    });
    const cancelButton = page.getByRole('button', {
      name: 'Cancel',
      exact: true
    });

    await expect(runCodeButton).toBeVisible();
    await runPythonCode(page);

    await expect(cancelButton).toBeVisible({ timeout: 10000 });
    await expect(runCodeButton).toBeVisible({ timeout: 45000 });
  });

  test('should switch back to Run Code after clicking Cancel', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      'learn/scientific-computing-with-python/learn-string-manipulation-by-building-a-cipher/step-2'
    );

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName, isMobile });
    await getEditors(page).fill('while True: pass');

    await openPythonTerminal(page, isMobile);
    const runCodeButton = page.getByRole('button', {
      name: 'Run Code',
      exact: true
    });
    const cancelButton = page.getByRole('button', {
      name: 'Cancel',
      exact: true
    });

    await expect(runCodeButton).toBeVisible();
    await runPythonCode(page);
    await expect(cancelButton).toBeVisible({ timeout: 10000 });
    await cancelButton.click();
    await expect(runCodeButton).toBeVisible({ timeout: 10000 });
    await expect(cancelButton).toHaveCount(0);
  });

  test('should execute Python in terminal when Check Your Code is clicked', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      'learn/scientific-computing-with-python/learn-string-manipulation-by-building-a-cipher/step-2'
    );

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName, isMobile });
    await getEditors(page).fill('while True: pass');

    await openPythonTerminal(page, isMobile);

    const runCodeButton = page.getByRole('button', {
      name: 'Run Code',
      exact: true
    });
    const cancelButton = page.getByRole('button', {
      name: 'Cancel',
      exact: true
    });

    await expect(runCodeButton).toBeVisible();
    await clickCheckYourCode(page);
    await expect(cancelButton).toBeVisible({ timeout: 10000 });
    await cancelButton.click();
    await expect(runCodeButton).toBeVisible({ timeout: 10000 });
  });

  test('should display a syntax error when invalid code is run', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      'learn/scientific-computing-with-python/learn-string-manipulation-by-building-a-cipher/step-2'
    );

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName, isMobile });
    await getEditors(page).fill('if True print("x")');

    await openPythonTerminal(page, isMobile);
    const consoleMessages: string[] = [];
    const onConsole = (message: { text: () => string }) => {
      consoleMessages.push(message.text());
    };
    page.on('console', onConsole);
    await runPythonCode(page);

    try {
      await expect
        .poll(
          async () => {
            const terminalOutput =
              (await page
                .locator(
                  '[data-playwright-test-label="xterm-terminal"] [role="region"][aria-label="Terminal output"]'
                )
                .textContent()) ?? '';
            const terminalRows =
              (await page
                .locator(
                  '[data-playwright-test-label="xterm-terminal"] .xterm-rows'
                )
                .textContent()) ?? '';
            return `${terminalOutput}\n${terminalRows}\n${consoleMessages.join('\n')}`;
          },
          {
            timeout: 20000
          }
        )
        .toContain('SyntaxError');
    } finally {
      page.off('console', onConsole);
    }
  });
});

test.describe('Editor theme if the system theme is dark', () => {
  test.use({ colorScheme: 'dark' });

  test.describe('If the user is signed in', () => {
    test('should respect the user settings', async ({ page, request }) => {
      const editor = page.locator("div[role='code'].monaco-editor");

      await setTheme(request, 'night');
      await page.goto(testPage);

      await expect(editor).toHaveClass(/vs-dark/);

      await setTheme(request, 'default');
      await page.reload();

      await expect(editor).toHaveClass(/vs(?!\w)/);
    });
  });

  test.describe('If the user is signed out and has no local storage data', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('should be in dark mode', async ({ page }) => {
      await page.goto(testPage);
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });
  });

  test.describe('if the user is signed out and has a dark theme set in local storage', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('should be in dark mode', async ({ page }) => {
      // go to the test page
      await page.goto(testPage);

      // set the dark theme in local storage
      await page.evaluate(() => {
        localStorage.setItem('theme', 'dark');
      });

      // reload the page to apply the local storage changes
      await page.reload();

      // check if the editor is in dark mode
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });
  });
});

test.describe('Editor theme if the system theme is light', () => {
  test.use({ colorScheme: 'light' });

  test.describe('If the user is signed in', () => {
    test('should respect the user settings', async ({ page, request }) => {
      const editor = page.locator("div[role='code'].monaco-editor");

      await setTheme(request, 'night');
      await page.goto(testPage);

      await expect(editor).toHaveClass(/vs-dark/);

      await setTheme(request, 'default');
      await page.reload();

      await expect(editor).toHaveClass(/vs(?!\w)/);
    });

    // This should be true for both system themes, but we're only testing light mode to save time.
    test('should switch the editor theme when the user toggles the theme', async ({
      page,
      request
    }) => {
      await setTheme(request, 'default');
      await page.goto(testPage);
      // Open the nav menu and toggle the theme
      await page.getByRole('button', { name: 'Menu' }).click();

      const toggle = page.getByRole('button', { name: 'Night Mode' });
      await expect(toggle).toBeVisible();

      const listItem = toggle.locator('xpath=ancestor::li[1]');
      if ((await listItem.count()) > 0) {
        await listItem.click();
      } else {
        await toggle.click();
      }

      // Ensure that the action is completed before checking the editor.
      await expect(page.getByText('We have updated your theme')).toBeVisible();

      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs-dark/);
    });
  });

  test.describe('If the user is signed out and has no local storage value', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('should be in light mode', async ({ page }) => {
      await page.goto(testPage);
      const editor = page.locator("div[role='code'].monaco-editor");
      await expect(editor).toHaveClass(/vs(?!\w)/);
    });

    test.describe('if the user is signed out and has a light theme set in local storage', () => {
      test.use({ storageState: { cookies: [], origins: [] } });

      test('should be in light mode', async ({ page }) => {
        // go to the test page
        await page.goto(testPage);

        // set the light theme in local storage
        await page.evaluate(() => {
          localStorage.setItem('theme', 'light');
        });

        // reload the page to apply the local storage changes
        await page.reload();

        // check if the editor is in light mode
        const editor = page.locator("div[role='code'].monaco-editor");
        await expect(editor).toHaveClass(/vs(?!\w)/);
      });
    });
  });
});
