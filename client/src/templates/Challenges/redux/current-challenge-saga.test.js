import { runSaga } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { recordClientActivity } from '../../../utils/activity';
import { updateResumeUrl } from '../../../redux/actions';
import {
  createCurrentChallengeSaga,
  updateActivityOnSubmitSaga
} from './current-challenge-saga';

vi.mock('../../../utils/get-words', () => ({ randomCompliment: () => '' }));
vi.mock('../../../utils/activity', () => ({
  recordClientActivity: vi.fn()
}));

const createState = (sessionUser = { id: 'user-id' }) => ({
  app: { user: { sessionUser } },
  challenge: {}
});

describe('current challenge activity', () => {
  beforeEach(() => {
    vi.mocked(recordClientActivity).mockReset();
    vi.mocked(recordClientActivity).mockResolvedValue({ recorded: true });
  });

  test('records the next URL after a successful submission', async () => {
    const dispatched = [];
    await runSaga(
      {
        getState: () => createState(),
        dispatch: action => dispatched.push(action)
      },
      updateActivityOnSubmitSaga,
      {
        payload: {
          challengeId: 'submitted-challenge',
          nextChallengePath: '/learn/next-challenge'
        }
      }
    ).toPromise();

    expect(recordClientActivity).toHaveBeenCalledWith(
      'submitted-challenge',
      '/learn/next-challenge'
    );
    expect(dispatched).toContainEqual(updateResumeUrl('/learn/next-challenge'));
  });

  test('records activity only after submission completes', () => {
    const types = {
      challengeMounted: 'challenge-mounted',
      submitChallenge: 'submit-challenge',
      submitChallengeComplete: 'submit-challenge-complete'
    };
    const effects = createCurrentChallengeSaga(types);

    expect(effects).toContainEqual(
      takeEvery(types.submitChallengeComplete, updateActivityOnSubmitSaga)
    );
    expect(effects).not.toContainEqual(
      takeEvery(types.submitChallenge, updateActivityOnSubmitSaga)
    );
  });

  test('does not record activity for a signed-out user', async () => {
    await runSaga(
      { getState: () => createState(null) },
      updateActivityOnSubmitSaga,
      {
        payload: {
          challengeId: 'submitted-challenge',
          nextChallengePath: '/learn/next-challenge'
        }
      }
    ).toPromise();

    expect(recordClientActivity).not.toHaveBeenCalled();
  });

  test('finishes without waiting for an unresolved analytics request', async () => {
    let finishRecording;
    vi.mocked(recordClientActivity).mockReturnValueOnce(
      new Promise(resolve => {
        finishRecording = resolve;
      })
    );
    const dispatched = [];
    const task = runSaga(
      {
        getState: () => createState(),
        dispatch: action => dispatched.push(action)
      },
      updateActivityOnSubmitSaga,
      {
        payload: {
          challengeId: 'submitted-challenge',
          nextChallengePath: '/learn/next-challenge'
        }
      }
    );

    try {
      await expect(task.toPromise()).resolves.toBeUndefined();
      expect(dispatched).toHaveLength(0);
    } finally {
      finishRecording({ recorded: true });
    }
    await Promise.resolve();
    expect(dispatched).toContainEqual(updateResumeUrl('/learn/next-challenge'));
  });

  test('does not fail completion or update state when recording fails', async () => {
    vi.mocked(recordClientActivity).mockRejectedValueOnce(
      new Error('Activity API unavailable')
    );
    const dispatched = [];

    await expect(
      runSaga(
        {
          getState: () => createState(),
          dispatch: action => dispatched.push(action)
        },
        updateActivityOnSubmitSaga,
        {
          payload: {
            challengeId: 'submitted-challenge',
            nextChallengePath: '/learn/next-challenge'
          }
        }
      ).toPromise()
    ).resolves.toBeUndefined();
    expect(dispatched).toHaveLength(0);
  });
});
