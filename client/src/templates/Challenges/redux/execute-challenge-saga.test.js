// The eslint-plugin-vitest plugin does not recognize assertions made through
// expectSaga.
/* eslint-disable vitest/expect-expect */
import { runSaga } from 'redux-saga';
import { expectSaga } from 'redux-saga-test-plan';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

import { recordClientActivity } from '../../../utils/activity';
import {
  executeTests,
  recordTestRunActivitySaga,
  updatePreviewSaga
} from './execute-challenge-saga';

vi.mock('i18next', async () => ({
  default: {
    t: key => key
  }
}));
vi.mock('../../../utils/activity', () => ({ recordClientActivity: vi.fn() }));

const initialState = {
  challenge: { isBuildEnabled: true, isExecuting: false, challengeMeta: {} }
};

// We're not testing the reducer here, so just return the initial state
function reducer(state = initialState) {
  return state;
}

const createState = (sessionUser = { id: 'user-id' }) => ({
  app: { user: { sessionUser } }
});

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

describe('recordTestRunActivitySaga', () => {
  beforeEach(() => {
    vi.mocked(recordClientActivity).mockReset();
    vi.mocked(recordClientActivity).mockResolvedValue({ recorded: true });
  });

  it.each([
    [challengeTypes.js, 'test_run'],
    [challengeTypes.dailyChallengeJs, 'daily_challenge_attempted'],
    [challengeTypes.dailyChallengePy, 'daily_challenge_attempted']
  ])('records challenge type %s as %s', async (challengeType, eventType) => {
    await runSaga(
      { getState: () => createState() },
      recordTestRunActivitySaga,
      { id: 'challenge-id', challengeType }
    ).toPromise();

    expect(recordClientActivity).toHaveBeenCalledWith(eventType, {
      subjectId: 'challenge-id'
    });
  });

  it('does not record activity for a signed-out camper', async () => {
    await runSaga(
      { getState: () => createState(null) },
      recordTestRunActivitySaga,
      { id: 'challenge-id', challengeType: challengeTypes.js }
    ).toPromise();

    expect(recordClientActivity).not.toHaveBeenCalled();
  });

  it('does not wait for an unresolved activity request', async () => {
    let resolveActivity;
    vi.mocked(recordClientActivity).mockReturnValueOnce(
      new Promise(resolve => {
        resolveActivity = resolve;
      })
    );

    const task = runSaga(
      { getState: () => createState() },
      recordTestRunActivitySaga,
      { id: 'challenge-id', challengeType: challengeTypes.js }
    );
    const completion = await Promise.race([
      task.toPromise().then(() => 'completed'),
      new Promise(resolve => setTimeout(() => resolve('blocked'), 50))
    ]);

    expect(completion).toBe('completed');
    expect(recordClientActivity).toHaveBeenCalledOnce();
    resolveActivity({ recorded: true });
  });
});
