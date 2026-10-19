import { describe, test, expect, beforeAll, beforeEach, vi } from 'vitest';
import Stripe from 'stripe';
import { paypalConfigTypes } from '@freecodecamp/shared/config/donation-settings';
import {
  createSuperRequest,
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

const { mockCreatePayPalSubscription } = vi.hoisted(() => ({
  mockCreatePayPalSubscription: vi.fn()
}));

vi.mock('../../utils/donation-verification.js', async importActual => ({
  ...(await importActual<
    typeof import('../../utils/donation-verification.js')
  >()),
  createPayPalSubscription: mockCreatePayPalSubscription
}));

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

  describe('POST /donate/create-paypal-subscription', () => {
    beforeEach(async () => {
      mockCreatePayPalSubscription.mockReset();
      const res = await superRequest('/status/ping', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });

    // Anonymous donors get no custom_id, so the activation webhook has nobody
    // to grant donor status to.
    test('should create a subscription without a custom id when signed out', async () => {
      mockCreatePayPalSubscription.mockResolvedValueOnce('I-TESTSUBSCRIPTION');

      const response = await superRequest(
        '/donate/create-paypal-subscription',
        { method: 'POST', setCookies }
      ).send(sharedDonationReqBody);

      expect(mockCreatePayPalSubscription).toHaveBeenCalledWith(
        paypalConfigTypes.staging.month[500].planId,
        undefined
      );
      expect(response.body).toEqual({ id: 'I-TESTSUBSCRIPTION' });
      expect(response.status).toBe(200);
    });

    // The donor id comes from the session, never from the request, so a client
    // cannot point a subscription at somebody else's account.
    test('should put the signed in donor id on the subscription', async () => {
      mockCreatePayPalSubscription.mockResolvedValueOnce('I-TESTSUBSCRIPTION');
      const authedCookies = await devLogin();
      const superPost = createSuperRequest({
        method: 'POST',
        setCookies: authedCookies
      });

      const response = await superPost(
        '/donate/create-paypal-subscription'
      ).send(sharedDonationReqBody);

      expect(mockCreatePayPalSubscription).toHaveBeenCalledWith(
        paypalConfigTypes.staging.month[500].planId,
        defaultUserId
      );
      expect(response.status).toBe(200);
    });

    test('should reject an amount we have no plan for', async () => {
      const response = await superRequest(
        '/donate/create-paypal-subscription',
        { method: 'POST', setCookies }
      ).send({ amount: 1, duration: 'month' });

      expect(mockCreatePayPalSubscription).not.toHaveBeenCalled();
      expect(response.status).toBe(400);
    });

    test('should reject a duration we do not have plans for', async () => {
      const response = await superRequest(
        '/donate/create-paypal-subscription',
        { method: 'POST', setCookies }
      ).send({ amount: 500, duration: 'one-time' });

      expect(mockCreatePayPalSubscription).not.toHaveBeenCalled();
      expect(response.status).toBe(400);
    });

    test('should return 500 when PayPal will not create the subscription', async () => {
      mockCreatePayPalSubscription.mockResolvedValueOnce(null);

      const response = await superRequest(
        '/donate/create-paypal-subscription',
        { method: 'POST', setCookies }
      ).send(sharedDonationReqBody);

      expect(response.status).toBe(500);
    });
  });

  describe('Unauthenticated User', () => {
    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });

    beforeEach(async () => {
      await fastifyTestInstance.prisma.donation.deleteMany({});
      await fastifyTestInstance.prisma.donationClaim.deleteMany({});
      await fastifyTestInstance.prisma.user.deleteMany({
        where: { email: testEWalletEmail }
      });
      mockSubRetrieve.mockReset();
      mockSubRetrieve.mockResolvedValue(mockSubRetrieveObj);
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
      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { email: testEWalletEmail }
      });
      const claim = await fastifyTestInstance.prisma.donationClaim.findFirst({
        where: { reference: testSubscriptionId }
      });

      expect(user?.isDonating).toBe(true);
      expect(claim).toMatchObject({
        provider: 'stripe',
        reference: testSubscriptionId,
        userId: user?.id
      });
      expect(response.status).toBe(200);
    });

    test('POST /donate/charge-stripe rejects duplicate subscription claims', async () => {
      const firstResponse = await superRequest('/donate/charge-stripe', {
        method: 'POST',
        setCookies
      }).send(chargeStripeReqBody);
      const secondResponse = await superRequest('/donate/charge-stripe', {
        method: 'POST',
        setCookies
      }).send({
        ...chargeStripeReqBody,
        email: 'another-user@example.com'
      });
      const donations = await fastifyTestInstance.prisma.donation.findMany({});
      const anotherUser = await fastifyTestInstance.prisma.user.findFirst({
        where: { email: 'another-user@example.com' }
      });

      expect(firstResponse.status).toBe(200);
      expect(secondResponse.status).toBe(409);
      expect(donations).toHaveLength(1);
      expect(anotherUser?.isDonating).not.toBe(true);
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
          expect(captureException).toHaveBeenCalledExactlyOnceWith(
            expect.any(Error),
            {
              extra: { subscriptionId: 'sub_test_id' }
            }
          );
          const capturedError = captureException.mock
            .calls[0]?.[0] as unknown as Error;
          expect(capturedError.message).not.toContain('sub_test_id');

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
