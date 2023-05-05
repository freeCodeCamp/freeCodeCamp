import request from 'supertest';

import { build } from './src/app';

declare global {
  // eslint-disable-next-line no-var
  var fastifyTestInstance: Awaited<ReturnType<typeof build>> | undefined;
}

// TODO: remove this function and use superRequest instead
export function superGet(endpoint: string): request.Test {
  return superRequest({
    method: 'GET',
    endpoint,
    setCookies: []
  });
}

type Options = {
  sendCSRFToken: boolean;
};

// TODO: remove this function and use superRequest instead
export function superPut(
  endpoint: string,
  setCookies: string[],
  opts?: Options
): request.Test {
  return superRequest(
    {
      method: 'PUT',
      endpoint,
      setCookies
    },
    opts
  );
}

/* eslint-disable @typescript-eslint/naming-convention */
const requests = {
  GET: (endpoint: string) => request(fastifyTestInstance?.server).get(endpoint),
  POST: (endpoint: string) =>
    request(fastifyTestInstance?.server).post(endpoint),
  PUT: (endpoint: string) => request(fastifyTestInstance?.server).put(endpoint)
};
/* eslint-enable @typescript-eslint/naming-convention */

export const getCsrfToken = (setCookies: string[]): string | undefined => {
  const csrfSetCookie = setCookies.find(str => str.includes('csrf_token'));
  const [csrfCookie] = csrfSetCookie?.split(';') ?? [];
  const [_key, csrfToken] = csrfCookie?.split('=') ?? [];

  return csrfToken;
};

export function superRequest(
  config: {
    method: 'GET' | 'POST' | 'PUT';
    endpoint: string;
    setCookies: string[];
  },
  options?: Options
): request.Test {
  const { method, endpoint, setCookies } = config;
  const { sendCSRFToken = true } = options ?? {};

  const req = requests[method](endpoint)
    .set('Origin', 'https://www.freecodecamp.org')
    .set('Cookie', setCookies);

  const csrfToken = getCsrfToken(setCookies);
  if (sendCSRFToken && csrfToken) {
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
