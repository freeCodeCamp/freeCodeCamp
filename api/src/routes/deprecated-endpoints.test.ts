import request from 'supertest';

import { build } from '../app';
import { endpoints } from './deprecated-endpoints';

describe('Deprecated endpoints', () => {
  let fastify: undefined | Awaited<ReturnType<typeof build>>;

  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();
  }, 20000);

  afterAll(async () => {
    await fastify?.close();
  });

  endpoints.forEach(([endpoint, method]) => {
    test(`${method} ${endpoint} returns 410 status code with "info" message`, async () => {
      const response = await request(fastify?.server)[
        method.toLowerCase() as 'get' | 'post'
      ](endpoint);

      expect(response.status).toBe(410);
      expect(response.body).toStrictEqual({
        message: {
          type: 'info',
          message: 'Please reload the app, this feature is no longer available.'
        }
      });
    });
  });
});
