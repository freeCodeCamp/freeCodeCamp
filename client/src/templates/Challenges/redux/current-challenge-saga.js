import { put, select, takeEvery } from 'redux-saga/effects';
import store from 'store';

import {
  isSignedInSelector,
  updateComplete,
  updateFailed
} from '../../../redux';

import { randomCompliment } from '../../../utils/get-words';
import { updateSuccessMessage } from './';

export const CURRENT_CHALLENGE_KEY = 'currentChallengeId';

export function* currentChallengeSaga({ payload: id }) {
  store.set(CURRENT_CHALLENGE_KEY, id);
  const isSignedIn = yield select(isSignedInSelector);
  if (isSignedIn) {
    const update = {
      endpoint: '/update-my-current-challenge',
      payload: {
        currentChallengeId: id
      }
    };
    try {
      // Temporarily removed to reduce calls to database
      // will need to re-import things at the top
      // yield call(post, update.endpoint, update.payload);
      yield put(updateComplete());
    } catch {
      yield put(updateFailed(update));
    }
  }
}

export function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga)
  ];
}
