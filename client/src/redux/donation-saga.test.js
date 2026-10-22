// All tests use expectSaga which the eslint-plugin-vitest plugin does not
// recognize
/* eslint-disable vitest/expect-expect */
// @vitest-environment jsdom
import { expectSaga } from 'redux-saga-test-plan';
import { describe, it, vi } from 'vitest';
import {
  postChargeStripe,
  postChargeStripeCard,
  addDonation,
  getSessionUser,
  updateStripeCard
} from '../utils/ajax';
import callGA from '../analytics/call-ga';
import {
  postChargeSaga,
  setDonationCookie,
  updateCardSaga
} from './donation-saga.js';
import {
  fetchUserComplete,
  postChargeComplete,
  postChargePending,
  postChargeProcessing,
  updateCardRedirecting,
  updateCardError
} from './actions';

vi.mock('../utils/ajax');
vi.mock('../analytics/call-ga');
vi.mock('../utils/stripe', () => ({
  stripe: Promise.resolve({
    redirectToCheckout: vi.fn()
  })
}));

const postChargeDataMock = {
  payload: {
    paymentProvider: 'stripe',
    paymentContext: 'donate page',
    amount: '500',
    duration: 'month',
    handleAuthentication: vi.fn(),
    paymentMethodId: '123456'
  }
};

const analyticsDataMock = {
  event: 'donation',
  action: 'Donate Page Stripe Payment Submission',
  duration: 'month',
  amount: '500',
  completed_challenges: 4,
  completed_challenges_session: 2,
  isSignedIn: true
};

const signedInStoreMock = {
  app: {
    user: {
      sessionUser: {
        completedChallenges: [
          {
            id: 'bd7123c8c441eddfaeb5bdef',
            completedDate: '1475094716730',
            challengeFiles: []
          },
          {
            id: 'bd7123c8c441eddfaeb5bdeg',
            completedDate: '1475094716734',
            challengeFiles: []
          },
          {
            id: 'bd7123c8c441eddfaeb5bdeh',
            completedDate: '1475094716733',
            challengeFiles: []
          },
          {
            id: 'bd7123c8c441eddfaeb5bdes',
            completedDate: '1475094716732',
            challengeFiles: []
          }
        ]
      }
    }
  }
};

const signedOutStoreMock = {
  app: {
    user: {
      sessionUser: null
    }
  }
};

