import { createRequire } from 'node:module';
import type { APIResponse } from '@playwright/test';
import { removeIsolatedUser } from '@freecodecamp/scripts-seed/seed-isolated-user';

import { expect, test as base } from './fixtures/isolated-user';

const requireFromSeed = createRequire(
  require.resolve('@freecodecamp/scripts-seed/seed-isolated-user')
);
const { MongoClient } = requireFromSeed('mongodb');
const client = new MongoClient(process.env.MONGOHQ_URL);
const users = client.db('freecodecamp').collection('user');
const ownedEmails: string[] = [];

let failFirstSignIn = false;
let failSession = false;
let omitAccessToken = false;
let slowSignIn: Promise<void> | undefined;
let releaseSlowSignIn: () => void = () => undefined;
let releaseTimer: ReturnType<typeof setTimeout> | undefined;
let creations: Promise<{ email: string }>[] = [];

const test = base.extend({
  playwright: async ({ playwright }, use) => {
    // Keep Playwright's methods and internal state intact while injecting faults
    // into the factory's requests. Sign-in and cleanup still use the real API/DB.
    const intercepted = Object.assign(Object.create(playwright), {
      request: Object.create(playwright.request) as typeof playwright.request
    }) as typeof playwright;
    intercepted.request.newContext = async options => {
      const context = await playwright.request.newContext(options);
      const get = context.get.bind(context);

      context.get = async (url, options) => {
        const parsed = new URL(url);
        if (parsed.pathname === '/signin') {
          ownedEmails.push(parsed.searchParams.get('email')!);
          if (failFirstSignIn) {
            failFirstSignIn = false;
            throw new Error('Injected sign-in failure');
          }
          await slowSignIn;
        }

        if (parsed.pathname === '/user/session-user' && failSession) {
          return {
            status: () => 503,
            json: () =>
              Promise.reject(new SyntaxError('Service unavailable is not JSON'))
          } as unknown as APIResponse;
        }

        const response = await get(url, options);
        if (parsed.pathname === '/signin' && omitAccessToken) {
          context.storageState = () =>
            Promise.resolve({ cookies: [], origins: [] });
        }
        return response;
      };

      return context;
    };

    await use(intercepted);
  }
});

// API-only tests should not create an implicit browser account. The following
// serial test observes cleanup after the preceding test's fixtures finish.
test.use({ storageState: { cookies: [], origins: [] } });
test.describe.configure({ mode: 'serial' });

test('one concurrent creation fails while another is still signing in', async ({
  createUser
}) => {
  failFirstSignIn = true;
  slowSignIn = new Promise(resolve => {
    releaseSlowSignIn = resolve;
  });
  creations = [createUser(), createUser()];

  await expect(Promise.all(creations)).rejects.toThrow(
    'Injected sign-in failure'
  );
  // Ensure the second request is waiting before allowing teardown to begin.
  await expect.poll(() => ownedEmails.length).toBe(2);
  // Let correct cleanup finish without waiting for the observer test to start.
  releaseTimer = setTimeout(releaseSlowSignIn, 2000);
});

test('cleanup waits for the pending creation and removes its account', async () => {
  // If cleanup finishes too early, this release creates an account after teardown
  // and the database assertion below fails.
  releaseSlowSignIn();
  const results = await Promise.allSettled(creations);
  const successful = results.filter(result => result.status === 'fulfilled');

  expect(successful).toHaveLength(1);
  expect(ownedEmails).toHaveLength(2);
  expect(await users.countDocuments({ email: { $in: ownedEmails } })).toBe(0);
  slowSignIn = undefined;
});

test('setup errors preserve HTTP and missing-cookie diagnostics', async ({
  createUser
}) => {
  failSession = true;
  try {
    await expect(createUser()).rejects.toThrow(/\/user\/session-user.*503/);
  } finally {
    failSession = false;
  }

  omitAccessToken = true;
  try {
    await expect(createUser()).rejects.toThrow(
      '/signin did not set an access token.'
    );
  } finally {
    omitAccessToken = false;
  }

  expect(ownedEmails).toHaveLength(4);
  // Both sign-ins created real accounts before setup failed. Teardown must use
  // their emails because the factory never received either account's ID.
  expect(await users.countDocuments({ email: { $in: ownedEmails } })).toBe(2);
});

test('cleanup removes the accounts whose setup failed', async () => {
  expect(await users.countDocuments({ email: { $in: ownedEmails } })).toBe(0);
});

test.afterAll(async () => {
  clearTimeout(releaseTimer);
  releaseSlowSignIn();
  await Promise.allSettled(creations);
  try {
    // Also remove owned accounts when a regression makes an assertion fail.
    for (const email of ownedEmails) {
      await removeIsolatedUser({ email });
    }
  } finally {
    await client.close();
  }
});
