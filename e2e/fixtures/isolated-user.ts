import { randomUUID } from 'node:crypto';
import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';

import { test as base, type APIRequestContext } from '@playwright/test';

type UserStorageState = Awaited<ReturnType<APIRequestContext['storageState']>>;

type IsolatedUser = {
  email: string;
  storageState: UserStorageState;
  username: string;
};

type IsolatedUserFixtures = {
  isolatedUser: IsolatedUser;
  userOverrides: Record<string, boolean>;
  userPreset: UserPreset;
};

type UserPreset =
  | 'new'
  | 'development'
  | 'certified'
  | 'almost-certified'
  | 'unclaimed';

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';
const execFileP = promisify(execFile);
const seedScriptPath = path.resolve(
  __dirname,
  '../../tools/scripts/seed/seed-demo-user.js'
);

const getApiUrl = (path: string) => new URL(path, apiLocation).toString();

const createEmail = () => `${randomUUID()}@example.com`;

async function seedUser(
  email: string,
  preset: UserPreset,
  overrides: Record<string, boolean>
) {
  if (preset === 'new' && Object.keys(overrides).length === 0) return;

  const args = [seedScriptPath, '--email', email];

  if (preset === 'new') {
    args.push('--new-user');
  } else if (preset !== 'development') {
    args.push(`--${preset}-user`);
  }

  for (const [property, value] of Object.entries(overrides)) {
    args.push(value ? '--set-true' : '--set-false', property);
  }

  await execFileP(process.execPath, args);
}

async function getUsername(request: APIRequestContext) {
  const response = await request.get(getApiUrl('/user/session-user'));

  if (response.status() !== 200) {
    throw new Error(
      `Could not get the isolated user: /user/session-user returned ${response.status()}.`
    );
  }

  const body = (await response.json()) as { result?: unknown };

  if (typeof body.result !== 'string') {
    throw new Error(
      'Could not get the isolated user: /user/session-user did not return a username.'
    );
  }

  return body.result;
}

const getCsrfToken = async (request: APIRequestContext) =>
  (await request.storageState()).cookies.find(
    cookie => cookie.name === 'csrf_token'
  )?.value;

async function deleteAccount(request: APIRequestContext) {
  const csrfToken = await getCsrfToken(request);
  if (!csrfToken) {
    throw new Error(
      'Could not clean up the isolated user: CSRF token missing.'
    );
  }

  const response = await request.post(getApiUrl('/account/delete'), {
    data: {},
    headers: { 'csrf-token': csrfToken }
  });

  if (response.status() !== 200) {
    const body = await response.text();
    throw new Error(
      `Could not clean up the isolated user: /account/delete returned ${response.status()}: ${body}`
    );
  }
}

export const test = base.extend<IsolatedUserFixtures>({
  userPreset: ['new', { option: true }],
  userOverrides: [{}, { option: true }],

  isolatedUser: async ({ playwright, userOverrides, userPreset }, use) => {
    const email = createEmail();
    const request = await playwright.request.newContext({
      storageState: { cookies: [], origins: [] }
    });
    let signedIn = false;

    try {
      const signInUrl = new URL('/signin', apiLocation);
      signInUrl.searchParams.set('email', email);

      const response = await request.get(signInUrl.toString(), {
        maxRedirects: 0
      });
      const storageState = await request.storageState();
      signedIn = storageState.cookies.some(
        cookie => cookie.name === 'jwt_access_token'
      );

      if (response.status() !== 302) {
        throw new Error(
          `Could not create the isolated user: /signin returned ${response.status()}.`
        );
      }

      if (!signedIn) {
        throw new Error(
          'Could not create the isolated user: /signin did not set an access token.'
        );
      }

      await seedUser(email, userPreset, userOverrides);
      const username = await getUsername(request);

      await use({ email, storageState, username });
    } finally {
      try {
        if (signedIn) await deleteAccount(request);
      } finally {
        await request.dispose();
      }
    }
  },

  storageState: async ({ isolatedUser }, use) => {
    await use(isolatedUser.storageState);
  }
});

export { expect } from '@playwright/test';
