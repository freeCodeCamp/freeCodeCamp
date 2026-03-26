/* eslint-disable vitest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { describe, it, vi } from 'vitest';

import { askSocratesSaga } from './ask-socrates-saga';

vi.mock('i18next', async () => ({
  default: {
    t: key => key
  }
}));

vi.mock('@freecodecamp/challenge-builder/build', () => ({
  buildChallenge: vi.fn()
}));

vi.mock('../../../utils/ajax', () => ({
  getSocratesHint: vi.fn()
}));

const baseState = {
  app: {
    user: {
      sessionUser: {
        socrates: true
      }
    }
  },
  challenge: {
    challengeTests: [
      { text: 'Test 1', pass: false, err: 'Expected true' },
      { text: 'Test 2', pass: true }
    ],
    challengeMeta: { description: 'Make the text say hello' },
    challengeFiles: {
      indexhtml: {
        contents: '<h1>Hello</h1>',
        editableContents: 'Hello world',
        ext: 'html',
        key: 'indexhtml'
      }
    }
  }
};

function reducer(state = baseState) {
  return state;
}

describe('askSocratesSaga', () => {
  it('dispatches error when socrates is not enabled', () => {
    const state = {
      ...baseState,
      app: {
        user: {
          sessionUser: {
            socrates: false
          }
        }
      }
    };

    return expectSaga(askSocratesSaga)
      .withReducer(reducer, state)
      .put({
        type: 'challenge.askSocratesError',
        payload: { error: 'learn.socrates-not-enabled' }
      })
      .silentRun();
  });

  it('dispatches error when code has not been checked', () => {
    const state = {
      ...baseState,
      challenge: {
        ...baseState.challenge,
        challengeTests: [
          { text: 'Test 1', pass: false },
          { text: 'Test 2', pass: false }
        ]
      }
    };

    return expectSaga(askSocratesSaga)
      .withReducer(reducer, state)
      .put({
        type: 'challenge.askSocratesError',
        payload: {
          error: 'learn.socrates-check-code-first'
        }
      })
      .silentRun();
  });

  it('dispatches error when all tests pass', () => {
    const state = {
      ...baseState,
      challenge: {
        ...baseState.challenge,
        challengeTests: [
          { text: 'Test 1', pass: true },
          { text: 'Test 2', pass: true }
        ]
      }
    };

    return expectSaga(askSocratesSaga)
      .withReducer(reducer, state)
      .put({
        type: 'challenge.askSocratesError',
        payload: {
          error: 'learn.socrates-code-passes'
        }
      })
      .silentRun();
  });

  it('dispatches error when buildChallenge returns no seed', async () => {
    const { buildChallenge } = await import(
      '@freecodecamp/challenge-builder/build'
    );

    return expectSaga(askSocratesSaga)
      .withReducer(reducer)
      .provide([
        [
          matchers.call.fn(buildChallenge),
          { sources: { editableContents: 'Hello world' }, build: '' }
        ]
      ])
      .put({
        type: 'challenge.askSocratesError',
        payload: {
          error: 'learn.socrates-write-code-first'
        }
      })
      .silentRun();
  });

  it('dispatches complete without userInput when editableContents is empty', async () => {
    const { buildChallenge } = await import(
      '@freecodecamp/challenge-builder/build'
    );
    const { getSocratesHint } = await import('../../../utils/ajax');

    return expectSaga(askSocratesSaga)
      .withReducer(reducer)
      .provide([
        [
          matchers.call.fn(buildChallenge),
          {
            sources: { editableContents: '', contents: '' },
            build: '<h1>Hello</h1>'
          }
        ],
        [
          matchers.call.fn(getSocratesHint),
          {
            data: { hint: 'A hint.', attempts: 1, limit: 3 }
          }
        ]
      ])
      .put({
        type: 'challenge.askSocratesComplete',
        payload: { hint: 'A hint.', attempts: 1, limit: 3 }
      })
      .silentRun();
  });

  it('dispatches complete with hint on successful API response', async () => {
    const { buildChallenge } = await import(
      '@freecodecamp/challenge-builder/build'
    );
    const { getSocratesHint } = await import('../../../utils/ajax');

    return expectSaga(askSocratesSaga)
      .withReducer(reducer)
      .provide([
        [
          matchers.call.fn(buildChallenge),
          {
            sources: { editableContents: 'Hello world' },
            build: '<h1>Hello</h1>'
          }
        ],
        [
          matchers.call.fn(getSocratesHint),
          {
            data: { hint: 'Try adding a closing tag.', attempts: 1, limit: 3 }
          }
        ]
      ])
      .put({
        type: 'challenge.askSocratesComplete',
        payload: { hint: 'Try adding a closing tag.', attempts: 1, limit: 3 }
      })
      .silentRun();
  });

  it('dispatches error with attempts/limit on API error response', async () => {
    const { buildChallenge } = await import(
      '@freecodecamp/challenge-builder/build'
    );
    const { getSocratesHint } = await import('../../../utils/ajax');

    return expectSaga(askSocratesSaga)
      .withReducer(reducer)
      .provide([
        [
          matchers.call.fn(buildChallenge),
          {
            sources: { editableContents: 'Hello world' },
            build: '<h1>Hello</h1>'
          }
        ],
        [
          matchers.call.fn(getSocratesHint),
          {
            data: {
              error: 'Daily limit reached.',
              attempts: 3,
              limit: 3
            }
          }
        ]
      ])
      .put({
        type: 'challenge.askSocratesError',
        payload: { error: 'Daily limit reached.', attempts: 3, limit: 3 }
      })
      .silentRun();
  });

  it('dispatches generic error when API call throws', async () => {
    const { buildChallenge } = await import(
      '@freecodecamp/challenge-builder/build'
    );
    const { getSocratesHint } = await import('../../../utils/ajax');

    return expectSaga(askSocratesSaga)
      .withReducer(reducer)
      .provide([
        [
          matchers.call.fn(buildChallenge),
          {
            sources: { editableContents: 'Hello world' },
            build: '<h1>Hello</h1>'
          }
        ],
        [matchers.call.fn(getSocratesHint), throwError(new Error('Network'))]
      ])
      .put({
        type: 'challenge.askSocratesError',
        payload: {
          error: 'learn.socrates-generic-error'
        }
      })
      .silentRun();
  });
});
