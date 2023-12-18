import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const outputTexts = {
  default: `
  /**
  * Your test output will go here
  */`,
  syntaxError: `SyntaxError: unknown: Unexpected token (1:3)

  > 1 | var
      |    ^`,
  empty: `// running tests
  You should declare myName with the var keyword, ending with a semicolon
  // tests completed`,
  passed: `// running tests
// tests completed`
};

interface InsertTextParameters {
  page: Page;
  isMobile: boolean;
  text: string;
}

const insertTextInCodeEditor = async ({
  page,
  isMobile,
  text
}: InsertTextParameters) => {
  if (isMobile) {
    await page
      .getByRole('tab', { name: translations.learn['editor-tabs'].code })
      .click();
  }
  await page.getByLabel('Editor content').fill(text);
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

  test('should contain syntax error output when var is entered in editor', async ({
    page,
    isMobile
  }) => {
    await insertTextInCodeEditor({ page, isMobile, text: 'var' });
    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.syntaxError);
  });

  test('should contain reference error output when var is entered in editor', async ({
    page,
    isMobile
  }) => {
    const referenceErrorRegex =
      /ReferenceError: (myName is not defined|Can't find variable: myName)/;
    await insertTextInCodeEditor({ page, isMobile, text: 'myName' });
    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(referenceErrorRegex);
  });

  test('should contain final output after test fail', async ({
    page,
    isMobile
  }) => {
    await runChallengeTest(page, isMobile);
    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.empty);
  });

  test('should contain final output after test pass', async ({
    page,
    isMobile
  }) => {
    const closeButton = page.getByRole('button', { name: 'Close' });

    await insertTextInCodeEditor({ page, isMobile, text: 'var myName;' });
    await runChallengeTest(page, isMobile);
    await closeButton.click();
    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.passed);
  });
});
