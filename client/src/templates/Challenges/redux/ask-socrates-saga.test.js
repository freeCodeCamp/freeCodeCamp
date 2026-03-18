/* eslint-disable vitest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { describe, it, vi } from 'vitest';

import { askSocratesSaga } from './ask-socrates-saga';

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
        payload: { error: 'Socrates is not enabled for your account.' }
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
          error: 'Check your code before asking Socrates for a hint.'
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
          error:
            'Congratulations, your code passes! Press submit and continue to the next challenge.'
        }
      })
      .silentRun();
  });

  it('dispatches error when buildChallenge returns no user input', async () => {
    const { buildChallenge } = await import(
      '@freecodecamp/challenge-builder/build'
    );

    return expectSaga(askSocratesSaga)
      .withReducer(reducer)
      .provide([
        [
          matchers.call.fn(buildChallenge),
          { sources: { editableContents: '' }, build: '<h1></h1>' }
        ]
      ])
      .put({
        type: 'challenge.askSocratesError',
        payload: {
          error: 'Please write some code before asking Socrates for a hint.'
        }
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
          error: 'Something went wrong while asking Socrates. Please try again.'
        }
      })
      .silentRun();
  });
});
