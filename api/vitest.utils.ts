import { beforeAll, afterAll, expect, vi } from 'vitest';
import request from 'supertest';

import { build, buildOptions } from './src/app';
import { createUserInput } from './src/utils/create-user';
import { examJson } from './__mocks__/exam';
import { CSRF_COOKIE, CSRF_HEADER } from './src/plugins/csrf';

type FastifyTestInstance = Awaited<ReturnType<typeof build>>;

declare global {
  // eslint-disable-next-line no-var
  var fastifyTestInstance: FastifyTestInstance;
}

type Options = {
  sendCSRFToken?: boolean;
};

const requests = {
  GET: (resource: string) => request(fastifyTestInstance?.server).get(resource),
  POST: (resource: string) =>
    request(fastifyTestInstance?.server).post(resource),
  PUT: (resource: string) => request(fastifyTestInstance?.server).put(resource),
  DELETE: (resource: string) =>
    request(fastifyTestInstance?.server).delete(resource)
};

export const getCsrfToken = (setCookies: string[]): string | undefined => {
  const csrfSetCookie = setCookies.find(str => str.includes(CSRF_COOKIE));
  const [csrfCookie] = csrfSetCookie?.split(';') ?? [];
  const [_key, csrfToken] = csrfCookie?.split('=') ?? [];

  return csrfToken;
};

const ORIGIN = 'https://www.freecodecamp.org';

export const getCookies = (setCookies: string[]): string => {
  for (const cookie of setCookies) {
    expect(cookie).toMatch(/.*=.*/);
  }
  return setCookies.map(cookie => cookie.split(';')[0]).join('; ');
};

/**
 * A wrapper around supertest that handles common setup for requests. Namely
 * setting the Origin header, cookies and CSRF token.
 *
 * @param resource - The URL of the resource to be requested
 * @param config - The configuration for the request
 * @param config.method - The HTTP method to be used
 * @param config.setCookies - The cookies to be set in the request
 * @param options - Additional options for the request
 * @param options.sendCSRFToken - Whether to send the CSRF token in the request (default: true)
 * @returns The request object
 */
export function superRequest(
  resource: string,
  config: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    setCookies?: string[];
  },
  options?: Options
): request.Test {
  const { method, setCookies } = config;
  const { sendCSRFToken = true } = options ?? {};

  const req = requests[method](resource).set('Origin', ORIGIN);

  if (setCookies) {
    void req.set('Cookie', getCookies(setCookies));
  }

  const csrfToken = (setCookies && getCsrfToken(setCookies)) ?? '';
  if (sendCSRFToken) {
    void req.set(CSRF_HEADER, csrfToken);
  }
  return req;
}

/**
 * Factory function for 'superRequest' allows for the creation of a concise
 * request function with the desired method and setCookies baked in.
 *
 * @param config
 * @param config.method - HTTP method
 * @param config.setCookies - Cookies to be set in the request
 * @returns A superRequest function with the desired method and setCookies
 */
export function createSuperRequest(config: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  setCookies?: string[];
}): (resource: string, options?: Options) => request.Test {
  return (resource, options) => superRequest(resource, config, options);
}

type IndexData = {
  collection: string;
  indexes: {
    key: Record<string, 1>;
    name: string;
    expireAfterSeconds?: number;
  }[];
};
const indexData: IndexData[] = [
  {
    collection: 'AccessToken',
    indexes: [
      {
        key: { userId: 1 },
        name: 'userId_1'
      }
    ]
  },
  {
    collection: 'Donation',
    indexes: [
      { key: { email: 1 }, name: 'email_1' },
      { key: { userId: 1 }, name: 'userId_1' }
    ]
  },
  {
    collection: 'MsUsername',
    indexes: [{ key: { userId: 1, id: 1 }, name: 'userId_1__id_1' }]
  },
  {
    collection: 'Survey',
    indexes: [{ key: { userId: 1 }, name: 'userId_1' }]
  },
  {
    collection: 'UserToken',
    indexes: [{ key: { userId: 1 }, name: 'userId_1' }]
  },
  {
    collection: 'sessions',
    indexes: [
      {
        key: { expires: 1 },
        name: 'expires_1',
        expireAfterSeconds: 0
      }
    ]
  },
  {
    collection: 'user',
    indexes: [
      {
        key: { email: 1, sendQuincyEmail: 1 },
        name: 'mailing-list-pull'
      },
      { key: { email: 1 }, name: 'email_1' },
      { key: { isDonating: 1 }, name: 'isDonating_1' },
      { key: { username: 1, id: 1 }, name: 'username_1__id_1' }
    ]
  }
];

export async function checkCanConnectToDb(
  prisma: FastifyTestInstance['prisma']
): Promise<void> {
  const countP = prisma.user.count();
  const delayedRejection = new Promise((_resolve, reject) =>
    setTimeout(
      () => reject(Error('unable to connect to Mongodb (timeout)')),
      1000
    )
  );
  await Promise.race([countP, delayedRejection]);
}

