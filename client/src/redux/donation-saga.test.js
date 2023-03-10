import { expectSaga } from 'redux-saga-test-plan';
import {
  postChargeStripe,
  postChargeStripeCard,
  addDonation
} from '../utils/ajax';
import { postChargeSaga, setDonationCookie } from './donation-saga.js';
import { postChargeComplete, postChargeProcessing, executeGA } from './actions';

jest.mock('../utils/ajax');
jest.mock('../analytics');

const postChargeDataMock = {
  payload: {
    paymentProvider: 'stripe',
    paymentContext: 'donate page',
    amount: '500',
    duration: 'monthly',
    handleAuthentication: jest.fn(),
    paymentMethodId: '123456'
  }
};

const analyticsDataMock = {
  event: 'donation',
  action: 'Donate Page Stripe Payment Submission',
  duration: 'monthly',
  amount: '500'
};

describe('donation-saga', () => {
  it('calls postChargeStrip for Stripe', () => {
    return expectSaga(postChargeSaga, postChargeDataMock)
      .put(postChargeProcessing())
      .call(postChargeStripe, postChargeDataMock.payload)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(analyticsDataMock))
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
      .put(postChargeProcessing())
      .call(postChargeStripeCard, optimizedPayload)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(stripeCardAnalyticsDataMock))
      .run();
  });

  it('calls addDonate for Paypal if user signed in', () => {
    const paypalDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'paypal' }
    };

    const paypalAnalyticsDataMock = analyticsDataMock;
    paypalAnalyticsDataMock.action = 'Donate Page Paypal Payment Submission';

    const storeMock = {
      app: {
        appUsername: 'devuser'
      }
    };

    const { amount, duration } = paypalDataMock.payload;
    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(storeMock)
      .put(postChargeProcessing())
      .call(addDonation, { amount, duration })
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(paypalAnalyticsDataMock))
      .run();
  });

  it('does not call addDonate for Paypal if user not signed in', () => {
    const paypalDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'paypal' }
    };

    const paypalAnalyticsDataMock = analyticsDataMock;
    paypalAnalyticsDataMock.action = 'Donate Page Paypal Payment Submission';

    const storeMock = {
      app: {}
    };

    return expectSaga(postChargeSaga, paypalDataMock)
      .withState(storeMock)
      .put(postChargeProcessing())
      .not.call.fn(addDonation)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(paypalAnalyticsDataMock))
      .run();
  });

  it('does not call api for Patreon', () => {
    const patreonDataMock = {
      payload: { ...postChargeDataMock.payload, paymentProvider: 'patreon' }
    };

    const patreonAnalyticsDataMock = analyticsDataMock;
    patreonAnalyticsDataMock.action = 'Donate Page Patreon Payment Redirection';
    patreonAnalyticsDataMock.event = 'donation_related';
    return expectSaga(postChargeSaga, patreonDataMock)
      .not.call.fn(addDonation)
      .not.call.fn(postChargeStripeCard)
      .not.call.fn(postChargeStripe)
      .put(executeGA(patreonAnalyticsDataMock))
      .run();
  });
});
