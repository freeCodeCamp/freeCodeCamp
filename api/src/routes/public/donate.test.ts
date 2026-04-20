import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  vi
} from 'vitest';
import {
  setupServer,
  superRequest,
  devLogin,
  createSuperRequest,
  defaultUserEmail
} from '../../../vitest.utils.js';

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
vi.mock('stripe', () => ({
  default: class {
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
  });

  describe('POST /donate/confirm-paypal-subscription', () => {
    // Staging plan ID for 500/month from donation-settings
    const stagingPlanId500 = 'P-37N14480BW163382FLZYPVMA';
    const paypalReqBody = {
      subscriptionId: 'I-PAYPALTEST123',
      amount: 500,
      duration: 'month'
    };

    let mockFetch: ReturnType<typeof vi.fn>;

    const buildPaypalSubscription = (
      status: string,
      overrides: Record<string, unknown> = {}
    ) => ({
      id: 'I-PAYPALTEST123',
      status,
      plan_id: stagingPlanId500,
      create_time: new Date().toISOString(),
      subscriber: { email_address: 'donor@test.com', payer_id: 'PAYER123' },
      ...overrides
    });

    const setupFetchMocks = (
      status: string,
      overrides: Record<string, unknown> = {}
    ) => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ access_token: 'test-token' })
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () =>
            Promise.resolve(buildPaypalSubscription(status, overrides))
        });
    };

    beforeEach(() => {
      mockFetch = vi.fn();
      vi.stubGlobal('fetch', mockFetch);
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    describe('Unauthenticated user', () => {
      let setCookies: string[];

      beforeAll(async () => {
        const res = await superRequest('/status/ping', { method: 'GET' });
        setCookies = res.get('Set-Cookie');
      });

      test('returns 200 with status active for ACTIVE subscription', async () => {
        setupFetchMocks('ACTIVE');
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send(paypalReqBody);

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({
          subscriptionId: 'I-PAYPALTEST123',
          status: 'active'
        });
      });

      test('returns 200 with status pending for APPROVED subscription', async () => {
        setupFetchMocks('APPROVED');
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send(paypalReqBody);

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({
          subscriptionId: 'I-PAYPALTEST123',
          status: 'pending'
        });
      });

      test('returns 400 for invalid donation amount', async () => {
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send({ ...paypalReqBody, amount: 999 });

        expect(res.statusCode).toBe(400);
        expect((res.body as { error: string }).error).toBe(
          'The donation form had invalid values for this submission.'
        );
      });

      test('returns 400 for unexpected PayPal subscription status', async () => {
        setupFetchMocks('SUSPENDED');
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send(paypalReqBody);

        expect(res.statusCode).toBe(400);
        expect((res.body as { error: string }).error).toContain('SUSPENDED');
      });

      test('returns 400 when subscription was not created recently', async () => {
        setupFetchMocks('ACTIVE', {
          create_time: new Date(Date.now() - 10 * 60 * 1000).toISOString()
        });
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send(paypalReqBody);

        expect(res.statusCode).toBe(400);
        expect((res.body as { error: string }).error).toContain('not recent');
      });

      test('returns 400 when PayPal plan ID does not match', async () => {
        setupFetchMocks('ACTIVE', { plan_id: 'P-WRONGPLANID' });
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send(paypalReqBody);

        expect(res.statusCode).toBe(400);
        expect((res.body as { error: string }).error).toBe(
          'PayPal subscription plan does not match.'
        );
      });

      test('returns 500 when PayPal token request fails', async () => {
        mockFetch.mockResolvedValueOnce({ ok: false, status: 401 });
        const res = await superRequest('/donate/confirm-paypal-subscription', {
          method: 'POST',
          setCookies
        }).send(paypalReqBody);

        expect(res.statusCode).toBe(500);
      });
    });

    describe('Authenticated user', () => {
      let authCookies: string[];
      let superPost: ReturnType<typeof createSuperRequest>;

      beforeEach(async () => {
        authCookies = await devLogin();
        superPost = createSuperRequest({
          method: 'POST',
          setCookies: authCookies
        });
      });

      test('sets isDonating to true for an ACTIVE subscription', async () => {
        setupFetchMocks('ACTIVE');
        const res = await superPost('/donate/confirm-paypal-subscription').send(
          paypalReqBody
        );

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({
          subscriptionId: 'I-PAYPALTEST123',
          status: 'active'
        });
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: defaultUserEmail }
        });
        expect(user?.isDonating).toBe(true);
      });

      test('does not error when user is already donating', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: { isDonating: true }
        });
        setupFetchMocks('ACTIVE');
        const res = await superPost('/donate/confirm-paypal-subscription').send(
          paypalReqBody
        );

        expect(res.statusCode).toBe(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: defaultUserEmail }
        });
        expect(user?.isDonating).toBe(true);
      });
    });
  });
});
