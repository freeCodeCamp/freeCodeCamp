import { describe, test, expect, beforeEach, vi } from 'vitest';
import Stripe from 'stripe';
import {
  createSuperRequest,
  devLogin,
  setupServer,
  defaultUserEmail,
  defaultUserId
} from '../../../vitest.utils.js';
import { createUserInput } from '../../utils/create-user.js';

const testEWalletEmail = 'baz@bar.com';
const testSubscriptionId = 'sub_test_id';
const testCustomerId = 'cust_test_id';
const userWithoutProgress = createUserInput(defaultUserEmail);
const userWithProgress = {
  ...createUserInput(defaultUserEmail),
  completedChallenges: [
    {
      id: 'a6b0bb188d873cb2c8729495',
      completedDate: 1520002973119,
      solution: null,
      challengeType: 5
    },
    {
      id: '33b0bb188d873cb2c8729433',
      completedDate: 4420002973122,
      solution: null,
      challengeType: 5
    },
    {
      id: 'a5229172f011153519423690',
      completedDate: 1520440323273,
      solution: null,
      challengeType: 5
    },
    {
      id: 'a5229172f011153519423692',
      completedDate: 1520440323274,
      githubLink: '',
      challengeType: 5
    }
  ]
};
const donationMock = {
  endDate: null,
  startDate: {
    date: '2024-07-17T10:20:56.076Z',
    when: '2024-07-17T10:20:56.076+00:00'
  },
  id: '66979a414748aa2f3ba36d41',
  amount: 500,
  customerId: 'cust_test_id',
  duration: 'month',
  email: 'foo@bar.com',
  provider: 'stripe',
  subscriptionId: 'sub_test_id',
  userId: defaultUserId
};
const sharedDonationReqBody = {
  amount: 500,
  duration: 'month'
};
const chargeStripeReqBody = {
  email: testEWalletEmail,
  subscriptionId: 'sub_test_id',
  ...sharedDonationReqBody
};
const chargeStripeCardReqBody = {
  paymentMethodId: 'UID',
  ...sharedDonationReqBody
};
const createStripePaymentIntentReqBody = {
  email: testEWalletEmail,
  name: 'Baz Bar',
  token: { id: 'tok_123' },
  ...sharedDonationReqBody
};
const mockSubCreate = vi.fn();
const { mockVerifyStripePaymentIntent } = vi.hoisted(() => ({
  mockVerifyStripePaymentIntent: vi.fn()
}));
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
const defaultError = () =>
  Promise.reject(new Error('Stripe encountered an error'));

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

