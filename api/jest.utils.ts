import { execSync } from 'child_process';

import request from 'supertest';

import { build } from './src/app';
import { createUserInput } from './src/utils/create-user';
import { examJson } from './__mocks__/exam';
import { MONGOHQ_URL } from './src/utils/env';

type FastifyTestInstance = Awaited<ReturnType<typeof build>>;

declare global {
  // eslint-disable-next-line no-var
  var fastifyTestInstance: FastifyTestInstance;
}

type Options = {
  sendCSRFToken: boolean;
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
    void req.set('Cookie', setCookies);
  }

  const csrfToken = (setCookies && getCsrfToken(setCookies)) ?? '';
  if (sendCSRFToken) {
    void req.set('CSRF-Token', csrfToken);
  }
  return req;
}

export function createSuperRequest(config: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  setCookies?: string[];
}): (resource: string, options?: Options) => request.Test {
  return (resource, options) => superRequest(resource, config, options);
}

export function setupServer(): void {
  let fastify: FastifyTestInstance;
  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();

    // Prisma does not support TTL indexes in the schema yet, so, to avoid
    // conflicts with the TTL index in the sessions collection, we need to
    // create it manually (before interacting with the db in any way)
    await fastify.prisma.$runCommandRaw({
      createIndexes: 'sessions',
      indexes: [
        {
          key: { expires: 1 },
          name: 'expires_1',
          background: true,
          expireAfterSeconds: 0
        }
      ]
    });
    // push the schema to the test db to setup indexes, unique constraints, etc
    execSync('pnpm prisma db push -- --skip-generate', {
      env: {
        ...process.env,
        MONGOHQ_URL
      }
    });

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

export async function devLogin(): Promise<string[]> {
  await fastifyTestInstance.prisma.user.deleteMany({
    where: { email: 'foo@bar.com' }
  });

  await fastifyTestInstance.prisma.user.create({
    data: {
      ...createUserInput(defaultUserEmail),
      id: defaultUserId
    }
  });
  const res = await superRequest('/auth/dev-callback', { method: 'GET' });
  expect(res.status).toBe(200);
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
