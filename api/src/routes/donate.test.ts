import request from 'supertest';

import { setupServer, superRequest } from '../../jest.utils';

describe('Donate', () => {
  setupServer();

  describe('Authenticated User', () => {
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      const res = await request(fastifyTestInstance.server).get(
        '/auth/dev-callback'
      );
      setCookies = res.get('Set-Cookie');
    });

    describe('POST /add-donation', () => {
      it('should return 200 and update the user', async () => {
        const response = await superRequest('/add-donation', {
          method: 'POST',
          setCookies
        }).send({
          isDonating: true
        });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          message: { isDonating: true },
          type: 'success'
        });
      });

      it('should return 400 if the body is empty', async () => {
        const response = await superRequest('/add-donation', {
          method: 'POST',
          setCookies
        }).send({});

        expect(response.status).toBe(400);
      });
    });
  });

  describe('Unauthenticated User', () => {
    describe('POST /add-donation', () => {
      it('should return 401', async () => {
        const response = await superRequest('/add-donation', {
          method: 'POST'
        }).send({
          isDonating: true
        });

        expect(response.status).toBe(403);
      });
    });
  });
});
