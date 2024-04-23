import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const challengeButtons = [
  'Instructions',
  'index.html',
  'styles.css',
  'Console'
];

const editorButtons = ['index.html', 'styles.css'];

test.describe('Desktop view', () => {
  test.skip(({ isMobile }) => isMobile, 'Only test on desktop');

  test.describe('Pages with previews', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(
        '/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
      );
    });

    test('Action row buttons are visible', async ({ page }) => {
      const previewPaneButton = page.getByTestId('preview-pane-button');
      const previewPortalButton = page.getByRole('button', {
        name: translations.aria['move-preview-to-new-window']
      });
      const actionRow = page.getByTestId('action-row');

      const n = challengeButtons.length;
      for (let i = 0; i < n; i++) {
        const btn = actionRow.getByRole('button', {
          name: challengeButtons[i]
        });
        await expect(btn).toBeVisible();
      }

      await expect(previewPaneButton).toBeVisible();
      await expect(previewPortalButton).toBeVisible();
    });

    test('Clicking instructions button hides instructions panel, but not editor buttons', async ({
      page
    }) => {
      const instructionsButton = page.getByTestId('instructions-button');
      const actionRow = page.getByTestId('action-row');

      // Click instructions button to hide instructions panel and editor buttons
      await instructionsButton.click();

      for (let i = 0; i < editorButtons.length; i++) {
        const btn = actionRow.getByRole('button', { name: editorButtons[i] });
        await expect(btn).toBeVisible();
      }

      const instructionsPanelTitle = page.getByRole('heading', {
        name: 'Build a Survey Form'
      });
      await expect(instructionsPanelTitle).toBeHidden();
    });

    test('Clicking Console button shows console panel', async ({ page }) => {
      const actionRow = page.getByTestId('action-row');
      const consoleBtn = actionRow.getByRole('button', { name: 'Console' });

      // Click the console button to show the console panel
      await consoleBtn.click();
      const consolePanel = page.getByLabel('Console');
      await expect(consolePanel).toBeVisible();
    });

    test('Clicking Preview Pane button hides preview', async ({ page }) => {
      const previewButton = page.getByTestId('preview-pane-button');
      const previewFrame = page.getByTitle('challenge preview');

      await previewButton.click();
      await expect(previewFrame).toBeHidden();
    });

    test('Clicking Preview Portal button opens the preview in a new tab', async ({
      page
    }) => {
      const previewPortalButton = page.getByRole('button', {
        name: translations.aria['move-preview-to-new-window']
      });
      const browserContext = page.context();

      const [newPage] = await Promise.all([
        browserContext.waitForEvent('page'),
        previewPortalButton.click()
      ]);

      await newPage.waitForLoadState();

      await expect(newPage).toHaveURL('about:blank');

      await newPage.close();
    });
  });

  test.describe('Pages without previews', () => {
    test('Preview Buttons should not appear when preview is disabled', async ({
      page
    }) => {
      await page.goto(
        '/learn/javascript-algorithms-and-data-structures-v8/learn-introductory-javascript-by-building-a-pyramid-generator/step-1'
      );
      const previewButton = page.getByTestId('preview-pane-button');
      await expect(previewButton).toHaveCount(0);
    });
  });
});

test.describe('Mobile view', () => {
  test.skip(({ isMobile }) => !isMobile, 'Only test on mobile');

  test('Action row is hidden', async ({ page }) => {
    await page.goto(
      '/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
    );
    const actionRow = page.getByTestId('action-row');
    await expect(actionRow).toBeHidden();
  });
});
