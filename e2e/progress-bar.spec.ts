import { expect, test, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );
});

test.describe('Progress bar component', () => {
  test('Should appear with the correct content after the user has submitted their code', async ({
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

    await page.keyboard.press('Control+A');
    //Meta + A works in webkit
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    await page.keyboard.insertText(
      '<html><body><h1>CatPhotoApp</h1><h2>Cat Photos</h2></body></html>'
    );

    if (isMobile) {
      await page
        .getByRole('button', { name: translations.buttons['check-code-2'] })
        .click();
    } else {
      await page
        .getByRole('button', { name: translations.buttons['check-code'] })
        .click();
    }

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
