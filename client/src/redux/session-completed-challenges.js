import { takeEvery, call } from 'redux-saga/effects';

import { incrementCurrentCount } from '../utils/session-storage';

function* SessionCompletedChallengesSaga() {
  yield call(incrementCurrentCount);
}

export function createSessionCompletedChallengesSaga(types) {
  return [takeEvery(types.submitComplete, SessionCompletedChallengesSaga)];
}
