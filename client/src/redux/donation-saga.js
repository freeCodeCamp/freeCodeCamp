import { put, select, takeEvery, delay, call } from 'redux-saga/effects';

import {
  openDonationModal,
  preventBlockDonationRequests,
  shouldRequestDonationSelector,
  preventProgressDonationRequests,
  canRequestBlockDonationSelector,
  addDonationComplete,
  addDonationError
} from './';

import { addDonation } from '../utils/ajax';

const defaultDonationError = `Something is not right. Please contact donors@freecodecamp.org`;

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

function* addDonationSaga({ payload }) {
  try {
    yield call(addDonation, payload);
    yield put(addDonationComplete());
  } catch (error) {
    const data =
      error.response && error.response.data
        ? error.response.data
        : {
            message: defaultDonationError
          };
    yield put(addDonationError(data.message));
  }
}

export function createDonationSaga(types) {
  return [
    takeEvery(types.tryToShowDonationModal, showDonateModalSaga),
    takeEvery(types.addDonation, addDonationSaga)
  ];
}
