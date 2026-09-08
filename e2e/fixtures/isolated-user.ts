import { randomUUID } from 'node:crypto';

import { test as base, type APIRequestContext } from '@playwright/test';

type UserStorageState = Awaited<ReturnType<APIRequestContext['storageState']>>;

type IsolatedUser = {
  email: string;
  storageState: UserStorageState;
};

type IsolatedUserFixtures = {
  isolatedUser: IsolatedUser;
};

const apiLocation = process.env.API_LOCATION ?? 'http://localhost:3000';

const getApiUrl = (path: string) => new URL(path, apiLocation).toString();

const createEmail = () => `${randomUUID()}@example.com`;

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
  isolatedUser: async ({ playwright }, use) => {
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

      await use({ email, storageState });
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
