import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { authedRequest } from './utils/request';
import { getEditors } from './utils/editor';

const course =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeAll(async ({ request }) => {
  await authedRequest({
    request,
    endpoint: 'update-my-keyboard-shortcuts',
    method: 'put',
    data: {
      keyboardShortcuts: false
    }
  });
});

test.afterEach(
  async ({ request }) =>
    await authedRequest({
      request,
      method: 'put',
      endpoint: 'update-my-keyboard-shortcuts',
      data: {
        keyboardShortcuts: false
      }
    })
);

test('User can interact with the app using the keyboard', async ({ page }) => {
  // Enable keyboard shortcuts
  await page.goto('/settings');
  const keyboardShortcutGroup = page.getByRole('group', {
    name: translations.settings.labels['keyboard-shortcuts']
  });
  await keyboardShortcutGroup
    .getByRole('button', { name: translations.buttons.on, exact: true })
    .click();
  // TODO: getByRole('alert', name:
  // translations.flash['keyboard-shortcut-updated']) did not find the alert.
  // Should it a) be an alert and b) have a name?
  await expect(
    page.getByText(translations.flash['keyboard-shortcut-updated'])
  ).toBeVisible();

  await page.goto(course);

  await expect(getEditors(page)).toBeFocused();
  await getEditors(page).press('Escape');
  await expect(getEditors(page)).not.toBeFocused();

  await page.keyboard.press('n');
  const nextCourse = '**/declare-javascript-variables';
  await page.waitForURL(nextCourse);
  // Ensure that the page content is loaded before simulating user interactions.
  await expect(
    page.getByRole('heading', { name: 'Declare JavaScript Variables' })
  ).toBeVisible();

  await page.keyboard.press('p');
  const previousCourse = '**/comment-your-javascript-code';
  await page.waitForURL(previousCourse);
  // Ensure that the page content is loaded before simulating user interactions.
  await expect(
    page.getByRole('heading', { name: 'Comment Your JavaScript Code' })
  ).toBeVisible();

  await page.keyboard.press('e');
  await expect(getEditors(page)).toBeFocused();

  await page.keyboard.press('Control+Enter');
  await expect(page.getByText('running test')).toBeVisible();

  // Show shortcuts (shift+/) is covered by the shortcuts-modal tests
});