export function setupServer(): void {
  let fastify: FastifyTestInstance;
  beforeAll(async () => {
    if (process.env.FCC_ENABLE_TEST_LOGGING !== 'true') {
      // @ts-expect-error Disable logging by unsetting logger
      buildOptions.logger = undefined;
    }
    fastify = await build(buildOptions);
    await fastify.ready();

    await checkCanConnectToDb(fastify.prisma);

    // Prisma does not support TTL indexes in the schema yet, so, to avoid
    // conflicts with the TTL index in the sessions collection, we need to
    // create it manually (before interacting with the db in any way). Also,
    // to save time, we create all other indexes so we don't need to invoke
    // `prisma db push` (which is relatively slow).

    // Create indexes with retry logic to handle database conflicts
    for (const { collection, indexes } of indexData) {
      let retryCount = 0;
      const maxRetries = 3;

      while (retryCount < maxRetries) {
        try {
          await fastify.prisma.$runCommandRaw({
            createIndexes: collection,
            indexes
          });
          break; // Success, exit retry loop
        } catch (error) {
          retryCount++;

          if (
            error instanceof Error &&
            error.message.includes('DatabaseDropPending') &&
            retryCount < maxRetries
          ) {
            // Wait for database drop to complete
            await new Promise(resolve => setTimeout(resolve, 100 * retryCount));
            continue;
          }

          // For non-retryable errors or if we're out of retries, throw
          throw error;
        }
      }
    }

    global.fastifyTestInstance = fastify;
    // allow a little time to setup the db
  }, 15000); // Increased timeout to account for retries

  afterAll(async () => {
    if (!global.fastifyTestInstance)
      throw Error(`fastifyTestInstance was not created. Typically this means that something went wrong when building the fastify instance.
If you are seeing this error, the root cause is likely an error thrown in the beforeAll hook.`);

    await fastifyTestInstance.prisma.$runCommandRaw({ dropDatabase: 1 });

    // Due to a prisma bug, this is not enough, we need to --force-exit jest:
    // https://github.com/prisma/prisma/issues/18146
    await fastifyTestInstance.close();
  });
}

export const defaultUserId = '64c7810107dd4782d32baee7';
export const defaultUserEmail = 'foo@bar.com';
export const defaultUsername = 'fcc-test-user';

/**
 * Comprehensive database reset for test isolation
 * Clears all tables and recreates default test user
 */
export const resetDefaultUser = async (): Promise<void> => {
  const maxRetries = 3;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      // Comprehensive database cleanup in transaction
      await fastifyTestInstance.prisma.$transaction([
        // Clear all tables in dependency order (child tables first)
        fastifyTestInstance.prisma.authToken.deleteMany(),
        fastifyTestInstance.prisma.userToken.deleteMany(),
        fastifyTestInstance.prisma.msUsername.deleteMany(),
        fastifyTestInstance.prisma.survey.deleteMany(),
        fastifyTestInstance.prisma.examEnvironmentAuthorizationToken.deleteMany(),
        fastifyTestInstance.prisma.user.deleteMany()
      ]);

      // Small delay to ensure deletion is complete
      await new Promise(resolve => setTimeout(resolve, 10));

      // Create the default user
      await fastifyTestInstance.prisma.user.create({
        data: {
          ...createUserInput(defaultUserEmail),
          id: defaultUserId,
          username: defaultUsername
        }
      });

      // If we get here, the operation succeeded
      return;
    } catch (error) {
      retryCount++;

      // If it's a unique constraint error and we have retries left, wait and try again
      if (
        error instanceof Error &&
        error.message.includes('Unique constraint failed') &&
        retryCount < maxRetries
      ) {
        // Exponential backoff: 50ms, 100ms, 200ms
        const delay = 50 * Math.pow(2, retryCount - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }

      // If it's not a retryable error or we're out of retries, throw
      throw error;
    }
  }
};

export async function devLogin(): Promise<string[]> {
  await resetDefaultUser();
  const res = await superRequest('/signin', { method: 'GET' });
  expect(res.status).toBe(302);
  return res.get('Set-Cookie');
}

export async function seedExam(): Promise<void> {
  const query = { where: { id: examJson.id } };
  const testExamExists =
    await fastifyTestInstance.prisma.exam.findUnique(query);

  if (testExamExists) {
    await fastifyTestInstance.prisma.exam.deleteMany(query);
  }

  await fastifyTestInstance.prisma.exam.create({
    data: {
      ...examJson
    }
  });
}

export function createFetchMock({ ok = true, body = {} } = {}) {
  return vi.fn().mockResolvedValue(
    Promise.resolve({
      ok,
      json: () => Promise.resolve(body)
    })
  );
}
