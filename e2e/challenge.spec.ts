import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { clearEditor, focusEditor, getEditors } from './utils/editor';

test.describe('when reloading the page', () => {
  test.beforeEach(async ({ page }) => {
    const pageUsingEditableRegionInTests =
      '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-14';
    await page.goto(pageUsingEditableRegionInTests);
  });
  // This is quite brittle. If it breaks, try to come up with a unit test instead.

  test('should keep the editable content for testing', async ({
    page,
    isMobile,
    browserName
  }) => {
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });
    const solution = `h1, h2, p {
  text-align: center;
}`;

    await getEditors(page).fill(solution);
    const editorTextLocator = page
      .getByTestId('editor-container-stylescss')
      .getByText(solution);
    await expect(editorTextLocator).toBeVisible();

    // save the code
    await page.keyboard.down('Control');
    await page.keyboard.press('S');

    await page.reload();

    await expect(editorTextLocator).toBeVisible();

    // check the tests pass
    await page.keyboard.down('Control');
    await page.keyboard.press('Enter');

    await expect(
      page.getByText(translations.learn.congratulations)
    ).toBeVisible();
  });
});
