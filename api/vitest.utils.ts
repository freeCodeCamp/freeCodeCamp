/* eslint-disable jsdoc/require-jsdoc */
import { beforeAll, afterAll, expect, vi } from 'vitest';
import request from 'supertest';

import { build, buildOptions } from './src/app.js';
import { createUserInput } from './src/utils/create-user.js';
import { examJson } from './__mocks__/exam.js';
import { CSRF_COOKIE, CSRF_HEADER } from './src/plugins/csrf.js';

type FastifyTestInstance = Awaited<ReturnType<typeof build>>;

declare global {
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
 * @param resource - The URL of the resource to be requested.
 * @param config - The configuration for the request.
 * @param config.method - The HTTP method to be used.
 * @param config.setCookies - The cookies to be set in the request.
 * @param options - Additional options for the request.
 * @param options.sendCSRFToken - Whether to send the CSRF token in the request (default: true).
 * @returns The request object.
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
 * @param config.method - HTTP method.
 * @param config.setCookies - Cookies to be set in the request.
 * @returns A superRequest function with the desired method and setCookies.
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
      delete buildOptions.loggerInstance;
    }
    fastify = await build(buildOptions);
    await fastify.ready();

    await checkCanConnectToDb(fastify.prisma);

    // Prisma does not support TTL indexes in the schema yet, so, to avoid
    // conflicts with the TTL index in the sessions collection, we need to
    // create it manually (before interacting with the db in any way). Also,
    // to save time, we create all other indexes so we don't need to invoke
    // `prisma db push` (which is relatively slow).

    await Promise.all(
      indexData.map(async ({ collection, indexes }) => {
        await fastify.prisma.$runCommandRaw({
          createIndexes: collection,
          indexes
        });
      })
    );

    global.fastifyTestInstance = fastify;
    // allow a little time to setup the db
  }, 10000);

  afterAll(async () => {
    if (!global.fastifyTestInstance)
      throw Error(`fastifyTestInstance was not created. Typically this means that something went wrong when building the fastify instance.
If you are seeing this error, the root cause is likely an error thrown in the beforeAll hook.`);
    await fastifyTestInstance.prisma.$runCommandRaw({ dropDatabase: 1 });

    await fastifyTestInstance.close();
  });
}

// demoUser _id to allow testing with mock data
export const defaultUserId = '5bd30e0f1caf6ac3ddddddb5';
export const defaultUserEmail = 'foo@bar.com';
export const defaultUsername = 'fcc-test-user';

export const resetDefaultUser = async (): Promise<void> => {
  await fastifyTestInstance.prisma.user.deleteMany({
    where: { OR: [{ id: defaultUserId }, { email: defaultUserEmail }] }
  });

  await fastifyTestInstance.prisma.user.create({
    data: {
      ...createUserInput(defaultUserEmail),
      id: defaultUserId,
      username: defaultUsername
    }
  });
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

/**
 * Utility type to recursively replace `Date` with `string`.
 */
export type ReplaceDates<T> = T extends Date
  ? string
  : T extends (infer U)[]
    ? ReplaceDates<U>[]
    : T extends Record<string, unknown>
      ? { [K in keyof T]: ReplaceDates<T[K]> }
      : T;

/**
 * Recursively finds and converts Date objects to ISO strings while preserving shape.
 */
export function serializeDates<T>(data: T): ReplaceDates<T> {
  if (data === null || data === undefined) {
    return data as ReplaceDates<T>;
  }

  // Preserve Vitest/Jest asymmetric matchers (e.g., expect.any(Number))
  if (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as { asymmetricMatch?: unknown }).asymmetricMatch ===
      'function'
  ) {
    return data as unknown as ReplaceDates<T>;
  }

  if (data instanceof Date) {
    return data.toISOString() as ReplaceDates<T>;
  }

  if (Array.isArray(data)) {
    return (data as unknown[]).map(item =>
      serializeDates(item)
    ) as ReplaceDates<T>;
  }

  if (typeof data === 'object') {
    const entries = Object.entries(data as Record<string, unknown>).map(
      ([key, value]) => [key, serializeDates(value)] as const
    );
    return Object.fromEntries(entries) as ReplaceDates<T>;
  }

  return data as ReplaceDates<T>;
}
