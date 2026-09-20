import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Desktop view', () => {
  test.skip(({ isMobile }) => isMobile, 'Only test on desktop');

  test.describe('Pages with previews', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(
        '/learn/responsive-web-design-v9/lab-event-flyer-page/build-an-event-flyer-page'
      );
    });

    test('Clicking instructions button hides the instructions panel', async ({
      page
    }) => {
      const instructionsButton = page.getByTestId('instructions-button');

      await instructionsButton.click();

      const instructionsPanelTitle = page.getByRole('heading', {
        name: 'Build an Event Flyer Page'
      });
      await expect(instructionsPanelTitle).toBeHidden();
    });

    test('Clicking Console button shows console panel', async ({ page }) => {
      const actionRow = page.getByTestId('action-row');
      const consoleText = translations.learn['editor-tabs'].console;
      const consoleBtn = actionRow.getByRole('button', { name: consoleText });

      await consoleBtn.click();
      const consolePanel = page.getByLabel(consoleText);
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
});

test.describe('Mobile view', () => {
  test.skip(({ isMobile }) => !isMobile, 'Only test on mobile');

  test('Action row is hidden', async ({ page }) => {
    await page.goto(
      '/learn/responsive-web-design-v9/lab-survey-form/build-a-survey-form'
    );
    const actionRow = page.getByTestId('action-row');
    await expect(actionRow).toBeHidden();
  });
});
