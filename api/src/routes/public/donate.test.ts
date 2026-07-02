import { describe, test, expect, beforeAll, vi } from 'vitest';
import Stripe from 'stripe';
import { setupServer, superRequest } from '../../../vitest.utils.js';

const testEWalletEmail = 'baz@bar.com';
const testSubscriptionId = 'sub_test_id';
const testCustomerId = 'cust_test_id';

const sharedDonationReqBody = {
  amount: 500,
  duration: 'month'
};
const chargeStripeReqBody = {
  email: testEWalletEmail,
  subscriptionId: 'sub_test_id',
  ...sharedDonationReqBody
};
const createStripePaymentIntentReqBody = {
  email: testEWalletEmail,
  name: 'Baz Bar',
  token: { id: 'tok_123' },
  ...sharedDonationReqBody
};
const mockSubCreate = vi.fn();
const mockAttachPaymentMethod = vi.fn(() =>
  Promise.resolve({
    id: 'pm_1MqLiJLkdIwHu7ixUEgbFdYF',
    object: 'payment_method'
  })
);
const mockCustomerCreate = vi.fn(() =>
  Promise.resolve({
    id: testCustomerId,
    name: 'Jest_User',
    currency: 'sgd',
    description: 'Jest User Account created'
  })
);
const mockSubRetrieveObj = {
  id: testSubscriptionId,
  items: {
    data: [
      {
        plan: {
          product: 'prod_GD1GGbJsqQaupl'
        }
      }
    ]
  },
  // 1 Jan 2040
  current_period_start: Math.floor(Date.now() / 1000),
  customer: testCustomerId,
  status: 'active'
};
const mockSubRetrieve = vi.fn(() => Promise.resolve(mockSubRetrieveObj));
const mockCheckoutSessionCreate = vi.fn(() =>
  Promise.resolve({ id: 'checkout_session_id' })
);
const mockCustomerUpdate = vi.fn();
const generateMockSubCreate = (status: string) => () =>
  Promise.resolve({
    id: testSubscriptionId,
    latest_invoice: {
      payment_intent: {
        client_secret: 'superSecret',
        status
      }
    }
  });
const {
  StripeError,
  StripeCardError,
  StripeInvalidRequestError,
  StripeAuthenticationError
} = vi.hoisted(() => {
  class StripeError extends Error {}
  class StripeCardError extends StripeError {}
  class StripeInvalidRequestError extends StripeError {}
  class StripeAuthenticationError extends StripeError {}
  return {
    StripeError,
    StripeCardError,
    StripeInvalidRequestError,
    StripeAuthenticationError
  };
});

