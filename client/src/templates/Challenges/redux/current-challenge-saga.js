import { put, select, call, takeEvery } from 'redux-saga/effects';

import {
  isSignedInSelector,
  currentChallengeIdSelector,
  updateComplete,
  updateFailed
} from '../../../redux';

import { post } from '../../../utils/ajax';

function* currentChallengeSaga({ payload }) {
  const isSignedIn = yield select(isSignedInSelector);
  const currentChallengeId = yield select(currentChallengeIdSelector);
  if (isSignedIn && payload !== currentChallengeId) {
    const update = {
      endpoint: '/update-my-current-challenge',
      payload: {
        currentChallengeId: payload
      }
    };
    try {
      yield call(post, update.endpoint, update.payload);
      yield put(updateComplete());
    } catch {
      yield put(updateFailed(update));
    }
  }
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga)
  ];
}
