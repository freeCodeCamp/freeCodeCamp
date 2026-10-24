import { test as base, type APIRequestContext } from '@playwright/test';

import {
  seedIsolatedUser,
  type UserPreset
} from '@freecodecamp/scripts-seed/seed-isolated-user';

type UserStorageState = Awaited<ReturnType<APIRequestContext['storageState']>>;

type IsolatedUser = {
  email: string;
  storageState: UserStorageState;
  username: string;
};

type IsolatedUserFixtures = {
  createUser: (
    preset?: UserPreset,
    overrides?: Record<string, boolean>
  ) => Promise<IsolatedUser>;
  isolatedUser: IsolatedUser;
  userOverrides: Record<string, boolean>;
  userPreset: UserPreset;
};

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';

const getApiUrl = (path: string) => new URL(path, apiLocation).toString();

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

  // Cleanup returns 401 when the test has already deleted its account.
  if (response.status() !== 200 && response.status() !== 401) {
    const body = await response.text();
    throw new Error(
      `Could not clean up the isolated user: /account/delete returned ${response.status()}: ${body}`
    );
  }
}

async function cleanupUsers(cleanups: (() => Promise<void>)[]) {
  // Attempt every cleanup even if another account could not be deleted.
  const results = await Promise.allSettled(cleanups.map(cleanup => cleanup()));
  for (const result of results) {
    if (result.status === 'rejected') throw result.reason;
  }
}

export const test = base.extend<IsolatedUserFixtures>({
  userPreset: ['new', { option: true }],
  userOverrides: [{}, { option: true }],

  createUser: async ({ playwright }, use, testInfo) => {
    const cleanups: (() => Promise<void>)[] = [];
    let userIndex = 0;

    // Tests in a worker run sequentially and delete the account after each test.
    const createUser: IsolatedUserFixtures['createUser'] = async (
      preset = 'new',
      overrides = {}
    ) => {
      const email = `test-user-${testInfo.workerIndex}-${userIndex++}@example.com`;
      const request = await playwright.request.newContext({
        storageState: { cookies: [], origins: [] }
      });
      let signedIn = false;

      cleanups.push(async () => {
        try {
          if (signedIn) await deleteAccount(request);
        } finally {
          await request.dispose();
        }
      });

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

      await seedIsolatedUser(email, preset, overrides);
      const username = await getUsername(request);

      return { email, storageState, username };
    };

    try {
      await use(createUser);
    } finally {
      await cleanupUsers(cleanups);
    }
  },

  isolatedUser: async ({ createUser, userOverrides, userPreset }, use) => {
    await use(await createUser(userPreset, userOverrides));
  },

  storageState: async ({ isolatedUser }, use) => {
    await use(isolatedUser.storageState);
  }
});

export { expect } from '@playwright/test';
