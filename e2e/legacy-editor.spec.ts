import { test, expect } from './fixtures/isolated-user';

import translations from '../client/i18n/locales/english/translations.json';
import { focusEditor, getEditors } from './utils/editor';

test.use({ userPreset: 'certified' });

test.describe('Editor Shortcuts', () => {
  test('Should add a new line if the user presses Alt+Enter', async ({
    page,
    isMobile
  }) => {
    await page.goto(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    await focusEditor({ page, isMobile });

    const editor = getEditors(page);
    const editorLines = page
      .getByTestId('editor-container-indexhtml')
      .locator('.view-lines > .view-line');
    await expect(editorLines).toHaveText(['<h1>Hello</h1>']);
    await editor.press('End');

    await editor.press('Alt+Enter');
    await expect(editorLines).toHaveText(['<h1>Hello</h1>', '']);
  });

  test('Should not add a new line if the user presses Ctrl+Enter', async ({
    page,
    isMobile
  }) => {
    await page.goto(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    await focusEditor({ page, isMobile });

    const editor = getEditors(page);
    const editorLines = page
      .getByTestId('editor-container-indexhtml')
      .locator('.view-lines > .view-line');
    await expect(editorLines).toHaveText(['<h1>Hello</h1>']);
    await editor.press('End');

    await editor.press('Control+Enter');
    if (isMobile) {
      await page
        .getByRole('tab', {
          name: translations.learn['editor-tabs'].console,
          exact: true
        })
        .click();
    }
    await expect(page.getByTestId('output-text')).toContainText(
      translations.learn['tests-completed']
    );
    if (isMobile) {
      await focusEditor({ page, isMobile });
    }
    await expect(editorLines).toHaveText(['<h1>Hello</h1>']);
  });
});
