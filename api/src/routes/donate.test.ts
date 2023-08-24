/* eslint-disable @typescript-eslint/naming-convention */

import { devLogin, setupServer, superRequest } from '../../jest.utils';
const mockCustomerCreate = jest.fn();
interface StripeSubscriptionArgs {
  customer: string;
  payment_behavior?: 'allow_incomplete';
  items: [{ plan: string }];
  expand?: Array<string>;
}

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      customers: {
        create: mockCustomerCreate
      },
      subscriptions: {
        create: jest.fn(
          ({ payment_behavior, expand }: StripeSubscriptionArgs) => {
            if (
              payment_behavior === 'allow_incomplete' &&
              expand &&
              expand.includes('latest_invoice.payment_intent')
            ) {
              return Promise.resolve({
                id: 'cust_123',
                latest_invoice: {
                  payment_intent: {
                    client_secret: 'superSecret',
                    status: 'intentStatus'
                  }
                }
              });
            }
          }
        )
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
        // Modify the behavior of the `create` method for this specific test
        mockCustomerCreate.mockImplementationOnce(() => {
          return Promise.resolve({
            id: 'cust_111',
            name: 'Jest_User',
            currency: 'sgd',
            description: 'Jest User Account created'
          });
        });
        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send({
          paymentMethodId: 'someValidMethodId',
          amount: 500,
          duration: 'month'
        });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ isDonating: true, type: 'success' });
      });
    });

    describe('POST /donate/charge-stripe-card', () => {
      it('should return 500 if Stripe encounted an error', async () => {
        // Modify the behavior of the `create` method for this specific test
        mockCustomerCreate.mockImplementationOnce(() => {
          return Promise.reject(new Error('Stripe encountered an error'));
        });

        const response = await superRequest('/donate/charge-stripe-card', {
          method: 'POST',
          setCookies
        }).send({
          paymentMethodId: 'someValidMethodId',
          amount: 500,
          duration: 'month'
        });

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
  });
});
