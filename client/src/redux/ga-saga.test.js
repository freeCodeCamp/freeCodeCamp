import { types } from '.';
import { createGaSaga } from './ga-saga';
import ga from '../analytics';
import { expectSaga } from 'redux-saga-test-plan';

describe('ga-saga', () => {
  it('calls GA after executeGA action', () => {
    const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };
    const mockEventPayload = {
      type: 'event',
      data: {
        category: 'donation',
        action: 'year end gift paypal button click'
      }
    };
    return (
      expectSaga(createGaSaga, types)
        // Assert that the `call` with expected pramater will eventually happen.
        .call(GaTypes.event, mockEventPayload.data)

        // Dispatch any actions that the saga will `take`.
        .dispatch({ type: types.executeGA, payload: mockEventPayload })

        // Start the test.
        .run()
    );
  });
});
