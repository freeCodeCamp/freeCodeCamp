import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const outputTexts = {
  default: `
  /**
  * Your test output will go here
  */`,

  final: `// running tests
  You should declare myName with the var keyword, ending with a semicolon
  // tests completed`
};

test.beforeEach(async ({ page, isMobile }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
  );
  if (isMobile) {
    await page
      .getByRole('tab', { name: translations.learn['editor-tabs'].code })
      .click();
  }
  await page.keyboard.press('Escape');
});

test.describe('Challenge Hotkeys Component Tests', () => {
  test('pressing CTRL + Enter should run the code', async ({
    page,
    isMobile
  }) => {
    if (isMobile) {
      await page
        .getByRole('tab', { name: translations.learn['editor-tabs'].console })
        .click();
    }
    const console = page.getByRole('region', {
      name: translations.learn['editor-tabs'].console
    });
    await expect(console).toHaveText(outputTexts.default);
    await page.keyboard.press('Control+Enter');
    await expect(console).toHaveText(outputTexts.final);
  });

  test('pressing e should focus code editor', async ({ page }) => {
    const editor = page.getByLabel('Editor content');
    await expect(editor).not.toBeFocused();
    await page.keyboard.press('e');
    await expect(editor).toBeFocused();
  });

  test('pressing r should focus instructions panel', async ({
    page,
    isMobile
  }) => {
    if (isMobile) {
      await page
        .getByRole('tab', {
          name: translations.learn['editor-tabs'].instructions
        })
        .click();
    }
    const instructions = page.getByTestId('instructions-panel');
    await expect(instructions).not.toBeFocused();
    await page.keyboard.press('r');
    await expect(instructions).toBeFocused();
  });

  test('pressing p should redirect to previous challenge', async ({ page }) => {
    const previousChallengeURL =
      'http://localhost:8000/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';
    await expect(page).not.toHaveURL(previousChallengeURL);
    await page.keyboard.press('p');
    await expect(page).toHaveURL(previousChallengeURL);
  });

  test('pressing n should redirect to next challenge', async ({ page }) => {
    const nextChanllengeURL =
      'http://localhost:8000/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator';
    await expect(page).not.toHaveURL(nextChanllengeURL);
    await page.keyboard.press('n');
    await expect(page).toHaveURL(nextChanllengeURL);
  });
});
