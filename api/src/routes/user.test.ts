import request from 'supertest';

import { setupServer, superRequest } from '../../jest.utils';

describe('userRoutes', () => {
  setupServer();

  describe('Authenticated user', () => {
    let setCookies: string[];

    beforeAll(async () => {
      const res = await request(fastifyTestInstance?.server).get(
        '/auth/dev-callback'
      );
      setCookies = res.get('Set-Cookie');
    });

    describe('/account', () => {
      test('DELETE returns 200 status code with empty object', async () => {
        const response = await superRequest('/user/account', {
          method: 'DELETE',
          setCookies
        });

        const userCount = await fastifyTestInstance?.prisma.user.count({
          where: { email: 'foo@bar.com' }
        });

        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({});
        expect(userCount).toBe(0);
      });
    });
  });

  describe('Unauthenticated user', () => {
    // TODO: get CSRF cookies when that PR is in.
    describe('/account', () => {
      test('DELETE returns 401 status code with error message', async () => {
        const response = await superRequest('/user/account', {
          method: 'DELETE'
        });

        expect(response?.statusCode).toBe(401);
      });
    });
  });
});
