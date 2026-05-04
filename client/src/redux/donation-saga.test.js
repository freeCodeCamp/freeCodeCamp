// All tests use expectSaga which the eslint-plugin-vitest plugin does not
// recognize
/* eslint-disable vitest/expect-expect */
// @vitest-environment jsdom
import { expectSaga, matchers } from 'redux-saga-test-plan';
import { delay } from 'redux-saga/effects';
import { describe, it, vi } from 'vitest';
import {
  postChargeStripe,
  postChargeStripeCard,
  addDonation,
  confirmPaypalSubscription,
  updateStripeCard
} from '../utils/ajax';
import callGA from '../analytics/call-ga';
import {
  postChargeSaga,
  setDonationCookie,
  updateCardSaga
} from './donation-saga.js';
import {
  postChargeComplete,
  postChargeError,
  postChargeProcessing,
  updateCardRedirecting,
  updateCardError
} from './actions';

// Internal delayP function reference used to skip delays in tests
const delayFn = delay(0).payload.fn;
const skipDelays = [[matchers.call.fn(delayFn), undefined]];

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

  it('dispatches postChargeComplete for an active PayPal subscription', () => {
    const paypalDataMock = {
      payload: {
        ...postChargeDataMock.payload,
        paymentProvider: 'paypal',
        subscriptionId: 'I-PAYPALTEST123'
      }
    };

    confirmPaypalSubscription.mockResolvedValueOnce({
      data: { subscriptionId: 'I-PAYPALTEST123', status: 'active' }
    });

    const paypalAnalyticsDataMock = {
      ...analyticsDataMock,
      action: 'Donate Page Paypal Payment Submission'
    };

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .provide(skipDelays)
      .put(postChargeProcessing())
      .call(confirmPaypalSubscription, {
        subscriptionId: 'I-PAYPALTEST123',
        amount: postChargeDataMock.payload.amount,
        duration: postChargeDataMock.payload.duration
      })
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, paypalAnalyticsDataMock)
      .run();
  });

  it('polls until the subscription becomes active', () => {
    const paypalDataMock = {
      payload: {
        ...postChargeDataMock.payload,
        paymentProvider: 'paypal',
        subscriptionId: 'I-PAYPALTEST123'
      }
    };

    confirmPaypalSubscription
      .mockResolvedValueOnce({
        data: { subscriptionId: 'I-PAYPALTEST123', status: 'pending' }
      })
      .mockResolvedValueOnce({
        data: { subscriptionId: 'I-PAYPALTEST123', status: 'active' }
      });

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .provide(skipDelays)
      .put(postChargeProcessing())
      .put(postChargeComplete())
      .call(setDonationCookie)
      .run();
  });

  it('dispatches postChargeComplete with pending message after all retries remain pending', () => {
    const paypalDataMock = {
      payload: {
        ...postChargeDataMock.payload,
        paymentProvider: 'paypal',
        subscriptionId: 'I-PAYPALTEST123'
      }
    };

    confirmPaypalSubscription.mockResolvedValue({
      data: { subscriptionId: 'I-PAYPALTEST123', status: 'pending' }
    });

    const paypalAnalyticsDataMock = {
      ...analyticsDataMock,
      action: 'Donate Page Paypal Payment Submission'
    };

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .provide(skipDelays)
      .put(postChargeProcessing())
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, paypalAnalyticsDataMock)
      .run();
  });

  it('dispatches postChargeError for an unexpected PayPal subscription status', () => {
    const paypalDataMock = {
      payload: {
        ...postChargeDataMock.payload,
        paymentProvider: 'paypal',
        subscriptionId: 'I-PAYPALTEST123'
      }
    };

    confirmPaypalSubscription.mockResolvedValue({
      data: { subscriptionId: 'I-PAYPALTEST123', status: 'cancelled' }
    });

    // defaultDonationErrorMessage = i18next.t('donate.error-2') returns
    // undefined in tests, so the payload is dropped.
    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .provide(skipDelays)
      .put(postChargeProcessing())
      .put(postChargeError())
      .not.put(postChargeComplete())
      .run();
  });

  it('dispatches postChargeError when the API returns an error body', () => {
    const paypalDataMock = {
      payload: {
        ...postChargeDataMock.payload,
        paymentProvider: 'paypal',
        subscriptionId: 'I-PAYPALTEST123'
      }
    };

    confirmPaypalSubscription.mockResolvedValueOnce({
      data: { error: 'PayPal subscription has unexpected status: SUSPENDED' }
    });

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .provide(skipDelays)
      .put(postChargeProcessing())
      .put(postChargeError())
      .not.put(postChargeComplete())
      .run();
  });

  it('dispatches postChargeError when PayPal subscriptionId is missing', () => {
    const paypalDataMock = {
      payload: {
        ...postChargeDataMock.payload,
        paymentProvider: 'paypal'
        // no subscriptionId
      }
    };

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .provide(skipDelays)
      .put(postChargeProcessing())
      .put(postChargeError())
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