describe('donation-saga', () => {
  it('calls postChargeStrip for Stripe', () => {
    // The number of completed challenges per session is stored in the session storage
    sessionStorage.setItem('session-completed-challenges', '2');

    return expectSaga(postChargeSaga, postChargeDataMock)
      .withState(signedInStoreMock)
      .put(postChargeProcessing())
      .call(postChargeStripe, postChargeDataMock.payload)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, analyticsDataMock)
      .run();
  });

  it('calls postChargeStripCard for Stripe Card', () => {
    const stripeCardDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'stripe card' }
    };

    const stripeCardAnalyticsDataMock = analyticsDataMock;
    stripeCardAnalyticsDataMock.action =
      'Donate Page Stripe Card Payment Submission';

    const { paymentMethodId, amount, duration } = stripeCardDataMock.payload;
    const optimizedPayload = { paymentMethodId, amount, duration };
    return expectSaga(postChargeSaga, stripeCardDataMock)
      .withState(signedInStoreMock)
      .put(postChargeProcessing())
      .call(postChargeStripeCard, optimizedPayload)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, stripeCardAnalyticsDataMock)
      .run();
  });

  // The 3D Secure flow is the only one that reports a payment to the api, and
  // post() resolves for 4xx, so a rejected donation has to be turned into an
  // error rather than read as success.
  const stripeCardAuthMock = addDonationResult => {
    const payload = {
      ...postChargeDataMock.payload,
      paymentProvider: 'stripe card',
      handleAuthentication: vi.fn().mockResolvedValue({
        paymentIntent: { id: 'pi_test', status: 'succeeded' }
      })
    };

    postChargeStripeCard.mockResolvedValueOnce({
      data: { error: { type: 'UserActionRequired', client_secret: 'secret' } },
      paymentMethodId: '123456'
    });
    addDonation.mockResolvedValueOnce(addDonationResult);

    return { payload };
  };

  it('completes when the api accepts a 3D Secure donation', () => {
    const dataMock = stripeCardAuthMock({ response: { ok: true }, data: {} });

    return expectSaga(postChargeSaga, dataMock)
      .withState(signedInStoreMock)
      .call.fn(addDonation)
      .put(postChargeComplete())
      .run();
  });

  it('errors when the api rejects a 3D Secure donation', () => {
    const dataMock = stripeCardAuthMock({
      response: { ok: false, status: 403 },
      data: {}
    });

    return expectSaga(postChargeSaga, dataMock)
      .withState(signedInStoreMock)
      .call.fn(addDonation)
      .not.put(postChargeComplete())
      .run();
  });

  const paypalPayload = () => ({
    payload: {
      ...postChargeDataMock.payload,
      paymentProvider: 'paypal',
      data: { subscriptionID: 'paypal_subscription_id' }
    }
  });

  // Donor status for PayPal is granted by the activation webhook, so the
  // client reports nothing and only waits for the flag.
  it('does not tell the api about a Paypal payment', () => {
    getSessionUser.mockResolvedValue({
      response: { ok: true },
      data: { isDonating: true }
    });

    const paypalAnalyticsDataMock = analyticsDataMock;
    paypalAnalyticsDataMock.action = 'Donate Page Paypal Payment Submission';

    return expectSaga(postChargeSaga, paypalPayload())
      .withState(signedInStoreMock)
      .put(postChargeProcessing())
      .not.call.fn(addDonation)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, paypalAnalyticsDataMock)
      .run({ timeout: 3000 });
  });

  // The activation webhook sets isDonating, so the poll has to put the
  // refreshed user into the store or the flag only shows after a reload.
  it('puts the user in the store once the donation activates', () => {
    getSessionUser.mockResolvedValue({
      response: { ok: true },
      data: { isDonating: true }
    });

    return expectSaga(postChargeSaga, paypalPayload())
      .withState(signedInStoreMock)
      .put(fetchUserComplete({ user: { isDonating: true } }))
      .run({ timeout: 3000 });
  });

  // Approval only means the donor authorised the subscription. Claiming
  // success before the webhook confirms it would tell them they are a
  // supporter when they may not be.
  it('does not claim success while the donation is unconfirmed', () => {
    getSessionUser.mockResolvedValue({
      response: { ok: true },
      data: { isDonating: false }
    });

    return expectSaga(postChargeSaga, paypalPayload())
      .withState(signedInStoreMock)
      .put(postChargePending())
      .not.put(postChargeComplete())
      .run({ timeout: 15000 });
  }, 20000); // The poll runs its full course before giving up.

  it('does not call addDonate for Paypal if user not signed in', () => {
    const paypalDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'paypal' }
    };

    sessionStorage.setItem('session-completed-challenges', '0');

    const paypalAnalyticsDataMock = {
      ...analyticsDataMock,
      action: 'Donate Page Paypal Payment Submission',
      isSignedIn: false,
      completed_challenges: 0,
      completed_challenges_session: 0
    };

    const signedOutStoreMock = {
      app: {
        user: {
          sessionUser: null
        }
      }
    };

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedOutStoreMock)
      .put(postChargeProcessing())
      .not.call.fn(addDonation)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, paypalAnalyticsDataMock)
      .run();
  });

  it('does not call api for Patreon', () => {
    const patreonDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'patreon' }
    };

    const patreonAnalyticsDataMock = {
      event: 'donation_related',
      action: 'Donate Page Patreon Payment Redirection'
    };
    return expectSaga(postChargeSaga, patreonDataMock)
      .withState(signedOutStoreMock)
      .not.call.fn(addDonation)
      .not.call.fn(postChargeStripeCard)
      .not.call.fn(postChargeStripe)
      .call(callGA, patreonAnalyticsDataMock)
      .run();
  });

  it('handles successful card update', () => {
    updateStripeCard.mockResolvedValue({
      data: { sessionId: 'expected data' }
    });

    return expectSaga(updateCardSaga)
      .put(updateCardRedirecting())
      .call(updateStripeCard)
      .not.put(updateCardError())
      .run();
  });

  it('handles errors correctly for card update', () => {
    updateStripeCard.mockResolvedValue({
      data: 'unexpected data'
    });

    return expectSaga(updateCardSaga)
      .put(updateCardRedirecting())
      .call(updateStripeCard)
      .put(updateCardError())
      .run();
  });
});
