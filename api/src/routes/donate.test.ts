import request from 'supertest';

import { setupServer, superRequest } from '../../jest.utils';

const baseProfileUI = {
  isLocked: false,
  showAbout: false,
  showCerts: false,
  showDonation: false,
  showHeatMap: false,
  showLocation: false,
  showName: false,
  showPoints: false,
  showPortfolio: false,
  showTimeLine: false
};

describe('Donate', () => {
  setupServer();

  describe('Authenticated User', () => {
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      await fastifyTestInstance.prisma.user.updateMany({
        where: { email: 'foo@bar.com' },
        data: { profileUI: baseProfileUI }
      });
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
          message: 'success',
          type: 'success'
        });
      });

      // it should error if the body is empty
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
