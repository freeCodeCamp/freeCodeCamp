import { test, expect } from '@playwright/test';

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

  await getEditors(page).press('Escape');
  await page.keyboard.press('r');
  await expect(page.locator('.instructions-panel')).toBeFocused();
});

test('User can use shortcuts to navigate between frontend projects', async ({
  page
}) => {
  await page.goto(links.frontEnd1);
  await expect(page.locator('#editor-layout')).toBeFocused();
  await page.keyboard.press('Escape');
  await page.keyboard.press('n');

  await page.waitForURL(links.frontEnd2);
  await expect(page.locator('#editor-layout')).toBeFocused();
  await page.keyboard.press('p');
  await page.keyboard.press('Escape');
  await page.waitForURL(links.frontEnd1);
});

test('User can use shortcuts to navigate between backend projects', async ({
  page
}) => {
  await page.goto(links.backEnd1);
  await expect(page.locator('#editor-layout')).toBeFocused();
  await page.keyboard.press('Escape');
  await page.keyboard.press('n');

  await page.waitForURL(links.backEnd2);
  await expect(page.locator('#editor-layout')).toBeFocused();
  await page.keyboard.press('p');
  await page.keyboard.press('Escape');
  await page.waitForURL(links.backEnd1);
});

test('User can use shortcuts to navigate between video-based challenges', async ({
  page
}) => {
  await page.goto(links.video1);
  await expect(page.locator('#editor-layout')).toBeFocused();
  await page.keyboard.press('Escape');
  await page.keyboard.press('n');

  await page.waitForURL(links.video2);
  await expect(page.locator('#editor-layout')).toBeFocused();
  await page.keyboard.press('p');
  await page.keyboard.press('Escape');
  await page.waitForURL(links.video1);
});
