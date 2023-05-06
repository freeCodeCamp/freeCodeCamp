import request from 'supertest';

import { build } from '../app';

describe('userRoutes', () => {
  let fastify: undefined | Awaited<ReturnType<typeof build>>;

  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();
  }, 20000);

  afterAll(async () => {
    await fastify?.close();
  });

  describe('Authenticated user', () => {
    let cookies: string[];

    beforeAll(async () => {
      const res = await request(fastify?.server).get('/auth/dev-callback');
      cookies = res.get('Set-Cookie');
    });

    describe('/account', () => {
      test('DELETE returns 200 status code with empty object', async () => {
        const response = await request(fastify?.server)
          .delete('/user/account')
          .set('Cookie', cookies);

        const userCount = await fastify?.prisma.user.count({
          where: { email: 'foo@bar.com' }
        });

        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({});
        expect(userCount).toBe(0);
      });
    });
  });

  describe('Unauthenticated user', () => {
    describe('/account', () => {
      test('DELETE returns 401 status code with error message', async () => {
        const response = await request(fastify?.server).delete('/user/account');

        expect(response?.statusCode).toBe(401);
      });
    });
  });
});
