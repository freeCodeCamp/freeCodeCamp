import { expect, test } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const course =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';
const editorPaneLabel =
  'Editor content;Press Alt+F1 for Accessibility Options.';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page, browserName, isMobile }) => {
  test.skip(
    browserName === 'webkit' || isMobile,
    'Failing on webkit for no apparent reason. Can not reproduce locally. Also, skipping on mobile as it does not have a physical keyboard'
  );

  // Enable keyboard shortcuts
  await page.goto('/settings');
  const keyboardShortcutGroup = page.getByRole('group', {
    name: translations.settings.labels['keyboard-shortcuts']
  });
  await keyboardShortcutGroup
    .getByRole('button', { name: translations.buttons.on, exact: true })
    .click();

  // Open shortcuts modal
  await page.goto(course);
  await page.getByLabel(editorPaneLabel).press('Escape');
  await page.keyboard.press('Shift+?');
});

test('User can see list of shortcuts  by pressing SHIFT + ?', async ({
  page,
  isMobile
}) => {
  test.skip(
    isMobile,
    'Skipping on mobile as it does not have a physical keyboard.'
  );

  await expect(
    page.getByRole('dialog', { name: translations.shortcuts.title })
  ).toBeVisible();

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
});

test('User can close the modal by pressing ESC', async ({ page, isMobile }) => {
  test.skip(
    isMobile,
    'Skipping on mobile as it does not have a physical keyboard.'
  );

  const dialog = page.getByRole('dialog', {
    name: translations.shortcuts.title
  });

  await expect(dialog).toBeVisible();

  await page.keyboard.press('Escape');

  await expect(dialog).not.toBeVisible();
});

test('User can disable keyboard shortcuts', async ({ page, isMobile }) => {
  test.skip(
    isMobile,
    'Skipping on mobile as it does not have a physical keyboard.'
  );

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
