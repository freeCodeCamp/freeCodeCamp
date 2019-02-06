import { put, select, call, takeEvery } from 'redux-saga/effects';

import {
  isSignedInSelector,
  currentChallengeIdSelector,
  updateComplete,
  updateFailed
} from '../../../redux';

import { post } from '../../../utils/ajax';

import { randomCompliment } from '../utils/get-words';
import { updateSuccessMessage } from './';

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

function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga)
  ];
}
