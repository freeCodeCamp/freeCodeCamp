import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { clearEditor, focusEditor, getEditors } from './utils/editor';

const outputTexts = {
  default: `
  /**
  * Your test output will go here
  */`,
  syntaxError: `SyntaxError: unknown: Unexpected token (1:3)

  > 1 | var
      |    ^`,
  empty: `// running tests
  1. You should declare myName with the var keyword, ending with a semicolon
  // tests completed`,
  passed: `// running tests
// tests completed`
};

interface InsertTextParameters {
  page: Page;
  browserName: string;
  containerId?: string;
  isMobile: boolean;
  text: string;
}

const replaceTextInCodeEditor = async ({
  page,
  browserName,
  isMobile,
  text,
  containerId = 'editor-container-indexhtml'
}: InsertTextParameters) => {
  await expect(async () => {
    await clearEditor({ page, browserName, isMobile });
    await getEditors(page).fill(text);
    await expect(page.getByTestId(containerId)).toContainText(text);
  }).toPass();
};

const runChallengeTest = async (page: Page, isMobile: boolean) => {
  if (isMobile) {
    await page.getByRole('tab', { name: 'Console' }).click();
    await page.getByText('Run').click();
  } else {
    await page.getByText('Run the Tests (Ctrl + Enter)').click();
  }
};

test.describe('For classic challenges', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
  });

  test('it renders the default output', async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.default);
  });

  test('shows test output when the tests are run', async ({
    page,
    isMobile,
    browserName
  }) => {
    const closeButton = page.getByRole('button', { name: 'Close' });
    await expect(page).toHaveTitle(
      'Basic HTML and HTML5: Say Hello to HTML Elements |' + ' freeCodeCamp.org'
    );
    await focusEditor({ page, isMobile });
    await replaceTextInCodeEditor({
      browserName,
      page,
      isMobile,
      text: '<h1>Hello World</h1>'
    });
    await runChallengeTest(page, isMobile);
    await closeButton.click();

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.passed);
  });

  test('shows test output when the tests are triggered by the keyboard', async ({
    page,
    browserName,
    isMobile
  }) => {
    test.skip(isMobile);
    const closeButton = page.getByRole('button', { name: 'Close' });

    await replaceTextInCodeEditor({
      page,
      browserName,
      isMobile,
      text: '<h1>Hello World</h1>'
    });
    await page.keyboard.press('Control+Enter');
    await closeButton.click();

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.passed);
  });
});

test.describe('Challenge Output Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
    );
  });

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
    isMobile,
    browserName
  }) => {
    await focusEditor({ page, isMobile });
    await replaceTextInCodeEditor({
      browserName,
      page,
      isMobile,
      text: 'var',
      containerId: 'editor-container-scriptjs'
    });

    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.syntaxError);
  });

  test('should contain reference error output when var is entered in editor', async ({
    browserName,
    page,
    isMobile
  }) => {
    const referenceErrorRegex =
      /ReferenceError: (myName is not defined|Can't find variable: myName)/;
    await focusEditor({ page, isMobile });
    await replaceTextInCodeEditor({
      browserName,
      page,
      isMobile,
      text: 'myName',
      containerId: 'editor-container-scriptjs'
    });

    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }

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

    await expect(page.getByTestId('output-text')).toContainText(
      outputTexts.empty,
      { timeout: 10000 }
    );
  });

  test('should contain final output after test pass', async ({
    browserName,
    page,
    isMobile
  }) => {
    const closeButton = page.getByRole('button', { name: 'Close' });
    await focusEditor({ page, isMobile });
    await replaceTextInCodeEditor({
      browserName,
      page,
      isMobile,
      text: 'var myName;',
      containerId: 'editor-container-scriptjs'
    });
    await runChallengeTest(page, isMobile);
    await closeButton.click();

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.passed);
  });
});

test.describe('Jquery challenges', () => {
  test('Jquery challenge should render with default output', async ({
    page,
    isMobile
  }) => {
    await page.goto(
      '/learn/front-end-development-libraries/jquery/target-html-elements-with-selectors-using-jquery'
    );

    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toHaveText(outputTexts.default);

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).not.toHaveText('ReferenceError: $ is not defined');
  });
});

test.describe('Custom output for Set and Map', () => {
  test('Custom output for JavaScript Objects Set and Map', async ({
    page,
    isMobile,
    browserName
  }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code'
    );

    await focusEditor({ page, isMobile });

    await replaceTextInCodeEditor({
      browserName,
      page,
      isMobile,
      text: 'const set = new Set(); set.add(1); set.add("set"); set.add(10); console.log(set);',
      containerId: 'editor-container-scriptjs'
    });

    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toContainText('Set(3) {1, set, 10}');

    await focusEditor({ page, isMobile });
    await replaceTextInCodeEditor({
      browserName,
      page,
      isMobile,
      text: 'const map = new Map(); map.set(1, "one"); map.set("two", 2); console.log(map);',
      containerId: 'editor-container-scriptjs'
    });

    if (isMobile) {
      await page.getByRole('tab', { name: 'Console' }).click();
    }

    await expect(
      page.getByRole('region', {
        name: translations.learn['editor-tabs'].console
      })
    ).toContainText('Map(2) {1 => one, two => 2}');
  });
});
