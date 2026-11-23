import {
  test as base,
  type APIRequestContext,
  type Page
} from '@playwright/test';

import {
  updateIsolatedUser,
  type UserPreset
} from '@freecodecamp/scripts-seed/seed-isolated-user';

type UserStorageState = Awaited<ReturnType<APIRequestContext['storageState']>>;

type IsolatedUser = {
  email: string;
  storageState: UserStorageState;
  username: string;
};

type IsolatedUserFixtures = {
  /**
   * Creates an additional account, cleaned up after the test, without switching
   * the page's session. Uses its own arguments, independently of test.use().
   */
  createUser: (
    preset?: UserPreset,
    overrides?: Record<string, boolean>
  ) => Promise<IsolatedUser>;
  /** Routes sign-in to isolatedUser; preserves the page's initial signed-in or guest state. */
  isolatedPage: Page;
  /** The account used to authenticate the built-in page, context and request by default. */
  isolatedUser: IsolatedUser;
  /** Fields applied to isolatedUser after its preset. */
  userOverrides: Record<string, boolean>;
  /** Data applied to isolatedUser, such as completed challenges and certifications. */
  userPreset: UserPreset;
};

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';

const getApiUrl = (path: string) => new URL(path, apiLocation).toString();

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

/**
 * Tests start signed in as their own account, which is deleted after each test.
 * The built-in page, context and request receive its cookies through storageState.
 *
 * Choose account data with test.use({ userPreset: 'certified' }). The default
 * 'new' preset leaves the freshly created account's data unchanged; it still
 * provides a signed-in session.
 *
 * For guest tests, use test.use({ storageState: { cookies: [], origins: [] } }).
 * If a guest test needs to sign in through the UI, request isolatedPage so the
 * sign-in flow selects isolatedUser instead of the shared development account.
 */
export const test = base.extend<IsolatedUserFixtures>({
  // Default account data; configurable per file or describe block with test.use().
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

      const username = await updateIsolatedUser(email, preset, overrides);

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

  isolatedPage: async ({ page, isolatedUser }, use) => {
    const signInUrl = new URL('/signin', apiLocation);

    // Keep the real sign-in flow while selecting this test's account in dev auth.
    await page.route(
      url =>
        url.origin === signInUrl.origin && url.pathname === signInUrl.pathname,
      async route => {
        const url = new URL(route.request().url());
        url.searchParams.set('email', isolatedUser.email);
        await route.continue({ url: url.toString() });
      }
    );

    await use(page);
  },

  // Playwright uses this implicitly for the built-in page, context and request fixtures.
  storageState: async ({ isolatedUser }, use) => {
    await use(isolatedUser.storageState);
  }
});

export { expect } from '@playwright/test';
