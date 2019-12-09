import { put, select, takeEvery, delay } from 'redux-saga/effects';

import {
  openDonationModal,
  preventBlockDonationRequests,
  shouldRequestDonationSelector,
  preventProgressDonationRequests,
  canRequestBlockDonationSelector
} from './';

function* showDonateModalSaga() {
  let shouldRequestDonation = yield select(shouldRequestDonationSelector);
  if (shouldRequestDonation) {
    yield delay(200);
    const isBlockDonation = yield select(canRequestBlockDonationSelector);
    yield put(openDonationModal(isBlockDonation));
    if (isBlockDonation) {
      yield put(preventBlockDonationRequests());
    } else {
      yield put(preventProgressDonationRequests());
    }
  }
}

export function createDonationSaga(types) {
  return [takeEvery(types.tryToShowDonationModal, showDonateModalSaga)];
}
