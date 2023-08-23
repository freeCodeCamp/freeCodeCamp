/* eslint-disable @typescript-eslint/naming-convention */
import Stripe from 'stripe';
import { devLogin, setupServer, superRequest } from '../../jest.utils';

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
        create: jest.fn(() =>
          Promise.resolve({
            id: 'cust_123',
            name: 'Jest_User',
            currency: 'sgd',
            description: 'Jest User Account created'
          })
        )
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

const stripeMock = new Stripe('secret', {
  apiVersion: '2020-08-27',
  typescript: true
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
        // need to customize the mock here to retun errors
        // this should change the response (logged customer id) but does not
        (stripeMock.customers.create as jest.Mock).mockResolvedValueOnce({
          id: 'cust_111', // Customize for this test
          name: 'Jest_User',
          currency: 'sgd',
          description: 'Jest User Account created'
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