vi.mock('../../utils/donation-verification.js', () => ({
  verifyStripePaymentIntent: mockVerifyStripePaymentIntent
}));

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
  describe('Authenticated User', () => {
    let superPost: ReturnType<typeof createSuperRequest>;
    let superPut: ReturnType<typeof createSuperRequest>;
    const verifyUpdatedUserAndNewDonation = async (email: string) => {
      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { email }
      });
      const donations = await fastifyTestInstance.prisma.donation.findMany({
        where: { userId: user?.id }
      });
      const donation = donations[0];
      expect(donations.length).toBe(1);
      expect(donation?.amount).toBe(sharedDonationReqBody.amount);
      expect(donation?.duration).toBe(sharedDonationReqBody.duration);
      expect(typeof donation?.subscriptionId).toBe('string');
      expect(donation?.customerId).toBe(testCustomerId);
      expect(donation?.provider).toBe('stripe');
      // The subscription is claimed, so it cannot be redeemed a second time.
      const claims = await fastifyTestInstance.prisma.donationClaim.findMany({
        where: { userId: user?.id }
      });
      expect(claims).toHaveLength(1);
      expect(claims[0]).toMatchObject({
        provider: 'stripe',
        reference: donation?.subscriptionId
      });
    };
    const verifyNoUpdatedUserAndNoNewDonation = async (email: string) => {
      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { email }
      });
      const donations = await fastifyTestInstance.prisma.donation.findMany({});
      expect(user?.isDonating).toBe(false);
      expect(donations.length).toBe(0);
    };
    const verifyNoNewUserAndNoNewDonation = async () => {
      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { email: testEWalletEmail }
      });
      const donations = await fastifyTestInstance.prisma.donation.findMany({});
      expect(user).toBe(null);
      expect(donations.length).toBe(0);
    };

    beforeEach(async () => {
      setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
      superPut = createSuperRequest({ method: 'PUT', setCookies });
      await fastifyTestInstance.prisma.user.updateMany({
        where: { email: userWithProgress.email },
        data: userWithProgress
      });
      await fastifyTestInstance.prisma.user.deleteMany({
        where: { email: testEWalletEmail }
      });
      await fastifyTestInstance.prisma.donation.deleteMany({});
      await fastifyTestInstance.prisma.donationClaim.deleteMany({});
      mockVerifyStripePaymentIntent.mockReset();
    });

    describe('POST /donate/charge-stripe-card', () => {
      test('should return 200 and update the user', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('succeeded')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        await verifyUpdatedUserAndNewDonation(userWithProgress.email);
        expect(response.body).toEqual({ isDonating: true, type: 'success' });
        expect(response.status).toBe(200);
      });

      test('should return 402 with client_secret if subscription status requires action', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const count = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          metrics: { ...originalSentry.metrics, count }
        };

        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('requires_action')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        await verifyNoUpdatedUserAndNoNewDonation(userWithProgress.email);
        expect(response.body).toEqual({
          error: {
            type: 'UserActionRequired',
            message: 'Payment requires user action',
            client_secret: 'superSecret'
          }
        });
        expect(response.status).toBe(402);
        expect(count).toHaveBeenCalledWith('donation.action_required', 1);

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('should return 402 if subscription status requires payment method', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('requires_payment_method')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        await verifyNoUpdatedUserAndNoNewDonation(userWithProgress.email);
        expect(response.body).toEqual({
          error: {
            type: 'PaymentMethodRequired',
            message: 'Card has been declined'
          }
        });
        expect(response.status).toBe(402);
      });

      test('should return 409 if the user is already donating', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('succeeded')
        );
        const successResponse = await superPost(
          '/donate/charge-stripe-card'
        ).send(chargeStripeCardReqBody);
        const failResponse = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        //Verify that only the first call changed the DB
        await verifyUpdatedUserAndNewDonation(userWithProgress.email);
        expect(successResponse.status).toBe(200);
        expect(failResponse.body).toEqual({
          error: {
            type: 'AlreadyDonatingError',
            message: 'User is already donating.'
          }
        });
        expect(failResponse.status).toBe(409);
      });

      test('should reject unexpected subscription statuses', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('processing')
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        await verifyNoUpdatedUserAndNoNewDonation(userWithProgress.email);
        expect(response.body).toEqual({
          error: 'Donation failed due to a server error.'
        });
        expect(response.status).toBe(500);
      });

      test('should return 400 if the user has no email', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: userWithProgress.email },
          data: { email: null }
        });
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        expect(response.body).toEqual({
          error: {
            type: 'EmailRequiredError',
            message: 'User has not provided an email address'
          }
        });
        expect(response.status).toBe(400);
      });

      test('should return 500 if Stripe encountes an error', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        mockSubCreate.mockImplementationOnce(defaultError);
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        await verifyNoUpdatedUserAndNoNewDonation(userWithProgress.email);
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
          error: 'Donation failed due to a server error.'
        });
        expect(captureException).toHaveBeenCalledOnce();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('should not capture Stripe card decline errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        const CardError = Stripe.errors.StripeCardError as unknown as new (
          m?: string
        ) => Error;
        mockSubCreate.mockImplementationOnce(() =>
          Promise.reject(new CardError('card_declined'))
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        expect(response.status).toBe(500);
        expect(captureException).not.toHaveBeenCalled();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('should not capture Stripe invalid request errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        const InvalidRequestError = Stripe.errors
          .StripeInvalidRequestError as unknown as new (m?: string) => Error;
        mockSubCreate.mockImplementationOnce(() =>
          Promise.reject(new InvalidRequestError('invalid_request'))
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        expect(response.status).toBe(500);
        expect(captureException).not.toHaveBeenCalled();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('should capture Stripe infra errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };

        const AuthError = Stripe.errors
          .StripeAuthenticationError as unknown as new (m?: string) => Error;
        mockSubCreate.mockImplementationOnce(() =>
          Promise.reject(new AuthError('invalid api key'))
        );
        const response = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );

        expect(response.status).toBe(500);
        expect(captureException).toHaveBeenCalledOnce();

        fastifyTestInstance.Sentry = originalSentry;
      });

      test('should return 400 if user has not completed challenges', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: userWithProgress.email },
          data: userWithoutProgress
        });
        const failResponse = await superPost('/donate/charge-stripe-card').send(
          chargeStripeCardReqBody
        );
        await verifyNoUpdatedUserAndNoNewDonation(userWithProgress.email);
        expect(failResponse.body).toEqual({
          error: {
            type: 'MethodRestrictionError',
            message: `Donate using another method`
          }
        });
        expect(failResponse.status).toBe(400);
      });

      // Donor benefits cost money, so the client cannot choose what it is
      // charged. Without this the plan string reaches Stripe and fails there.
      test('should return 400 for an amount we do not offer', async () => {
        mockSubCreate.mockClear();

        const failResponse = await superPost('/donate/charge-stripe-card').send(
          { ...chargeStripeCardReqBody, amount: 100 }
        );

        await verifyNoUpdatedUserAndNoNewDonation(userWithProgress.email);
        expect(mockSubCreate).not.toHaveBeenCalled();
        expect(failResponse.body).toEqual({
          error: {
            type: 'InvalidDonationError',
            message: 'Donation amount is not one we offer'
          }
        });
        expect(failResponse.status).toBe(400);
      });
    });

    describe('POST /donate/add-donation', () => {
      test('should return 200 and record a verified donation', async () => {
        mockVerifyStripePaymentIntent.mockResolvedValueOnce({
          ok: true,
          provider: 'stripe',
          reference: 'sub_test_id',
          amount: 500,
          currency: 'usd',
          customerId: 'cust_test_id'
        });

        const response = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          stripePaymentIntentId: 'pi_test_id'
        });
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: userWithProgress.email }
        });
        const claim = await fastifyTestInstance.prisma.donationClaim.findFirst({
          where: { reference: 'sub_test_id' }
        });
        // charge-stripe-card records nothing when the card needs 3D Secure,
        // so without this the donor has no history and cannot update a card.
        const donation = await fastifyTestInstance.prisma.donation.findFirst({
          where: { userId: defaultUserId }
        });

        expect(user?.isDonating).toBe(true);
        expect(claim).toMatchObject({
          provider: 'stripe',
          reference: 'sub_test_id',
          userId: defaultUserId
        });
        expect(donation).toMatchObject({
          provider: 'stripe',
          subscriptionId: 'sub_test_id',
          customerId: 'cust_test_id',
          amount: 500,
          duration: 'month',
          userId: defaultUserId
        });
        expect(response.body).toEqual({
          isDonating: true
        });
        expect(response.status).toBe(200);
      });

      // Donor status for PayPal comes from the activation webhook, so the
      // route must not accept a subscription id from the client at all.
      test('should reject a PayPal subscription id', async () => {
        const response = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          paypalSubscriptionId: 'I-PAYPALSUBSCRIPTION'
        });
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: userWithProgress.email }
        });

        expect(user?.isDonating).toBe(false);
        expect(response.status).toBe(400);
      });

      test('should reject an empty body', async () => {
        const response = await superPost('/donate/add-donation').send({});
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: userWithProgress.email }
        });

        expect(user?.isDonating).toBe(false);
        expect(response.status).toBe(400);
      });

      test('should reject failed provider verification results', async () => {
        const providerErrors = [
          'incomplete_payment',
          'refunded_payment',
          'api_failure'
        ];

        for (const error of providerErrors) {
          mockVerifyStripePaymentIntent.mockResolvedValueOnce({
            ok: false,
            provider: 'stripe',
            error
          });

          const response = await superPost('/donate/add-donation').send({
            ...sharedDonationReqBody,
            stripePaymentIntentId: `pi_test_${error}`
          });
          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: userWithProgress.email }
          });

          expect(user?.isDonating).toBe(false);
          expect(response.body).toEqual({
            message: 'flash.generic-error',
            type: 'danger'
          });
          expect(response.status).toBe(403);
        }
      });

      test('should reject mismatched payment details', async () => {
        const invalidPayments = [
          { amount: 600, currency: 'usd' },
          { amount: 500, currency: 'eur' },
          { amount: 500, currency: 'gbp' }
        ];

        for (const payment of invalidPayments) {
          mockVerifyStripePaymentIntent.mockResolvedValueOnce({
            ok: true,
            provider: 'stripe',
            reference: `pi_test_${payment.amount}_${payment.currency}`,
            ...payment
          });

          const response = await superPost('/donate/add-donation').send({
            ...sharedDonationReqBody,
            stripePaymentIntentId: `pi_test_${payment.amount}_${payment.currency}`
          });
          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: userWithProgress.email }
          });

          expect(user?.isDonating).toBe(false);
          expect(response.status).toBe(403);
        }
      });

      test('should reject duplicate provider references', async () => {
        mockVerifyStripePaymentIntent.mockResolvedValueOnce({
          ok: true,
          provider: 'stripe',
          reference: 'pi_test_id',
          amount: 500,
          currency: 'usd'
        });
        await fastifyTestInstance.prisma.donationClaim.create({
          data: {
            provider: 'stripe',
            reference: 'pi_test_id',
            userId: defaultUserId
          }
        });

        const response = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          stripePaymentIntentId: 'pi_test_id'
        });
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: userWithProgress.email }
        });

        expect(user?.isDonating).toBe(false);
        expect(response.status).toBe(409);
      });

      // A reference is claimable once, by anyone. Someone who gets hold of
      // another person's subscription id must not be able to redeem it.
      test('should reject a reference already claimed by another user', async () => {
        mockVerifyStripePaymentIntent.mockResolvedValueOnce({
          ok: true,
          provider: 'stripe',
          reference: 'pi_test_id',
          amount: 500,
          currency: 'usd'
        });
        await fastifyTestInstance.prisma.donationClaim.create({
          data: {
            provider: 'stripe',
            reference: 'pi_test_id',
            userId: '5fa2db00a25c1c1fa49ce1a5'
          }
        });

        const response = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          stripePaymentIntentId: 'pi_test_id'
        });
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: userWithProgress.email }
        });
        const claims = await fastifyTestInstance.prisma.donationClaim.findMany({
          where: { reference: 'pi_test_id' }
        });

        expect(user?.isDonating).toBe(false);
        expect(claims).toHaveLength(1);
        expect(claims[0]?.userId).toBe('5fa2db00a25c1c1fa49ce1a5');
        expect(response.status).toBe(409);
      });

      // A card donation that needed 3D Secure resolves to the subscription the
      // charge-stripe routes already claimed, so it cannot be claimed twice.
      test('should reject a Stripe subscription already claimed by another route', async () => {
        mockVerifyStripePaymentIntent.mockResolvedValueOnce({
          ok: true,
          provider: 'stripe',
          reference: 'sub_test_duplicate',
          amount: 500,
          currency: 'usd'
        });
        await fastifyTestInstance.prisma.donationClaim.create({
          data: {
            provider: 'stripe',
            reference: 'sub_test_duplicate',
            userId: defaultUserId
          }
        });

        const response = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          stripePaymentIntentId: 'pi_test_duplicate'
        });
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: userWithProgress.email }
        });

        expect(user?.isDonating).toBe(false);
        expect(response.status).toBe(409);
      });

      test('should return 409 if the user is already donating', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { isDonating: true }
        });

        const failResponse = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          stripePaymentIntentId: 'pi_test_id'
        });
        expect(failResponse.status).toBe(409);
      });

      test('should capture unexpected errors', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const captureException = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          captureException
        };
        mockVerifyStripePaymentIntent.mockResolvedValueOnce({
          ok: true,
          provider: 'stripe',
          reference: 'pi_test_id',
          amount: 500,
          currency: 'usd'
        });
        const transactionSpy = vi
          .spyOn(fastifyTestInstance.prisma, '$transaction')
          .mockRejectedValueOnce(new Error('DB error'));

        const response = await superPost('/donate/add-donation').send({
          ...sharedDonationReqBody,
          stripePaymentIntentId: 'pi_test_id'
        });

        expect(response.status).toBe(500);
        expect(captureException).toHaveBeenCalledOnce();

        transactionSpy.mockRestore();
        fastifyTestInstance.Sentry = originalSentry;
      });
    });

    describe('PUT /donate/update-stripe-card', () => {
      test('should return 200 and return session id', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const count = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          metrics: { ...originalSentry.metrics, count }
        };

        await fastifyTestInstance.prisma.donation.create({
          data: donationMock
        });
        const response = await superPut('/donate/update-stripe-card').send({});
        expect(mockCheckoutSessionCreate).toHaveBeenCalledWith({
          cancel_url: 'http://localhost:8000/update-stripe-card',
          customer: 'cust_test_id',
          mode: 'setup',
          payment_method_types: ['card'],
          setup_intent_data: {
            metadata: {
              customer_id: 'cust_test_id',
              subscription_id: 'sub_test_id'
            }
          },
          success_url:
            'http://localhost:8000/update-stripe-card?session_id={CHECKOUT_SESSION_ID}'
        });
        expect(response.body).toEqual({ sessionId: 'checkout_session_id' });
        expect(response.status).toBe(200);
        expect(count).toHaveBeenCalledWith(
          'donation.card_update_requested',
          1,
          {
            attributes: { result: 'success' }
          }
        );

        fastifyTestInstance.Sentry = originalSentry;
      });
      test('should return 404 if there is no donation record', async () => {
        const originalSentry = fastifyTestInstance.Sentry;
        const count = vi.fn();
        fastifyTestInstance.Sentry = {
          ...originalSentry,
          metrics: { ...originalSentry.metrics, count }
        };

        const response = await superPut('/donate/update-stripe-card').send({});
        expect(response.body).toEqual({
          message: 'flash.generic-error',
          type: 'danger'
        });
        expect(response.status).toBe(404);
        expect(count).toHaveBeenCalledWith(
          'donation.card_update_requested',
          1,
          {
            attributes: { result: 'not_found' }
          }
        );

        fastifyTestInstance.Sentry = originalSentry;
      });
    });

    describe('POST /donate/create-stripe-payment-intent', () => {
      test('should return 200 and call stripe api properly', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('no-errors')
        );
        const response = await superPost(
          '/donate/create-stripe-payment-intent'
        ).send(createStripePaymentIntentReqBody);
        expect(mockCustomerCreate).toHaveBeenCalledWith({
          email: testEWalletEmail,
          name: 'Baz Bar'
        });
        expect(response.status).toBe(200);
      });

      test('should return 400 when email format is wrong', async () => {
        const response = await superPost(
          '/donate/create-stripe-payment-intent'
        ).send({
          ...createStripePaymentIntentReqBody,
          email: '12raqdcev'
        });
        expect(response.body).toEqual({
          error: 'The donation form had invalid values for this submission.'
        });
        expect(response.status).toBe(400);
      });

      test('should return 400 if amount is incorrect', async () => {
        const response = await superPost(
          '/donate/create-stripe-payment-intent'
        ).send({
          ...createStripePaymentIntentReqBody,
          amount: '350'
        });
        expect(response.body).toEqual({
          error: 'The donation form had invalid values for this submission.'
        });
        expect(response.status).toBe(400);
      });

      test('should return 500 if Stripe encounters an error', async () => {
        mockSubCreate.mockImplementationOnce(defaultError);
        const response = await superPost(
          '/donate/create-stripe-payment-intent'
        ).send(createStripePaymentIntentReqBody);
        expect(response.body).toEqual({
          error: 'Donation failed due to a server error.'
        });
        expect(response.status).toBe(500);
      });
    });

    describe('POST /donate/charge-stripe', () => {
      test('should return 200 and call stripe api properly', async () => {
        mockSubCreate.mockImplementationOnce(
          generateMockSubCreate('no-errors')
        );
        const response = await superPost('/donate/charge-stripe').send(
          chargeStripeReqBody
        );
        await verifyUpdatedUserAndNewDonation(testEWalletEmail);
        expect(mockSubRetrieve).toHaveBeenCalledWith('sub_test_id');
        expect(response.status).toBe(200);
      });

      test('should return 500 when if product id is wrong', async () => {
        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.resolve({
            ...mockSubRetrieveObj,
            items: {
              ...mockSubRetrieveObj.items,
              data: [
                {
                  ...mockSubRetrieveObj.items.data[0],
                  plan: {
                    product: 'wrong_product_id'
                  }
                }
              ]
            }
          })
        );
        const response = await superPost('/donate/charge-stripe').send(
          chargeStripeReqBody
        );
        await verifyNoNewUserAndNoNewDonation();
        expect(response.body).toEqual({
          error: 'Donation failed due to a server error.'
        });
        expect(response.status).toBe(500);
      });

      test('should return 500 if subsciption is not active', async () => {
        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.resolve({
            ...mockSubRetrieveObj,
            status: 'canceled'
          })
        );
        const response = await superPost('/donate/charge-stripe').send(
          chargeStripeReqBody
        );
        await verifyNoNewUserAndNoNewDonation();
        expect(response.body).toEqual({
          error: 'Donation failed due to a server error.'
        });
        expect(response.status).toBe(500);
      });

      test('should return 500 if timestamp is old', async () => {
        mockSubRetrieve.mockImplementationOnce(() =>
          Promise.resolve({
            ...mockSubRetrieveObj,
            current_period_start: Math.floor(Date.now() / 1000) - 500
          })
        );
        const response = await superPost('/donate/charge-stripe').send(
          chargeStripeReqBody
        );
        await verifyNoNewUserAndNoNewDonation();
        expect(response.body).toEqual({
          error: 'Donation failed due to a server error.'
        });
        expect(response.status).toBe(500);
      });
    });
  });
});
