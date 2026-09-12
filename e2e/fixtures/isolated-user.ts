import { randomUUID } from 'node:crypto';
import { test as base, type APIRequestContext } from '@playwright/test';

import {
  removeIsolatedUser,
  seedIsolatedUser,
  type UserPreset,
  type UserRelations
} from '@freecodecamp/scripts-seed/seed-isolated-user';

type UserStorageState = Awaited<ReturnType<APIRequestContext['storageState']>>;

type IsolatedUser = {
  email: string;
  id: string;
  storageState: UserStorageState;
  username: string;
  unsubscribeId: string;
};

type UserOptions = {
  preset?: UserPreset;
  overrides?: Record<string, boolean>;
  relations?: UserRelations;
};

type CreatedUser = {
  email: string;
  id?: string;
};

type IsolatedUserFixtures = {
  createUser: (options?: UserOptions) => Promise<IsolatedUser>;
  isolatedUser: IsolatedUser;
  userOverrides: Record<string, boolean>;
  userPreset: UserPreset;
  userRelations: UserRelations;
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
  userPreset: ['certified', { option: true }],
  userOverrides: [{}, { option: true }],
  userRelations: [{}, { option: true }],

  createUser: async ({ playwright }, use, testInfo) => {
    const createdUsers: CreatedUser[] = [];
    const pendingCreations: Promise<IsolatedUser>[] = [];

    async function createIsolatedUser({
      preset = 'new',
      overrides = {},
      relations = {}
    }: UserOptions = {}): Promise<IsolatedUser> {
      // Also isolate retries, browser projects and separate test invocations.
      const email = `test-user-${testInfo.workerIndex}-${randomUUID()}@example.com`;
      const user: CreatedUser = { email };
      // Register before sign-in so cleanup also covers failed setup.
      createdUsers.push(user);

      const request = await playwright.request.newContext({
        storageState: { cookies: [], origins: [] }
      });

      try {
        const storageState = await signIn(request, email);
        const { id, username } = await getSessionUser(request);
        // Use the ID for cleanup even if the test renames or deletes the user.
        user.id = id;

        const { unsubscribeId } = await seedIsolatedUser(
          email,
          preset,
          overrides,
          relations
        );

        return { id, email, username, unsubscribeId, storageState };
      } finally {
        await request.dispose();
      }
    }

    function createUser(options?: UserOptions) {
      const creation = createIsolatedUser(options);
      pendingCreations.push(creation);
      return creation;
    }

    try {
      await use(createUser);
    } finally {
      // Promise.all in a test can reject while another signup is still running.
      // Let every signup finish before deleting the accounts it created.
      await Promise.allSettled(pendingCreations);
      await Promise.all(
        createdUsers.map(({ email, id }) =>
          removeIsolatedUser(id ? { id } : { email })
        )
      );
    }
  },

  isolatedUser: async (
    { createUser, userOverrides, userPreset, userRelations },
    use
  ) => {
    const user = await createUser({
      preset: userPreset,
      overrides: userOverrides,
      relations: userRelations
    });
    await use(user);
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
