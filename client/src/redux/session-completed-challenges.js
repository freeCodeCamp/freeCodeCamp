import { takeEvery, call } from 'redux-saga/effects';

import { incrementSessionCompletedChallenges } from '../utils/session-storage';

function* SessionCompletedChallengesSaga() {
  yield call(incrementSessionCompletedChallenges);
}

export function createSessionCompletedChallengesSaga(types) {
  return [takeEvery(types.submitComplete, SessionCompletedChallengesSaga)];
}
