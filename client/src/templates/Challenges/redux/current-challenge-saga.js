import { call, put, select, takeEvery } from 'redux-saga/effects';
import store from 'store';

import { randomCompliment } from '../../../utils/get-words';
import { postActivity } from '../../../utils/ajax';
import { isSignedInSelector } from '../../../redux/selectors';
import { CURRENT_CHALLENGE_KEY } from './action-types';
import { updateSuccessMessage } from './actions';
import { challengeMetaSelector } from './selectors';

let lastSentChallengeId = null;

function* currentChallengeSaga({ payload: id }) {
  yield store.set(CURRENT_CHALLENGE_KEY, id);
}

function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

function* reportActivitySaga() {
  const isSignedIn = yield select(isSignedInSelector);
  if (!isSignedIn) return;

  const challengeMeta = yield select(challengeMetaSelector);
  if (!challengeMeta?.id) return;
  if (challengeMeta.id === lastSentChallengeId) return;

  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  try {
    yield call(postActivity, { challengeId: challengeMeta.id, url });
    lastSentChallengeId = challengeMeta.id;
  } catch {
    // Non-critical — activity tracking should not block the user
  }
}

function* updateActivityOnSubmitSaga() {
  const isSignedIn = yield select(isSignedInSelector);
  if (!isSignedIn) return;

  const challengeMeta = yield select(challengeMetaSelector);
  if (!challengeMeta?.nextChallengePath) return;

  try {
    yield call(postActivity, {
      challengeId: challengeMeta.id,
      url: challengeMeta.nextChallengePath
    });
    // Reset so the next challenge's executeChallenge can fire
    lastSentChallengeId = null;
  } catch {
    // Non-critical
  }
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.executeChallenge, reportActivitySaga),
    takeEvery(types.submitChallenge, updateActivityOnSubmitSaga)
  ];
}
