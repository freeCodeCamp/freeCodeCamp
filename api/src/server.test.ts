import request, { Response } from 'supertest';

import { build } from './app';

describe('GET /', () => {
  let res: undefined | Response;
  let fastify: undefined | Awaited<ReturnType<typeof build>>;

  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();
  }, 20000);

  afterAll(async () => {
    // Due to a prisma bug, this is not enough, we need to --force-exit jest:
    // https://github.com/prisma/prisma/issues/18146
    await fastify?.close();
  });

  test('have a 200 response', async () => {
    res = await request(fastify?.server).get('/');
    expect(res?.statusCode).toBe(200);
  });

  test('return { "hello": "world"}', () => {
    expect(res?.body).toEqual({ hello: 'world' });
  });
});
