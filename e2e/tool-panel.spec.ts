import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { getEditors } from './utils/editor';

test.describe('Tool Panel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript'
    );
  });
  test('should display "//running tests" in console after clicking "Run the Tests (Ctrl+Enter)" button', async ({
    page,
    isMobile
  }) => {
    await page
      .getByRole('button', {
        name: 'Run',
        exact: false
      })
      .click();

    if (isMobile) {
      await page
        .getByRole('tab', {
          name: 'Console'
        })
        .click();
    }

    await expect(page.getByTestId('output-text')).toContainText(
      translations.learn['running-tests']
    );
  });

  test('Displays a warning when the wrong source files are added', async function ({
    page,
    isMobile
  }) {
    await page.goto(
      '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-2'
    );
    const editor = getEditors(page);
    await editor.fill(
      '<link rel="stylesheet" type="text/css"  href="coolstyle.css">'
    );

    if (isMobile) {
      await page
        .getByRole('tab', {
          name: 'Console'
        })
        .click();
    } else {
      await page.getByText('Console').click();
    }

    await expect(page.getByTestId('output-text')).toContainText(
      'coolstyle.css does not exist. Only files that can be sourced are styles.css, script.js, or remote files'
    );
  });

  test('should display reset modal after clicking "Reset this lesson" button', async ({
    page,
    isMobile
  }) => {
    if (isMobile) {
      await page
        .getByRole('button', { name: translations.buttons['reset'] })
        .click();
    } else {
      await page
        .getByRole('button', { name: translations.buttons['reset-lesson'] })
        .click();
    }
    await expect(
      page.getByRole('heading', { name: translations.learn.reset })
    ).toBeVisible();
  });

  test('should display list with expected links after clicking "Get Help"', async ({
    page
  }) => {
    const expectedHelpLinks = [
      `${translations.buttons['get-hint']} , ${translations.aria['opens-new-window']}`,
      translations.buttons['watch-video'],
      translations.buttons['ask-for-help']
    ];
    const helpLinks = [];

    await page.getByTestId('get-help-dropdown').click();
    helpLinks.push(await page.getByTestId('get-hint').textContent());
    helpLinks.push(await page.getByTestId('watch-a-video').textContent());
    helpLinks.push(await page.getByTestId('ask-for-help').textContent());

    expect(helpLinks).toEqual(expectedHelpLinks);

    const hintLink = page.getByRole('menuitem', { name: 'Get a Hint' });
    await expect(hintLink).toHaveAttribute(
      'href',
      'https://forum.freecodecamp.org/t/18201'
    );
    await expect(hintLink).toHaveAttribute('target', '_blank');

    await page.getByRole('menuitem', { name: 'Ask for Help' }).click();
    await expect(
      page.getByRole('heading', {
        name: translations.buttons['ask-for-help'],
        exact: true
      })
    ).toBeVisible();

    // "Watch a Video" is done by "video-modal.spec.ts"
  });
});
