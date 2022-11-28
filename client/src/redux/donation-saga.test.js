import { expectSaga } from 'redux-saga-test-plan';
import { postChargeStripe } from '../utils/ajax';
import { postChargeSaga } from './donation-saga.js';

jest.mock('../utils/ajax');
jest.mock('../analytics');

let postChargeMockData = {
  payload: {
    paymentProvider: 'stripe',
    paymentContext: 'modal',
    amount: '500',
    duration: 'monthly',
    handleAuthentication: jest.fn(),
    paymentMethodId: '123456'
  }
};

describe('donation-saga', () => {
  it('calls postChargeStrip if Stripe', () => {
    return (
      expectSaga(postChargeSaga, postChargeMockData)
        // Assert that the `call` with expected paramater will eventually happen.
        .call(postChargeStripe, postChargeMockData.payload)

        // Start the test.
        .run()
    );
  });
});
