import request from 'supertest';

import { setupServer, superRequest } from '../../jest.utils';

describe('Donate', () => {
  setupServer();

  describe('Authenticated User', () => {
    let setCookies: string[];

    beforeEach(async () => {
      await fastifyTestInstance.prisma.user.updateMany({
        where: { email: 'foo@bar.com' },
        data: { isDonating: false }
      });
      const res = await request(fastifyTestInstance.server).get(
        '/auth/dev-callback'
      );
      setCookies = res.get('Set-Cookie');
    });

    describe('POST /donate/add-donation', () => {
      it('should return 200 and update the user', async () => {
        const response = await superRequest('/donate/add-donation', {
          method: 'POST',
          setCookies
        }).send({
          anything: true,
          itIs: 'ignored'
        });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          isDonating: true
        });
      });

      it('should return 400 if the user is already donating', async () => {
        const successResponse = await superRequest('/donate/add-donation', {
          method: 'POST',
          setCookies
        }).send({});

        expect(successResponse.status).toBe(200);

        const failResponse = await superRequest('/donate/add-donation', {
          method: 'POST',
          setCookies
        }).send({});

        expect(failResponse.status).toBe(400);
      });
    });
  });

  describe('Unauthenticated User', () => {
    describe('POST /donate/add-donation', () => {
      it('should return 403', async () => {
        const response = await superRequest('/donate/add-donation', {
          method: 'POST'
        }).send({
          isDonating: true
        });

        expect(response.status).toBe(403);
      });
    });
  });
});
