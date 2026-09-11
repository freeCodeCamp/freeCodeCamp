import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { BrowserContext } from '@playwright/test';

import { test, expect } from './fixtures/isolated-user';

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';
const signInUrl = new URL('/signin', apiLocation).toString();

async function expectSessionUser(
  context: BrowserContext,
  user: { id: string; email: string; username: string }
) {
  const response = await context.request.get(
    new URL('/user/session-user', apiLocation).toString()
  );
  expect(response.status()).toBe(200);

  const body = (await response.json()) as {
    result: string;
    user: Record<string, { id: string; email: string }>;
  };
  expect(body.result).toBe(user.username);
  expect(body.user[user.username]).toMatchObject({
    id: user.id,
    email: user.email
  });
}

const testWithStorageFile = test.extend({
  // Playwright requires destructuring even when a fixture has no dependencies.
  // eslint-disable-next-line no-empty-pattern
  storageState: async ({}, use, testInfo) => {
    const storagePath = testInfo.outputPath('empty-storage-state.json');
    await mkdir(path.dirname(storagePath), { recursive: true });
    await writeFile(storagePath, JSON.stringify({ cookies: [], origins: [] }));
    await use(storagePath);
  }
});

test.use({ userPreset: 'new' });
// https://bugs.webkit.org/show_bug.cgi?id=232088
test.skip(
  ({ browserName }) =>
    browserName === 'webkit' &&
    process.platform === 'darwin' &&
    new URL(apiLocation).protocol === 'http:',
  "WebKit on macOS cannot set the API's Secure login cookie over HTTP."
);

test('signs back into the same isolated account after clearing its cookie', async ({
  page,
  context,
  isolatedUser
}) => {
  await expectSessionUser(context, isolatedUser);
  await context.clearCookies({ name: 'jwt_access_token' });

  await page.goto(signInUrl, { waitUntil: 'domcontentloaded' });

  await expectSessionUser(context, isolatedUser);
});

test.describe('signing in from an empty storage-state object', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('uses the isolated account on the fixture page', async ({
    page,
    context,
    isolatedUser
  }) => {
    await page.goto(signInUrl, { waitUntil: 'domcontentloaded' });

    await expectSessionUser(context, isolatedUser);
  });

  test('uses the isolated account on an additional page', async ({
    context,
    isolatedUser
  }) => {
    const page = await context.newPage();
    await page.goto(signInUrl, { waitUntil: 'domcontentloaded' });

    await expectSessionUser(context, isolatedUser);
  });

  test('uses the isolated account for the first request from a popup', async ({
    page,
    context,
    isolatedUser
  }) => {
    await page.setContent(`<a href="${signInUrl}" target="_blank">Sign in</a>`);
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'Sign in' }).click()
    ]);
    await popup.waitForLoadState('domcontentloaded');

    await expectSessionUser(context, isolatedUser);
  });
});

testWithStorageFile(
  'uses the isolated account with an empty storage-state file',
  async ({ page, context, isolatedUser }) => {
    await page.goto(signInUrl, { waitUntil: 'domcontentloaded' });

    await expectSessionUser(context, isolatedUser);
  }
);
