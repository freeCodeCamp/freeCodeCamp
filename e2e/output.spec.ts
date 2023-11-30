import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const outputTexts = {
  default: `
  /**
  * Your test output will go here
  */`,
  error: `SyntaxError: unknown: Unexpected token (1:3)

  > 1 | var
      |    ^`,
  final: `// running tests
  You should declare myName with the var keyword, ending with a semicolon
  // tests completed`
};

const insertTextInCodeEditor = async (page: Page, isMobile: boolean) => {
  if (isMobile) {
    await page
      .getByRole('tab', { name: translations.learn['editor-tabs'].code })
      .click();
  }
  await page.getByLabel('Editor content').fill('var');
  if (isMobile) {
    await page
      .getByRole('tab', { name: translations.learn['editor-tabs'].console })
      .click();
  }
};

const runChallengeTest = async (page: Page, isMobile: boolean) => {
  if (isMobile) {
    await page.getByRole('tab', { name: 'Code' }).click();
    await page.getByText('Run').click();
    await page.getByRole('tab', { name: 'Console' }).click();
  } else {
    await page.getByText('Run the Tests (Ctrl + Enter)').click();
  }
};

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
  );
});

test.describe('Challenge Output Component Tests', () => {
  test('should render with default output', async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }
    const outputConsole = page.getByRole('region', {
      name: translations.learn['editor-tabs'].console
    });
    await expect(outputConsole).toBeVisible();
    await expect(outputConsole).toHaveText(outputTexts.default);
  });

  test('should contain error output when var is entered in editor', async ({
    page,
    isMobile
  }) => {
    await insertTextInCodeEditor(page, isMobile);
    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.error);
  });

  test('should contain final output after test run', async ({
    page,
    isMobile
  }) => {
    await runChallengeTest(page, isMobile);
    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.final);
  });
});
