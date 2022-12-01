import { expectSaga } from 'redux-saga-test-plan';
import {
  postChargeStripe,
  postChargeStripeCard,
  addDonation
} from '../utils/ajax';
import { postChargeSaga, setDonationCookie } from './donation-saga.js';
import { postChargeComplete, executeGA } from './actions';

jest.mock('../utils/ajax');
jest.mock('../analytics');

let postChargeMockData = {
  payload: {
    paymentProvider: 'stripe',
    paymentContext: 'donate page',
    amount: '500',
    duration: 'monthly',
    handleAuthentication: jest.fn(),
    paymentMethodId: '123456'
  }
};

const mockEventPayload = {
  type: 'event',
  data: {
    category: 'Donation',
    action: 'Donate Page Stripe Payment Submission',
    label: 'monthly',
    value: '500'
  }
};

describe('donation-saga', () => {
  it('calls postChargeStrip if Stripe', () => {
    return expectSaga(postChargeSaga, postChargeMockData)
      .call(postChargeStripe, postChargeMockData.payload)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(mockEventPayload))
      .run();
  });

  it('calls postChargeStripCard if Stripe Card', () => {
    let stripeCardDataMock = {
      payload: { ...postChargeMockData.payload, paymentProvider: 'stripe card' }
    };

    let stripeCardGAdata = mockEventPayload;
    stripeCardGAdata.data.action = 'Donate Page Stripe Card Payment Submission';

    const { paymentMethodId, amount, duration } = stripeCardDataMock.payload;
    const optimizedPayload = { paymentMethodId, amount, duration };
    return expectSaga(postChargeSaga, stripeCardDataMock)
      .call(postChargeStripeCard, optimizedPayload)
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(stripeCardGAdata))
      .run();
  });

  it('calls addDonate with paypal if user signed in', () => {
    let stripeCardDataMock = {
      payload: { ...postChargeMockData.payload, paymentProvider: 'paypal' }
    };

    let stripeCardGAdata = mockEventPayload;
    stripeCardGAdata.data.action = 'Donate Page Paypal Payment Submission';

    const storeMock = {
      app: {
        appUsername: 'devuser'
      }
    };

    const { amount, duration } = stripeCardDataMock.payload;
    return expectSaga(postChargeSaga, stripeCardDataMock)
      .withState(storeMock)
      .call(addDonation, { amount, duration })
      .put(postChargeComplete())
      .call(setDonationCookie)
      .put(executeGA(stripeCardGAdata))
      .run();
  });

  it('calls executeGA for patreon', () => {
    let stripeCardDataMock = {
      payload: { ...postChargeMockData.payload, paymentProvider: 'patreon' }
    };

    let stripeCardGAdata = mockEventPayload;
    stripeCardGAdata.data.action = 'Donate Page Patreon Payment Redirection';
    stripeCardGAdata.data.category = 'Donation Related';
    return expectSaga(postChargeSaga, stripeCardDataMock)
      .put(executeGA(stripeCardGAdata))
      .run();
  });
});
