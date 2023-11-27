import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Tool Panel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript'
    );
  });
  test('should display "//running tests" in console after clicking "Run the Tests (Ctrl+Enter)" button', async ({
    page
  }) => {
    await page
      .getByRole('button', {
        name: 'Run the Test'
      })
      .click();

    await expect(page.getByTestId('output-text')).toContainText(
      translations.learn['running-tests']
    );
  });

  test('should display reset modal after clicking "Reset this lesson" button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons['reset-lesson'] })
      .click();

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
  });

  // "Watch a Video" is done by "video-modal.spec.ts"
  test('check the buttons in "Get Help" dropdown except "Watch a Video"', async ({
    page
  }) => {
    await page.getByTestId('get-help-dropdown').click();

    const hintButton = page.getByTestId('get-hint');
    const browserContext = page.context();
    const [newPage] = await Promise.all([
      browserContext.waitForEvent('page'),
      hintButton.click()
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(
      'https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-increment-a-number-with-javascript/18201'
    );
    await newPage.close();

    await page.getByTestId('ask-for-help').click();
    await expect(
      page.getByRole('heading', {
        name: translations.buttons['ask-for-help'],
        exact: true
      })
    ).toBeVisible();
  });
});
