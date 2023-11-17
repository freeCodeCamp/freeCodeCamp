/* eslint-disable @typescript-eslint/naming-convention */
import {
  createSuperRequest,
  devLogin,
  setupServer,
  superRequest
} from '../../jest.utils';

const chargeStripeCardReqBody = {
  paymentMethodId: 'UID',
  amount: 500,
  duration: 'month'
};
const mockSubCreate = jest.fn();
const generateMockSubCreate = (status: string) => () =>
  Promise.resolve({
    id: 'cust_111',
    latest_invoice: {
      payment_intent: {
        client_secret: 'superSecret',
        status
      }
    }
  });
const defaultError = () =>
  Promise.reject(new Error('Stripe encountered an error'));

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      customers: {
        create: jest.fn(() =>
          Promise.resolve({
            id: 'cust_111',
            name: 'Jest_User',
            currency: 'sgd',
            description: 'Jest User Account created'
          })
        )
      },
      subscriptions: {
        create: mockSubCreate
      }
    };
  });
});

describe('Donate', () => {
  setupServer();

  describe('Authenticated User', () => {
    let superPost: ReturnType<typeof createSuperRequest>;

    beforeEach(async () => {
      const setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
    });

    describe('POST /donate/charge-stripe-card', () => {
      it('should return 200 and update the user', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('we only care about specific error cases')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        expect(response.body).toEqual({ isDonating: true, type: 'success' });
        expect(response.status).toBe(200);
      });

      it('should return 402 with client_secret if subscription status requires source action', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('requires_source_action')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        expect(response.body).toEqual({
          type: 'UserActionRequired',
          message: 'Payment requires user action',
          client_secret: 'superSecret'
        });
        expect(response.status).toBe(402);
      });

      it('should return 402 if subscription status requires source', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('requires_source')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        expect(response.body).toEqual({
          type: 'PaymentMethodRequired',
          message: 'Card has been declined'
        });
        expect(response.status).toBe(402);
      });

      it('should return 400 if the user is already donating', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('still does not matter')
        );
        const successResponse = await superPost(
          '/donate/charge-stripe-card'
        ).send(chargeStripeCardReqBody);

        expect(successResponse.status).toBe(200);
        const failResponse = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        expect(failResponse.status).toBe(400);
      });

      it('should return 500 if Stripe encountes an error', async () => {
        mockSubCreate.mockImplementationOnce(defaultError);
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
          type: 'danger',
          message: 'Donation failed due to a server error.'
        });
      });
    });

    describe('POST /donate/add-donation', () => {
      it('should return 200 and update the user', async () => {
        const response = await superPost('/donate/add-donation').send({
          anything: true,
          itIs: 'ignored'
        });

        expect(response.body).toEqual({
          isDonating: true
        });
        expect(response.status).toBe(200);
      });

      it('should return 400 if the user is already donating', async () => {
        const successResponse = await superPost('/donate/add-donation').send(
          {}
        );
        expect(successResponse.status).toBe(200);
        const failResponse = await superPost('/donate/add-donation').send({});
        expect(failResponse.status).toBe(400);
      });
    });
  });

  describe('Unauthenticated User', () => {
    let setCookies: string[];
    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });
    const endpoints: { path: string; method: 'POST' }[] = [
      { path: '/donate/add-donation', method: 'POST' },
      { path: '/donate/charge-stripe-card', method: 'POST' }
    ];
    endpoints.forEach(({ path, method }) => {
      test(`${method} ${path} returns 401 status code with error message`, async () => {
        const response = await superRequest(path, {
          method,
          setCookies
        });
        expect(response.statusCode).toBe(401);
      });
    });
  });
});
