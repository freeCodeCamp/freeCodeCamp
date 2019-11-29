import { put, select, takeEvery, delay } from 'redux-saga/effects';

import {
  openDonationModal,
  shouldRequestDonationSelector,
  donationRequested
} from './';

function* showDonateModalSaga() {
  let shouldRequestDonation = yield select(shouldRequestDonationSelector);
  if (shouldRequestDonation) {
    yield delay(200);
    yield put(openDonationModal());
    yield put(donationRequested());
  }
}

export function createDonationSaga(types) {
  return [takeEvery(types.tryToShowDonationModal, showDonateModalSaga)];
}
