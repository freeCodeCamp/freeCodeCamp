import { expectSaga } from 'redux-saga-test-plan';
import { postChargeStripe } from '../utils/ajax';
import { stringifyDonationEvents } from '../utils/analyticsStrings';
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
    action: stringifyDonationEvents('donate page', 'stripe'),
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
});
