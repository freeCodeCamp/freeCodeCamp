import { put, select, call, takeEvery, take } from 'redux-saga/effects';
import store from 'store';

import {
  isSignedInSelector,
  updateComplete,
  updateFailed,
  openDonationModal,
  shouldRequestDonationSelector,
  donationRequested
} from '../../../redux';

import { post } from '../../../utils/ajax';

import { randomCompliment } from '../utils/get-words';
import { updateSuccessMessage, types as challTypes } from './';

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

function* showDonateModalSaga() {
  /* wait for the newchallenge to be mounted to avoid mounting
    the donation modal twice, once for the old chall and once for the new one
    */
  yield take(challTypes.challengeMounted);

  let shouldRequestDonation = yield select(shouldRequestDonationSelector);
  if (shouldRequestDonation) {
    yield put(openDonationModal());
    yield put(donationRequested());
  }
}

export function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.lastBlockChalSubmitted, showDonateModalSaga)
  ];
}
