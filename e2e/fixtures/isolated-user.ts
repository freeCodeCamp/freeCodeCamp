import { test as base, type APIRequestContext } from '@playwright/test';

import {
  removeIsolatedUser,
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
  isolatedUser: IsolatedUser;
  userOverrides: Record<string, boolean>;
  userPreset: UserPreset;
};

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';
const getApiUrl = (path: string) => new URL(path, apiLocation).toString();

async function signIn(request: APIRequestContext, email: string) {
  const url = new URL('/signin', apiLocation);
  url.searchParams.set('email', email);

  const response = await request.get(url.toString(), { maxRedirects: 0 });
  if (response.status() !== 302) {
    throw new Error(
      `Could not sign in the isolated user: /signin returned ${response.status()}.`
    );
  }

  const storageState = await request.storageState();
  const hasAccessToken = storageState.cookies.some(
    cookie => cookie.name === 'jwt_access_token'
  );

  if (!hasAccessToken) {
    throw new Error(
      'Could not sign in the isolated user: /signin did not set an access token.'
    );
  }

  return storageState;
}

async function getSessionUser(request: APIRequestContext) {
  const response = await request.get(getApiUrl('/user/session-user'));
  if (response.status() !== 200) {
    throw new Error(
      `Could not get the isolated user: /user/session-user returned ${response.status()}.`
    );
  }

  const body = (await response.json()) as {
    result?: string;
    user?: Record<string, { id: string }>;
  };
  const username = body.result;
  const user = username ? body.user?.[username] : undefined;

  if (!username || !user?.id) {
    throw new Error('Could not get the isolated user from /user/session-user.');
  }

  return { id: user.id, username };
}

export const test = base.extend<IsolatedUserFixtures>({
  userPreset: ['new', { option: true }],
  userOverrides: [{}, { option: true }],

  isolatedUser: async (
    { playwright, userOverrides, userPreset },
    use,
    testInfo
  ) => {
    // Tests in a worker run sequentially and delete the account after each test.
    const email = `test-user-${testInfo.workerIndex}@example.com`;
    const request = await playwright.request.newContext({
      storageState: { cookies: [], origins: [] }
    });
    let id: string | undefined;

    try {
      const storageState = await signIn(request, email);
      const user = await getSessionUser(request);
      // Keep the ID for cleanup even if the test renames or deletes the user.
      id = user.id;

      await seedIsolatedUser(email, userPreset, userOverrides);
      await use({ email, storageState, username: user.username });
    } finally {
      try {
        await removeIsolatedUser(id ? { id } : { email });
      } finally {
        await request.dispose();
      }
    }
  },

  storageState: async ({ isolatedUser }, use) => {
    await use(isolatedUser.storageState);
  },

  context: async ({ context, isolatedUser }, use) => {
    // Keep sign-in tied to this account on every page, including popups and
    // signing back in after logout. Initial cookies do not determine identity.
    await context.route(
      url =>
        url.origin === new URL(apiLocation).origin &&
        url.pathname === '/signin',
      async route => {
        const url = new URL(route.request().url());
        url.searchParams.set('email', isolatedUser.email);
        await route.continue({ url: url.toString() });
      }
    );
    await use(context);
  }
});

export { expect } from '@playwright/test';
