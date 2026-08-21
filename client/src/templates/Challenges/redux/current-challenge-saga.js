import { call, put, select, takeEvery } from 'redux-saga/effects';
import store from 'store';
import { v4 as uuid } from 'uuid';

import { randomCompliment } from '../../../utils/get-words';
import { postActivity } from '../../../utils/ajax';
import { updateResumeUrl } from '../../../redux/actions';
import { isSignedInSelector } from '../../../redux/selectors';
import { CURRENT_CHALLENGE_KEY } from './action-types';
import { updateSuccessMessage } from './actions';

function* currentChallengeSaga({ payload: id }) {
  yield store.set(CURRENT_CHALLENGE_KEY, id);
}

function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';

export function* updateActivityOnSubmitSaga({
  payload: { challengeId, nextChallengePath }
}) {
  const isSignedIn = yield select(isSignedInSelector);
  if (!isSignedIn) return;
  if (!nextChallengePath) return;

  try {
    const { response } = yield call(postActivity, {
      eventId: uuid(),
      eventType: 'challenge_submit',
      challengeId,
      url: nextChallengePath,
      occurredAt: new Date().toISOString(),
      timezone: getTimezone()
    });
    if (response.ok) {
      yield put(updateResumeUrl(nextChallengePath));
    }
  } catch {
    // Non-critical — activity tracking should not block the user
  }
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.submitChallengeComplete, updateActivityOnSubmitSaga)
  ];
}
