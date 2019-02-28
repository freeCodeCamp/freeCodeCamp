import { takeEvery, put } from 'redux-saga/effects';

// import { put, takeEvery, take } from 'redux-saga/effects';

import { openDonationModal } from '../../../../../redux';

function* showDonateModalSaga() {
  console.log('hello');
  yield put(openDonationModal());
}

export function createSideNavigationSaga(types) {
  takeEvery(types.toggleDisplaySideNav, showDonateModalSaga);
}
