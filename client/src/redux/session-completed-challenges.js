import { takeEvery, call } from 'redux-saga/effects';

import { incrementSessionCompletedChallenges } from '../utils/session-completed-challenges';

function* SessionCompletedChallengesSaga() {
  yield call(incrementSessionCompletedChallenges);
}

export function createSessionCompletedChallengesSaga(types) {
  return [takeEvery(types.submitComplete, SessionCompletedChallengesSaga)];
}
