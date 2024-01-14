import { expectSaga } from 'redux-saga-test-plan';

jest.mock('redux-saga/effects', () => ({
  ...jest.requireActual('redux-saga/effects'),
  delay: jest.fn()
}));

const initialState = {
  challenge: { isBuildEnabled: true, isExecuting: false, challengeMeta: {} }
};

// We're not testing the reducer here, so just return the initial state
function reducer(state = initialState, _action) {
  return state;
}

import { previewChallengeSaga } from './execute-challenge-saga';

const challengeMounted = { type: 'challenge.challengeMounted' };
const previewMounted = { type: 'challenge.previewMounted' };
const resetChallenge = { type: 'challenge.resetChallenge' };

describe('execute-challenge-saga', () => {
  it('flushes logs on challengeMounted', () => {
    return expectSaga(previewChallengeSaga, challengeMounted)
      .withReducer(reducer)
      .put({ type: 'challenge.initLogs' })
      .silentRun();
    // TODO: figure out why silentRun is necessary. Without it, we get timeout
    // warnings. Increasing the timeout just makes the tests take longer.
  });
  it('flushes logs on reset', () => {
    return expectSaga(previewChallengeSaga, resetChallenge)
      .withReducer(reducer)
      .put({ type: 'challenge.initLogs' })
      .silentRun();
  });
  it('does not flush logs on previewMounted', () => {
    return expectSaga(previewChallengeSaga, previewMounted)
      .withReducer(reducer)
      .not.put({ type: 'challenge.initLogs' })
      .silentRun();
  });
});
