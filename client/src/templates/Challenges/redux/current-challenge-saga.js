import { put, select, call, takeEvery } from 'redux-saga/effects';
import store from 'store';

import {
  isSignedInSelector,
  currentChallengeIdSelector,
  openDonationModal,
  showDonationSelector,
  updateCurrentChallengeId,
  donationRequested,
  updateComplete,
  updateFailed,
  userSelector
} from '../../../redux';

import { post } from '../../../utils/ajax';

import { randomCompliment } from '../utils/get-words';
import { updateSuccessMessage } from './';

export const CURRENT_CHALLENGE_KEY = 'currentChallengeId';

export function* currentChallengeSaga({ payload: id }) {
  const isSignedIn = yield select(isSignedInSelector);
  const currentChallengeId = yield select(currentChallengeIdSelector);
  // TODO: should the server update take place on challenge completion instead?
  if (isSignedIn && id !== currentChallengeId) {
    store.set(CURRENT_CHALLENGE_KEY, id);
    yield put(updateCurrentChallengeId(id));

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

function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

function* showDonateModalSaga() {
  let { isDonating } = yield select(userSelector);
  let shouldShowDonate = yield select(showDonationSelector);
  if (!isDonating && shouldShowDonate) {
    yield put(openDonationModal());
    yield put(donationRequested());
  }
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.challengeMounted, showDonateModalSaga)
  ];
}
