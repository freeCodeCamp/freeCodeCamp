import request from 'supertest';

import { build } from './src/app';
import { createUserInput } from './src/utils/create-user';
import { examJson } from './__mocks__/exam';

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
  const csrfSetCookie = setCookies.find(str => str.includes('csrf_token'));
  const [csrfCookie] = csrfSetCookie?.split(';') ?? [];
  const [_key, csrfToken] = csrfCookie?.split('=') ?? [];

  return csrfToken;
};

export const ORIGIN = 'https://www.freecodecamp.org';

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
    void req.set('CSRF-Token', csrfToken);
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
    collection: 'UserRateLimit',
    indexes: [
      {
        key: { expirationDate: 1 },
        name: 'expirationDate_1',
        expireAfterSeconds: 0
      }
    ]
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

export function setupServer(): void {
  let fastify: FastifyTestInstance;
  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();

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

    // Due to a prisma bug, this is not enough, we need to --force-exit jest:
    // https://github.com/prisma/prisma/issues/18146
    await fastifyTestInstance.close();
  });
}

export const defaultUserId = '64c7810107dd4782d32baee7';
export const defaultUserEmail = 'foo@bar.com';
export const defaultUsername = 'fcc-test-user';

export async function devLogin(): Promise<string[]> {
  await fastifyTestInstance.prisma.user.deleteMany({
    where: { email: 'foo@bar.com' }
  });

  await fastifyTestInstance.prisma.user.create({
    data: {
      ...createUserInput(defaultUserEmail),
      id: defaultUserId,
      username: defaultUsername
    }
  });
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
  return jest.fn().mockResolvedValue(
    Promise.resolve({
      ok,
      json: () => Promise.resolve(body)
    })
  );
}
