import { Page, expect, test } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const course =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';
const editorPaneLabel =
  'Editor content;Press Alt+F1 for Accessibility Options.';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

// Enable keyboard shortcuts
const enableKeyboardShortcuts = async (page: Page) => {
  await page.goto('/settings');
  const keyboardShortcutGroup = page.getByRole('group', {
    name: translations.settings.labels['keyboard-shortcuts']
  });
  await keyboardShortcutGroup
    .getByRole('button', { name: translations.buttons.on, exact: true })
    .click();
};

test.beforeEach(async ({ page,  isMobile }) => {
  test.skip(
     isMobile,
    'Skipping on mobile as it does not have a physical keyboard'
  );

  await enableKeyboardShortcuts(page);
  await page.goto(course);
});

test('the modal can be opened with SHIFT + ? and closed with ESC', async ({
  page
}) => {
  // The editor pane is focused by default, so we need to escape or it will
  // capture the keyboard shortcuts
  await page.getByLabel(editorPaneLabel).press('Escape');
  await page.keyboard.press('Shift+?');

  const dialog = page.getByRole('dialog', {
    name: translations.shortcuts.title
  });
  await expect(dialog).toBeVisible();

  for (const shortcut of Object.values(translations.shortcuts)) {
    if (shortcut === translations.shortcuts.title) continue;
    await expect(page.getByText(shortcut)).toBeVisible();
  }

  await expect(
    page.getByText(translations.settings.labels['keyboard-shortcuts'])
  ).toHaveCount(2);
  await expect(
    page.getByRole('button', { name: translations.buttons.on })
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: translations.buttons.off })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: translations.buttons.close })
  ).toBeVisible();

  await page.keyboard.press('Escape');

  await expect(dialog).not.toBeVisible();
});

test('has a button to disable or enable keyboard shortcuts', async ({
  page
}) => {
  const dialog = page.getByRole('dialog', {
    name: translations.shortcuts.title
  });

  await expect(dialog).toBeVisible();

  await page.getByRole('button', { name: translations.buttons.off }).click();
  await page.getByRole('button', { name: translations.buttons.close }).click();

  await expect(dialog).not.toBeVisible();

  await expect(
    page.getByText(new RegExp(translations.flash['keyboard-shortcut-updated']))
  ).toBeVisible();

  await page.keyboard.press('Shift+?');

  await expect(dialog).not.toBeVisible();
});
