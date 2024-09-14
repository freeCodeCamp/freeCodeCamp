import { expectSaga } from 'redux-saga-test-plan';
import {
  postChargeStripe,
  postChargeStripeCard,
  addDonation,
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
  postChargeProcessing,
  updateCardRedirecting,
  updateCardError
} from './actions';

jest.mock('../utils/ajax');
jest.mock('../analytics/call-ga');
jest.mock('../utils/stripe', () => ({
  stripe: Promise.resolve({
    redirectToCheckout: jest.fn()
  })
}));

const postChargeDataMock = {
  payload: {
    paymentProvider: 'stripe',
    paymentContext: 'donate page',
    amount: '500',
    duration: 'month',
    handleAuthentication: jest.fn(),
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
    appUsername: 'devuser',
    user: {
      devuser: {
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
    appUsername: '',
    user: {
      '': {
        completedChallenges: []
      }
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

  it('calls addDonate for Paypal if user signed in', () => {
    const paypalDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'paypal' }
    };

    const paypalAnalyticsDataMock = analyticsDataMock;
    paypalAnalyticsDataMock.action = 'Donate Page Paypal Payment Submission';

    const { amount, duration } = paypalDataMock.payload;
    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(signedInStoreMock)
      .put(postChargeProcessing())
      .call(addDonation, { amount, duration })
      .put(postChargeComplete())
      .call(setDonationCookie)
      .call(callGA, paypalAnalyticsDataMock)
      .run();
  });

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
        appUsername: '',
        user: {
          '': {
            completedChallenges: []
          }
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
