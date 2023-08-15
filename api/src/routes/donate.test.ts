import { devLogin, setupServer, superRequest } from '../../jest.utils';

describe('Donate', () => {
  setupServer();

  describe('Authenticated User', () => {
    let setCookies: string[];

    beforeEach(async () => {
      setCookies = await devLogin();
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

        expect(response.body).toEqual({
          isDonating: true
        });
        expect(response.status).toBe(200);
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
