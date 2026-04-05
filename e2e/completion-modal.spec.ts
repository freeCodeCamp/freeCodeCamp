import { execSync } from 'node:child_process';

import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { authedRequest } from './utils/request';
import { allowTrailingSlash } from './utils/url';
import { getEditors } from './utils/editor';

const nextChallengeURL =
  '/learn/data-analysis-with-python/data-analysis-with-python-projects/demographic-data-analyzer';

test.beforeAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
});

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/data-analysis-with-python/data-analysis-with-python-projects/mean-variance-standard-deviation-calculator'
  );
  await page.getByLabel('Solution Link').fill('https://example.com');
  await page
    .getByRole('button', { name: "I've completed this challenge" })
    .click();
});

test.describe('Challenge Completion Modal Tests (Signed Out)', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test('should render the modal correctly', async ({ page }) => {
    await expect(page.getByRole('heading')).toBeVisible();
    await expect(page.getByRole('button', { name: 'close' })).toBeVisible();
    await expect(page.getByTestId('completion-success-icon')).toBeVisible();
    await expect(page.getByTestId('progress-bar-container')).toBeVisible();
    await expect(
      page.getByRole('link', { name: translations.learn['sign-in-save'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['go-to-next'] })
    ).toBeVisible();
  });

  test('should close the modal after user click on close', async ({ page }) => {
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByTestId('completion-success-icon')).not.toBeVisible();
  });

  test('should close the modal after user presses escape', async ({ page }) => {
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should display the text of go to next challenge button accordingly based on device type', async ({
    page,
    isMobile,
    browserName
  }) => {
    if (isMobile) {
      await expect(
        page.getByRole('button', {
          name: 'Go to next challenge',
          exact: true
        })
      ).toBeVisible();
    } else if (browserName === 'webkit') {
      await expect(
        page.getByRole('button', {
          name: 'Go to next challenge (Command + Enter)'
        })
      ).toBeVisible();
    } else {
      await expect(
        page.getByRole('button', {
          name: 'Go to next challenge (Ctrl + Enter)'
        })
      ).toBeVisible();
    }
  });

  test('should redirect to /learn after sign in', async ({ page }) => {
    await page
      .getByRole('link', { name: translations.learn['sign-in-save'] })
      .click();
    await expect(page).toHaveURL(allowTrailingSlash('/learn'));
  });

  test('should redirect to next challenge', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.buttons['go-to-next'] })
      .click();
    await expect(page).toHaveURL(nextChallengeURL);
  });
});

test.describe('Challenge Completion Modal Tests (Signed In)', () => {
  test('should render the modal correctly', async ({ page }) => {
    await expect(page.getByRole('heading')).toBeVisible();
    await expect(page.getByRole('button', { name: 'close' })).toBeVisible();
    await expect(page.getByTestId('completion-success-icon')).toBeVisible();
    await expect(page.getByTestId('progress-bar-container')).toBeVisible();
    await expect(
      page.getByRole('link', { name: translations.learn['sign-in-save'] })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['submit-and-go'] })
    ).toBeVisible();
  });

  test('should close the modal after user click on close', async ({ page }) => {
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByTestId('completion-success-icon')).not.toBeVisible();
  });

  test('should close the modal after user presses escape while having keyboard shortcuts disabled', async ({
    page,
    request
  }) => {
    await authedRequest({
      request,
      endpoint: 'update-my-keyboard-shortcuts',
      method: 'put',
      data: {
        keyboardShortcuts: false
      }
    });
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should close the modal after user presses escape while having keyboard shortcuts enabled', async ({
    page,
    request
  }) => {
    await authedRequest({
      request,
      endpoint: 'update-my-keyboard-shortcuts',
      method: 'put',
      data: {
        keyboardShortcuts: true
      }
    });
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('should display the text of go to next challenge button accordingly based on device type', async ({
    page,
    isMobile,
    browserName
  }) => {
    if (isMobile) {
      await expect(
        page.getByRole('button', {
          name: 'Submit and go to next challenge',
          exact: true
        })
      ).toBeVisible();
    } else if (browserName === 'webkit') {
      await expect(
        page.getByRole('button', {
          name: 'Submit and go to next challenge (Command + Enter)'
        })
      ).toBeVisible();
    } else {
      await expect(
        page.getByRole('button', {
          name: 'Submit and go to next challenge (Ctrl + Enter)'
        })
      ).toBeVisible();
    }
  });

  test('should submit and go to the next challenge when the user clicks the submit button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons['submit-and-go'] })
      .click();
    await expect(page).toHaveURL(nextChallengeURL);
  });

  test('should submit and go to the next challenge when the user presses Ctrl + Enter', async ({
    page
  }) => {
    await page.keyboard.press('Control+Enter');
    await expect(page).toHaveURL(nextChallengeURL);
  });

  test('should submit and go to the next challenge when the user presses Command + Enter', async ({
    page
  }) => {
    await page.keyboard.press('Meta+Enter');
    await expect(page).toHaveURL(nextChallengeURL);
  });
});

test.describe('Challenge Completion Modal Download Solution', () => {
  test('should be able to download the solution in zip format', async ({
    page
  }) => {
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    const solution = `<h1>Hello World</h1>`;
    await getEditors(page).fill(solution);
    const editorTextLocator = page
      .getByTestId('editor-container-indexhtml')
      .getByText(solution);
    await expect(editorTextLocator).toBeVisible();

    await page.keyboard.press('Control+Enter');

    await expect(
      page.getByText(translations.learn['congratulations-code-passes'])
    ).toBeVisible();

    const downloadButton = page.getByText(
      translations.learn['download-solution']
    );
    await expect(downloadButton).toBeVisible();

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      downloadButton.click()
    ]);

    expect(download.suggestedFilename()).toBe('say-hello-to-html-elements.zip');
  });
});
