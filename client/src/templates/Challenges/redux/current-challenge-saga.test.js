import { runSaga } from 'redux-saga';
import { takeEvery, throttle } from 'redux-saga/effects';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import {
  recordClientActivity,
  signalMeaningfulActivity
} from '../../../utils/activity';
import { updateResumeUrl } from '../../../redux/actions';
import {
  createCurrentChallengeSaga,
  updateActivityOnSubmitSaga
} from './current-challenge-saga';

vi.mock('../../../utils/get-words', () => ({ randomCompliment: () => '' }));
vi.mock('../../../utils/activity', () => ({
  recordClientActivity: vi.fn(),
  signalMeaningfulActivity: vi.fn()
}));

const createState = (sessionUser = { id: 'user-id' }) => ({
  app: { user: { sessionUser } },
  challenge: {}
});

describe('current challenge activity', () => {
  beforeEach(() => {
    vi.mocked(recordClientActivity).mockReset();
    vi.mocked(recordClientActivity).mockResolvedValue({ recorded: true });
    vi.mocked(signalMeaningfulActivity).mockReset();
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

    expect(recordClientActivity).toHaveBeenCalledWith('challenge_submit', {
      subjectId: 'submitted-challenge',
      url: '/learn/next-challenge'
    });
    expect(signalMeaningfulActivity).toHaveBeenCalledOnce();
    expect(dispatched).toContainEqual(updateResumeUrl('/learn/next-challenge'));
  });

  test('records activity only after submission completes', () => {
    const types = {
      challengeMounted: 'challenge-mounted',
      updateFile: 'update-file',
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
    expect(effects).toContainEqual(
      throttle(60_000, types.updateFile, expect.any(Function))
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
    expect(signalMeaningfulActivity).not.toHaveBeenCalled();
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

  test('does not update the resume URL when persistence is rejected', async () => {
    vi.mocked(recordClientActivity).mockResolvedValueOnce({ recorded: false });
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

    expect(dispatched).not.toContainEqual(
      updateResumeUrl('/learn/next-challenge')
    );
  });
});
