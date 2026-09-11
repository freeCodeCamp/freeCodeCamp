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

type IsolatedUserFixtures = {
  createUser: (options?: UserOptions) => Promise<IsolatedUser>;
  isolatedUser: IsolatedUser;
  userOverrides: Record<string, boolean>;
  userPreset: UserPreset;
  userRelations: UserRelations;
};

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';
const getApiUrl = (path: string) => new URL(path, apiLocation).toString();

export const test = base.extend<IsolatedUserFixtures>({
  userPreset: ['certified', { option: true }],
  userOverrides: [{}, { option: true }],
  userRelations: [{}, { option: true }],

  createUser: async ({ playwright }, use, testInfo) => {
    const users = new Map<string, string | undefined>();

    try {
      await use(
        async ({ preset = 'new', overrides = {}, relations = {} } = {}) => {
          // Also isolate retries, browser projects and separate test invocations.
          const email = `test-user-${testInfo.workerIndex}-${randomUUID()}@example.com`;
          // Keep a cleanup reference even if setup fails before we learn the ID.
          users.set(email, undefined);
          const request = await playwright.request.newContext({
            storageState: { cookies: [], origins: [] }
          });

          try {
            const signInUrl = new URL('/signin', apiLocation);
            signInUrl.searchParams.set('email', email);
            const response = await request.get(signInUrl.toString(), {
              maxRedirects: 0
            });
            const storageState = await request.storageState();

            if (
              response.status() !== 302 ||
              !storageState.cookies.some(
                cookie => cookie.name === 'jwt_access_token'
              )
            ) {
              throw new Error(
                `Could not sign in the isolated user: /signin returned ${response.status()}.`
              );
            }

            const session = await request.get(getApiUrl('/user/session-user'));
            const body = (await session.json()) as {
              result?: string;
              user?: Record<string, { id: string }>;
            };
            const username = body.result;
            const user = username ? body.user?.[username] : undefined;
            if (session.status() !== 200 || !username || !user?.id) {
              throw new Error(
                'Could not get the isolated user from /user/session-user.'
              );
            }

            users.set(email, user.id);
            const { unsubscribeId } = await seedIsolatedUser(
              email,
              preset,
              overrides,
              relations
            );
            return {
              email,
              storageState,
              username,
              id: user.id,
              unsubscribeId
            };
          } finally {
            await request.dispose();
          }
        }
      );
    } finally {
      await Promise.all(
        Array.from(users, ([email, id]) =>
          removeIsolatedUser(id ? { id } : { email })
        )
      );
    }
  },

  isolatedUser: async (
    { createUser, userOverrides, userPreset, userRelations },
    use
  ) => {
    await use(
      await createUser({
        preset: userPreset,
        overrides: userOverrides,
        relations: userRelations
      })
    );
  },

  storageState: async ({ isolatedUser }, use) => {
    await use(isolatedUser.storageState);
  },

  page: async ({ page, isolatedUser, storageState }, use) => {
    // Signed-out tests still sign in through the real dev-auth endpoint, using
    // their own account when a link or redirect takes them to /signin.
    // Routing disables the browser cache, so only install it for signed-out tests.
    if (
      typeof storageState !== 'string' &&
      !storageState?.cookies.some(cookie => cookie.name === 'jwt_access_token')
    ) {
      await page.route(
        url =>
          url.origin === new URL(apiLocation).origin &&
          url.pathname === '/signin',
        async route => {
          const url = new URL(route.request().url());
          url.searchParams.set('email', isolatedUser.email);
          await route.continue({ url: url.toString() });
        }
      );
    }
    await use(page);
  }
});

export { expect } from '@playwright/test';
