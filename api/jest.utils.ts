import request from 'supertest';

import { build } from './src/app';

declare global {
  // eslint-disable-next-line no-var
  var fastifyTestInstance: Awaited<ReturnType<typeof build>> | undefined;
}

type Options = {
  sendCSRFToken: boolean;
};

// TODO: remove this function and use superRequest instead
export function superPut(
  resource: string,
  setCookies: string[],
  opts?: Options
): request.Test {
  return superRequest(
    resource,
    {
      method: 'PUT',
      setCookies
    },
    opts
  );
}

/* eslint-disable @typescript-eslint/naming-convention */
const requests = {
  GET: (resource: string) => request(fastifyTestInstance?.server).get(resource),
  POST: (resource: string) =>
    request(fastifyTestInstance?.server).post(resource),
  PUT: (resource: string) => request(fastifyTestInstance?.server).put(resource)
};
/* eslint-enable @typescript-eslint/naming-convention */

export const getCsrfToken = (setCookies: string[]): string | undefined => {
  const csrfSetCookie = setCookies.find(str => str.includes('csrf_token'));
  const [csrfCookie] = csrfSetCookie?.split(';') ?? [];
  const [_key, csrfToken] = csrfCookie?.split('=') ?? [];

  return csrfToken;
};

export function superRequest(
  resource: string,
  config: {
    method: 'GET' | 'POST' | 'PUT';
    setCookies?: string[];
  },
  options?: Options
): request.Test {
  const { method, setCookies } = config;
  const { sendCSRFToken = true } = options ?? {};

  const req = requests[method](resource).set(
    'Origin',
    'https://www.freecodecamp.org'
  );

  if (setCookies) {
    void req.set('Cookie', setCookies);
  }

  const csrfToken = (setCookies && getCsrfToken(setCookies)) ?? '';
  if (sendCSRFToken) {
    void req.set('CSRF-Token', csrfToken);
  }
  return req;
}

export function setupServer(): void {
  let fastify: Awaited<ReturnType<typeof build>> | undefined;
  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();

    global.fastifyTestInstance = fastify;
  });

  afterAll(async () => {
    // Due to a prisma bug, this is not enough, we need to --force-exit jest:
    // https://github.com/prisma/prisma/issues/18146
    await fastifyTestInstance?.close();
  });
}
