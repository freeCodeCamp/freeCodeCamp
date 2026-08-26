import { call, put, select, takeEvery, throttle } from 'redux-saga/effects';
import store from 'store';

import { randomCompliment } from '../../../utils/get-words';
import {
  recordClientActivity,
  signalMeaningfulActivity
} from '../../../utils/activity';
import { updateResumeUrl } from '../../../redux/actions';
import { isSignedInSelector } from '../../../redux/selectors';
import { CURRENT_CHALLENGE_KEY } from './action-types';
import { challengeMetaSelector } from './selectors';
import { updateSuccessMessage } from './actions';

function* currentChallengeSaga({ payload: id }) {
  yield store.set(CURRENT_CHALLENGE_KEY, id);
}

function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

function* recordChallengeWorkSaga() {
  const isSignedIn = yield select(isSignedInSelector);
  if (!isSignedIn) return;
  const { id } = yield select(challengeMetaSelector);
  yield call(recordClientActivity, 'challenge_work', {
    subjectId: id
  });
}

export function* updateActivityOnSubmitSaga({ payload = {} }) {
  const { challengeId, nextChallengePath, moduleCompleted } = payload;
  const isSignedIn = yield select(isSignedInSelector);
  if (!isSignedIn) return;

  // This saga only runs after a successful server submission. The server
  // completion event is the persisted fact; this signal starts the local timer.
  yield call(signalMeaningfulActivity);

  if (moduleCompleted) {
    yield call(recordClientActivity, 'module_completed', {
      subjectId: challengeId
    });
  }

  if (!nextChallengePath) return;

  try {
    const result = yield call(recordClientActivity, 'challenge_submit', {
      subjectId: challengeId,
      url: nextChallengePath
    });
    if (result?.recorded) {
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
    throttle(60_000, types.updateFile, recordChallengeWorkSaga),
    takeEvery(types.submitChallengeComplete, updateActivityOnSubmitSaga)
  ];
}
