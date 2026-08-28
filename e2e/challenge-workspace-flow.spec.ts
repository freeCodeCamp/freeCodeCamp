import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

// Which panes the desktop layout renders for a given challenge is structural,
// and is covered by
// client/src/templates/Challenges/classic/desktop-layout.test.tsx.
//
// This file keeps only what the browser has to prove: that a camper's
// workspace preference is written to storage and rehydrated on a fresh page
// load, that the preview portal really relocates the preview into a second
// window, and that a mobile viewport is served the mobile layout instead.

const eventFlyerPage =
  '/learn/responsive-web-design-v9/lab-event-flyer-page/build-an-event-flyer-page';
const surveyFormPage =
  '/learn/responsive-web-design-v9/lab-survey-form/build-a-survey-form';

const consoleLabel = translations.learn['editor-tabs'].console;
const previewTitle = translations.learn['chal-preview'];
const portalButtonLabel = translations.aria['move-preview-to-new-window'];

test.describe('Challenge workspace', () => {
  // The workspace preference is browser-local, so this spec does not need the
  // shared seeded certified user and should not depend on it.
  test.use({ storageState: { cookies: [], origins: [] } });

  test.skip(
    ({ isMobile }) => isMobile,
    'The resizable desktop workspace is not used on mobile'
  );

  test('A camper console preference follows them across a reload and into the next challenge', async ({
    page
  }) => {
    await test.step('open a lab challenge with the console hidden', async () => {
      await page.goto(eventFlyerPage);
      await expect(page.getByLabel(consoleLabel)).toBeHidden();
    });

    await test.step('show the console from the action row', async () => {
      await page
        .getByTestId('action-row')
        .getByRole('button', { name: consoleLabel })
        .click();

      await expect(page.getByLabel(consoleLabel)).toBeVisible();
    });

    await test.step('reload and confirm the console is still shown', async () => {
      await page.reload();

      await expect(page.getByLabel(consoleLabel)).toBeVisible();
    });

    await test.step('open a different lab challenge and confirm the preference followed', async () => {
      await page.goto(surveyFormPage);

      await expect(page.getByLabel(consoleLabel)).toBeVisible();
    });
  });

  test('The preview portal moves the preview into a second window', async ({
    page
  }) => {
    await test.step('open a lab challenge showing the preview in the page', async () => {
      await page.goto(eventFlyerPage);
      await expect(page.getByTitle(previewTitle)).toBeVisible();
    });

    const [portalWindow] =
      await test.step('send the preview to a new window', async () =>
        Promise.all([
          page.context().waitForEvent('page'),
          page.getByRole('button', { name: portalButtonLabel }).click()
        ]));

    await test.step('confirm the preview now lives in the new window and not the page', async () => {
      await expect(portalWindow.getByTitle(previewTitle)).toBeAttached();
      await expect(page.getByTitle(previewTitle)).toBeHidden();
    });

    await portalWindow.close();
  });
});

test.describe('Challenge workspace on mobile', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.skip(
    ({ isMobile }) => !isMobile,
    'This is about what a mobile viewport is served'
  );

  test('A mobile viewport is served the tabbed layout instead of the action row', async ({
    page
  }) => {
    await page.goto(surveyFormPage);

    // The mobile viewport renders MobileLayout, so the action row is never
    // built rather than built and hidden.
    await expect(page.getByTestId('action-row')).not.toBeAttached();
    await expect(page.getByRole('tablist')).toBeVisible();
  });
});
