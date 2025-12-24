import { test, expect } from '@playwright/test';

import { clearEditor, focusEditor, getEditors } from './utils/editor';
import solution from './fixtures/learn-basic-css-by-building-a-cafe-menu-15.json';
import { isMacOS } from './utils/user-agent';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-15'
  );
});

test.describe('MultifileEditor Component', () => {
  test('Multiple editors should be selected and able to insert text into', async ({
    page
  }) => {
    // Spawn second editor to test MultifileEditor component
    const stylesEditor = page.getByRole('button', {
      name: 'styles.css Editor'
    });
    await stylesEditor.click();

    // Use the `.toHaveCount()` assertion to ensure that the second editor is on the screen
    // before moving onto other assertions.
    // Note that using the `.all()` locator here would result a flaky test.
    // Ref: https://github.com/freeCodeCamp/freeCodeCamp/pull/53031/files#r1500316812
    const editors = getEditors(page);
    await expect(editors).toHaveCount(2);

    const test_string = 'TestString';
    let index = 0;
    for (const editor of await editors.all()) {
      await editor.focus();
      await page.keyboard.insertText(test_string + index.toString());
      const text = page.getByText(test_string + index.toString());
      await expect(text).toBeVisible();
      index++;
    }
  });

  test('Reloading should preserve the editor layout', async ({
    page,
    isMobile
  }) => {
    test.skip(
      isMobile,
      'The mobile layout does not have resizable panes, so this test is not applicable.'
    );

    const desktopLayout = page.getByTestId('desktop-layout');
    const splitter = desktopLayout.getByTestId('preview-left-splitter');
    const editorPane = desktopLayout.getByTestId('editor-pane');
    const initialStyle = await editorPane.getAttribute('style');
    expect(initialStyle).toContain('flex: 1');

    // Drag the splitter to resize the editor pane
    await splitter.hover();
    await page.mouse.down();
    await page.mouse.move(100, 100);
    await page.mouse.up();

    const newStyle = await editorPane.getAttribute('style');
    // It doesn't matter where it's dragged to, just that it's different:
    expect(newStyle).not.toContain('flex: 1');

    await page.reload();

    expect(await editorPane.getAttribute('style')).toBe(newStyle);
  });

  test('Multiple open editors should remain open on moving to next challenge', async ({
    page,
    isMobile,
    browserName,
    context
  }) => {
    test.skip(
      browserName !== 'chromium',
      'Only chromium allows us to use the clipboard API.'
    );
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.evaluate(
      async solution => await navigator.clipboard.writeText(solution.content),
      solution
    );

    if (isMacOS) {
      await page.keyboard.press('Meta+v');
    } else {
      await page.keyboard.press('Control+v');
    }

    const stylesEditor = page.getByRole('button', {
      name: 'styles.css Editor'
    });
    await stylesEditor.click();
    const editorsCurrentPage = getEditors(page);
    await expect(editorsCurrentPage).toHaveCount(2);

    await page.keyboard.press('Control+Enter');

    const submitButton = page.getByRole('button', {
      name: 'Submit and go to next challenge'
    });

    // Mobile screen shifts submit button out of view and Playwright fails at scrolling with multiple editors open
    if (isMobile) {
      await submitButton.dispatchEvent('click');
    } else {
      await submitButton.click();
    }

    const editorsNextPage = getEditors(page);
    await expect(editorsNextPage).toHaveCount(2);
  });
});
