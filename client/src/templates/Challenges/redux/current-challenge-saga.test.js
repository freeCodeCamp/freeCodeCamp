import { runSaga } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { postActivity } from '../../../utils/ajax';
import { updateResumeUrl } from '../../../redux/actions';
import {
  createCurrentChallengeSaga,
  updateActivityOnSubmitSaga
} from './current-challenge-saga';

vi.mock('uuid', () => ({ v4: () => '00000000-0000-4000-8000-000000000001' }));
vi.mock('../../../utils/get-words', () => ({ randomCompliment: () => '' }));
vi.mock('../../../utils/ajax', () => ({
  postActivity: vi.fn()
}));

const createState = (sessionUser = { id: 'user-id' }) => ({
  app: { user: { sessionUser } },
  challenge: {}
});

describe('current challenge activity', () => {
  beforeEach(() => {
    vi.mocked(postActivity).mockReset();
    vi.mocked(postActivity).mockResolvedValue({
      response: { ok: true }
    });
  });

  test('reports the next URL after a successful submission', async () => {
    const activity = {
      challengeId: 'submitted-challenge',
      nextChallengePath: '/learn/next-challenge'
    };

    const dispatched = [];
    await runSaga(
      {
        getState: () => createState(),
        dispatch: action => dispatched.push(action)
      },
      updateActivityOnSubmitSaga,
      { payload: activity }
    ).toPromise();

    expect(postActivity).toHaveBeenCalledWith(
      expect.objectContaining({
        eventId: '00000000-0000-4000-8000-000000000001',
        eventType: 'challenge_submit',
        challengeId: 'submitted-challenge',
        url: '/learn/next-challenge',
        occurredAt: expect.any(String),
        timezone: expect.any(String)
      })
    );
    expect(dispatched).toContainEqual(updateResumeUrl('/learn/next-challenge'));
  });

  test('reports activity only after submission completes', () => {
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

  test('does not report activity for a signed-out user', async () => {
    const activity = {
      challengeId: 'submitted-challenge',
      nextChallengePath: '/learn/next-challenge'
    };

    await runSaga(
      { getState: () => createState(null) },
      updateActivityOnSubmitSaga,
      { payload: activity }
    ).toPromise();

    expect(postActivity).not.toHaveBeenCalled();
  });

  test('does not fail the submission flow when reporting fails', async () => {
    const activity = {
      challengeId: 'submitted-challenge',
      nextChallengePath: '/learn/next-challenge'
    };
    vi.mocked(postActivity).mockRejectedValueOnce(
      new Error('Activity API unavailable')
    );

    await expect(
      runSaga({ getState: () => createState() }, updateActivityOnSubmitSaga, {
        payload: activity
      }).toPromise()
    ).resolves.toBeUndefined();
    expect(postActivity).toHaveBeenCalledOnce();
  });

  test('does not update the resume URL when persistence fails', async () => {
    const activity = {
      challengeId: 'submitted-challenge',
      nextChallengePath: '/learn/next-challenge'
    };
    vi.mocked(postActivity).mockResolvedValueOnce({
      response: { ok: false }
    });
    const dispatched = [];

    await runSaga(
      {
        getState: () => createState(),
        dispatch: action => dispatched.push(action)
      },
      updateActivityOnSubmitSaga,
      { payload: activity }
    ).toPromise();

    expect(dispatched).not.toContainEqual(
      updateResumeUrl('/learn/next-challenge')
    );
  });
});
