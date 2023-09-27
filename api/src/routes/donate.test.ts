/* eslint-disable @typescript-eslint/naming-convention */
import { devLogin, setupServer, superRequest } from '../../jest.utils';

const mockSubCreate = jest.fn();
const subsDefaultReply = () =>
  Promise.resolve({
    id: 'cust_111',
    latest_invoice: {
      payment_intent: {
        client_secret: 'superSecret',
        status: 'intentStatus'
      }
    }
  });
const chargeStripeCardReqBody = {
  paymentMethodId: 'UID',
  amount: 500,
  duration: 'month'
};
const requiresSourceActionReply = () =>
  Promise.resolve({
    id: 'cust_111',
    latest_invoice: {
      payment_intent: {
        client_secret: 'superSecret',
        status: 'requires_source_action'
      }
    }
  });
const requiresSourceReply = () =>
  Promise.resolve({
    id: 'cust_111',
    latest_invoice: {
      payment_intent: {
        client_secret: 'superSecret',
        status: 'requires_source'
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
    let setCookies: string[];

    beforeEach(async () => {
      setCookies = await devLogin();
    });

    describe('POST /donate/charge-stripe-card', () => {
      it('should return 200 and update the user', async () => {
        mockSubCreate.mockImplementationOnce(subsDefaultReply);
        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send(chargeStripeCardReqBody);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ isDonating: true, type: 'success' });
      });

      it('should return 402 with client_secret if subscription status requires source action', async () => {
        mockSubCreate.mockImplementationOnce(requiresSourceActionReply);
        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send(chargeStripeCardReqBody);
        expect(response.status).toBe(402);
        expect(response.body).toEqual({
          type: 'UserActionRequired',
          message: 'Payment requires user action',
          client_secret: 'superSecret'
        });
      });

      it('should return 402 if subscription status requires source', async () => {
        mockSubCreate.mockImplementationOnce(requiresSourceReply);
        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send(chargeStripeCardReqBody);
        expect(response.status).toBe(402);
        expect(response.body).toEqual({
          type: 'PaymentMethodRequired',
          message: 'Card has been declined'
        });
      });

      it('should return 400 if the user is already donating', async () => {
        mockSubCreate.mockImplementationOnce(subsDefaultReply);
        const successResponse = await superRequest(
          '/donate/charge-stripe-card',
          {
            method: 'POST',
            setCookies
          }
        ).send(chargeStripeCardReqBody);
        expect(successResponse.status).toBe(200);
        const failResponse = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send(chargeStripeCardReqBody);
        expect(failResponse.status).toBe(400);
      });

      it('should return 500 if Stripe encountes an error', async () => {
        mockSubCreate.mockImplementationOnce(defaultError);
        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send(chargeStripeCardReqBody);
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
          type: 'danger',
          message: 'Something went wrong.'
        });
      });
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
    describe('POST /donate/charge-stripe-card', () => {
      it('should return 403', async () => {
        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST'
        }).send(chargeStripeCardReqBody);
        expect(response.status).toBe(403);
      });
    });
  });
});