vi.mock('stripe', () => ({
  default: class {
    static errors = {
      StripeError,
      StripeCardError,
      StripeInvalidRequestError,
      StripeAuthenticationError
    };
    constructor() {}
    customers = {
      create: mockCustomerCreate,
      update: mockCustomerUpdate
    };
    paymentMethods = {
      attach: mockAttachPaymentMethod
    };
    subscriptions = {
      create: mockSubCreate,
      retrieve: mockSubRetrieve
    };
    checkout = {
      sessions: {
        create: mockCheckoutSessionCreate
      }
    };
  }
}));
describe('Donate', () => {
  let setCookies: string[];
  setupServer();

  describe('Unauthenticated User', () => {
    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });

    const endpoints: { path: string; method: 'POST' | 'PUT' }[] = [
      { path: '/donate/add-donation', method: 'POST' },
      { path: '/donate/charge-stripe-card', method: 'POST' },
      { path: '/donate/update-stripe-card', method: 'PUT' }
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

    test('POST /donate/create-stripe-payment-intent should return 200', async () => {
      mockSubCreate.mockImplementationOnce(generateMockSubCreate('no-errors'));
      const response = await superRequest(
        '/donate/create-stripe-payment-intent',
        {
          method: 'POST',
          setCookies
        }
      ).send(createStripePaymentIntentReqBody);
      expect(response.status).toBe(200);
    });

    test('POST /donate/charge-stripe should return 200', async () => {
      mockSubCreate.mockImplementationOnce(generateMockSubCreate('no-errors'));
      const response = await superRequest('/donate/charge-stripe', {
        method: 'POST',
        setCookies
      }).send(chargeStripeReqBody);
      expect(response.status).toBe(200);
    });

    describe('Sentry Issue reporting', () => {
      test('create-stripe-payment-intent captures unexpected errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        mockCustomerCreate.mockImplementationOnce(() =>
          Promise.reject(new Error('Stripe unavailable'))
        );
        const response = await superRequest(
          '/donate/create-stripe-payment-intent',
          {
            method: 'POST',
            setCookies
          }
        ).send(createStripePaymentIntentReqBody);

        expect(response.status).toBe(500);
        expect(captureException).toHaveBeenCalledOnce();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('create-stripe-payment-intent rejects invalid amount for duration', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const count = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          metrics: { ...originalSentry.metrics, count }
        };

        const response = await superRequest(
          '/donate/create-stripe-payment-intent',
          {
            method: 'POST',
            setCookies
          }
        ).send({ ...createStripePaymentIntentReqBody, amount: 999 });

        expect(response.status).toBe(400);
        expect(count).toHaveBeenCalledWith('donation.intent_rejected', 1, {
          attributes: { reason: 'invalid_amount' }
        });

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('charge-stripe captures each subscription-validation failure', async () => {
        const invalidSubscriptions: unknown[] = [
          { ...mockSubRetrieveObj, status: 'incomplete' },
          {
            ...mockSubRetrieveObj,
            items: { data: [{ plan: { product: 'not_a_real_product' } }] }
          },
          { ...mockSubRetrieveObj, current_period_start: 0 },
          { ...mockSubRetrieveObj, customer: 12345 }
        ];

        for (const sub of invalidSubscriptions) {
          const originalSentry = fastifyTestInstance.Sentry;
          const captureException = vi.fn();
          fastifyTestInstance.Sentry = {
            ...originalSentry,
            captureException
          };

          mockSubRetrieve.mockImplementationOnce(() =>
            Promise.resolve(sub as typeof mockSubRetrieveObj)
          );
          const response = await superRequest('/donate/charge-stripe', {
            method: 'POST',
            setCookies
          }).send(chargeStripeReqBody);

          expect(response.status).toBe(500);
          expect(captureException).toHaveBeenCalledOnce();

          fastifyTestInstance.Sentry = originalSentry;
        }
      });

      test('charge-stripe captures unexpected errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.reject(new Error('Stripe unavailable'))
        );
        const response = await superRequest('/donate/charge-stripe', {
          method: 'POST',
          setCookies
        }).send(chargeStripeReqBody);

        expect(response.status).toBe(500);
        expect(captureException).toHaveBeenCalledOnce();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('charge-stripe does not capture Stripe card decline errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        const CardError = Stripe.errors.StripeCardError as unknown as new (
          m?: string
        ) => Error;
        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.reject(new CardError('card_declined'))
        );
        const response = await superRequest('/donate/charge-stripe', {
          method: 'POST',
          setCookies
        }).send(chargeStripeReqBody);

        expect(response.status).toBe(500);
        expect(captureException).not.toHaveBeenCalled();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('charge-stripe does not capture Stripe invalid request errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        const InvalidRequestError = Stripe.errors
          .StripeInvalidRequestError as unknown as new (m?: string) => Error;
        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.reject(new InvalidRequestError('invalid_request'))
        );
        const response = await superRequest('/donate/charge-stripe', {
          method: 'POST',
          setCookies
        }).send(chargeStripeReqBody);

        expect(response.status).toBe(500);
        expect(captureException).not.toHaveBeenCalled();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('charge-stripe captures Stripe infra errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        const AuthError = Stripe.errors
          .StripeAuthenticationError as unknown as new (m?: string) => Error;
        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.reject(new AuthError('invalid api key'))
        );
        const response = await superRequest('/donate/charge-stripe', {
          method: 'POST',
          setCookies
        }).send(chargeStripeReqBody);

        expect(response.status).toBe(500);
        expect(captureException).toHaveBeenCalledOnce();

        fastifyTestInstance.Sentry = originalSentry;
      });
    });
  });
});
