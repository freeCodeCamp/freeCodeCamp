// All tests use expectSaga which the eslint-plugin-vitest plugin does not
// recognize
/* eslint-disable vitest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan';
import { describe, it, vi } from 'vitest';

import { executeTests, updatePreviewSaga } from './execute-challenge-saga';

vi.mock('i18next', async () => ({
  default: {
    t: key => key
  }
}));

const initialState = {
  challenge: { isBuildEnabled: true, isExecuting: false, challengeMeta: {} }
};

// We're not testing the reducer here, so just return the initial state
function reducer(state = initialState) {
  return state;
}

const challengeMounted = { type: 'challenge.challengeMounted' };
const previewMounted = { type: 'challenge.previewMounted' };
const resetChallenge = { type: 'challenge.resetChallenge' };

describe('updatePreviewSaga', () => {
  it('flushes logs on challengeMounted', () => {
    return expectSaga(updatePreviewSaga, challengeMounted)
      .withReducer(reducer)
      .put({ type: 'challenge.initLogs' })
      .silentRun();
    // TODO: figure out why silentRun is necessary. Without it, we get timeout
    // warnings. Increasing the timeout just makes the tests take longer.
  });
  it('flushes logs on reset', () => {
    return expectSaga(updatePreviewSaga, resetChallenge)
      .withReducer(reducer)
      .put({ type: 'challenge.initLogs' })
      .silentRun();
  });
  it('flushes logs on previewMounted', () => {
    return expectSaga(updatePreviewSaga, previewMounted)
      .withReducer(reducer)
      .put({ type: 'challenge.initLogs' })
      .silentRun();
  });
});

describe('executeTests generator', () => {
  it('sets a special message for IndentationErrors', () => {
    const mockTestRunner = () => {
      return [
        {
          err: {
            type: 'IndentationError',
            message: 'Unexpected token',
            stack: '...'
          }
        }
      ];
    };

    const tests = [{ testString: 'assert(true);', text: 'Test 1' }];

    return expectSaga(executeTests, mockTestRunner, tests)
      .put({
        type: 'challenge.updateConsole',
        payload: '<p>1. learn.indentation-error</p>'
      })
      .returns([
        {
          err: 'Unexpected token\n...',
          text: 'Test 1',
          testString: 'assert(true);',
          running: false,
          message: '<p>learn.indentation-error</p>',
          stack: '...'
        }
      ])
      .run();
  });
});
