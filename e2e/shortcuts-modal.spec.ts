import { APIRequestContext, Page, expect, test } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const course =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';
const editorPaneLabel =
  'Editor content;Press Alt+F1 for Accessibility Options.';

const enableKeyboardShortcuts = async (
  page: Page,
  request: APIRequestContext
) => {
  const csrfToken = (await request.storageState()).cookies.find(
    c => c.name === 'csrf_token'
  )?.value;

  expect(csrfToken).toBeTruthy();

  const res = await request.put(
    process.env.API_LOCATION + '/update-my-keyboard-shortcuts',
    {
      data: { keyboardShortcuts: true },
      headers: { 'csrf-token': csrfToken! }
    }
  );
  expect(res.status()).toBe(200);
  expect(await res.json()).toEqual({
    message: 'flash.keyboard-shortcut-updated',
    type: 'success'
  });
};

const openModal = async (page: Page) => {
  // The editor pane is focused by default, so we need to escape or it will
  // capture the keyboard shortcuts
  await page.getByLabel(editorPaneLabel).press('Escape');
  await page.keyboard.press('Shift+?');
};

test.beforeEach(async ({ page, isMobile, request }) => {
  test.skip(
    isMobile,
    'Skipping on mobile as it does not have a physical keyboard'
  );

  await enableKeyboardShortcuts(page, request);
  await page.goto(course);
});

test('the modal can be opened with SHIFT + ? and closed with ESC', async ({
  page
}) => {
  await openModal(page);
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
  await openModal(page);
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
