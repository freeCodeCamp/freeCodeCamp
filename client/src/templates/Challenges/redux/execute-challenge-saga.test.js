// All tests use expectSaga which the eslint-plugin-vitest plugin does not
// recognize
/* eslint-disable vitest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { describe, it, vi } from 'vitest';

import { buildChallenge } from '@freecodecamp/challenge-builder/build';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

import { getTestRunner } from '../utils/build';
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

describe('updatePreviewSaga console output', () => {
  // The console is rendered with dangerouslySetInnerHTML, so anything the
  // learner logs has to be escaped before it reaches the store. Without this,
  // a log of "&amp;" is decoded on render and shown as "&", which breaks
  // challenges that ask campers to produce HTML entities. See #63788.
  it('escapes the logs of JavaScript challenges', () => {
    const runUserCode = () => {};
    const state = {
      challenge: {
        isBuildEnabled: true,
        isExecuting: false,
        challengeMeta: { challengeType: challengeTypes.jsLab },
        challengeFiles: []
      }
    };

    return expectSaga(updatePreviewSaga, challengeMounted)
      .withReducer((s = state) => s)
      .provide([
        [matchers.call.fn(buildChallenge), {}],
        [matchers.call.fn(getTestRunner), runUserCode],
        [
          matchers.call.fn(runUserCode),
          [{ logs: [{ msg: 'Dolce &amp; Gabbana' }] }]
        ]
      ])
      .put({
        type: 'challenge.updateConsole',
        payload: 'Dolce &amp;amp; Gabbana'
      })
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
