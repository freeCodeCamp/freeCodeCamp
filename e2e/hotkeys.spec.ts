import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { authedRequest } from './utils/request';
import { getEditors } from './utils/editor';

const course =
  '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';

const links = {
  frontEnd1:
    '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine',
  frontEnd2:
    '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer',
  backEnd1:
    '/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice',
  backEnd2:
    'learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice',
  video1:
    '/learn/python-for-everybody/python-for-everybody/introduction-why-program',
  video2:
    '/learn/python-for-everybody/python-for-everybody/introduction-hardware-architecture'
};

// The hotkeys are attached to specific elements, so we need to wait for the
// wrapper to be focused before we can test the hotkeys.
const waitUntilListening = async (page: Page) =>
  await expect(page.locator('#editor-layout')).toBeFocused();

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

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
  const keyboardShortcutGroup = page.getByRole('group', {
    name: translations.settings.labels['keyboard-shortcuts']
  });
  await keyboardShortcutGroup
    .getByRole('button', { name: translations.buttons.on, exact: true })
    .click();
  // wait for the client to register the change:
  await expect(
    page
      .getByRole('alert')
      .filter({ hasText: translations.flash['keyboard-shortcut-updated'] })
  ).toBeVisible();
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

test('User can use shortcuts in and around the editor', async ({ page }) => {
  await page.goto(course);

  await expect(getEditors(page)).toBeFocused();
  await getEditors(page).press('Escape');
  await expect(getEditors(page)).not.toBeFocused();

  await page.keyboard.press('n');
  const nextCourse = '**/declare-javascript-variables';
  await page.waitForURL(nextCourse);
  await waitUntilListening(page);

  await page.keyboard.press('p');
  const previousCourse = '**/comment-your-javascript-code';
  await page.waitForURL(previousCourse);
  await waitUntilListening(page);

  await page.keyboard.press('e');
  await expect(getEditors(page)).toBeFocused();

  await getEditors(page).press('Escape');
  await page.keyboard.press('r');
  await expect(page.locator('.instructions-panel')).toBeFocused();
});

test('User can use shortcuts to navigate between frontend projects', async ({
  page
}) => {
  await page.goto(links.frontEnd1);
  await waitUntilListening(page);
  await page.keyboard.press('Escape');

  await page.keyboard.press('n');
  await page.waitForURL(links.frontEnd2);
  await waitUntilListening(page);
  await page.keyboard.press('p');
  await page.waitForURL(links.frontEnd1);
});

test('User can use shortcuts to navigate between backend projects', async ({
  page
}) => {
  await page.goto(links.backEnd1);
  await waitUntilListening(page);
  await page.keyboard.press('Escape');

  await page.keyboard.press('n');
  await page.waitForURL(links.backEnd2);
  await waitUntilListening(page);
  await page.keyboard.press('p');
  await page.waitForURL(links.backEnd1);
});

test('User can use shortcuts to navigate between video-based challenges', async ({
  page
}) => {
  await page.goto(links.video1);
  await waitUntilListening(page);
  await page.keyboard.press('Escape');

  await page.keyboard.press('n');
  await page.waitForURL(links.video2);
  await waitUntilListening(page);
  await page.keyboard.press('p');
  await page.waitForURL(links.video1);
});
