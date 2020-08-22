import { put, select, call, takeEvery } from 'redux-saga/effects';
import store from 'store';

import {
  isSignedInSelector,
  updateComplete,
  updateFailed,
  allowBlockDonationRequests
} from '../../../redux';

import { post } from '../../../utils/ajax';

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
      yield call(post, update.endpoint, update.payload);
      yield put(updateComplete());
    } catch {
      yield put(updateFailed(update));
    }
  }
}

export function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

export function* allowBlockDonationRequestsSaga() {
  yield put(allowBlockDonationRequests());
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.lastBlockChalSubmitted, allowBlockDonationRequestsSaga)
  ];
}
