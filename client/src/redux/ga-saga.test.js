import { expectSaga } from 'redux-saga-test-plan';
import TagManager from '../analytics';
import { actionTypes } from './action-types';
import { createGaSaga } from './ga-saga';
jest.mock('../analytics');

describe('ga-saga', () => {
  it('calls GA after executeGA action', () => {
    const mockEventPayload = {
      action: 'Learn Donation Alert Click',
      amount: 500,
      duration: 'month',
      event: 'donation_related'
    };
    return (
      expectSaga(createGaSaga, actionTypes)
        // Assert that the `call` with expected paramater will eventually happen.
        .call(TagManager.dataLayer, { dataLayer: mockEventPayload })

        // Dispatch any actions that the saga will `take`.
        .dispatch({ type: actionTypes.executeGA, payload: mockEventPayload })

        // Start the test.
        .run()
    );
  });
});
