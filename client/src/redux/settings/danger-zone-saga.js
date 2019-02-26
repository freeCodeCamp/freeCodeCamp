import { call, put, takeEvery } from 'redux-saga/effects';

import {
  deleteAccountComplete,
  deleteAccountError,
  resetProgressComplete,
  resetProgressError
} from './';

import {
  postResetProgress,
  postDeleteAccount
} from '../../utils/ajax';
import { createFlashMessage } from '../../components/Flash/redux';

function* deleteAccountSaga({ payload }) {
  try {
    const { data: response } = yield call(postDeleteAccount, payload);
    yield put(deleteAccountComplete(response));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(deleteAccountError(e));
  }
}

function* resetProgressSaga({ payload }) {
  try {
    const { data: response } = yield call(postResetProgress, payload);
    yield put(resetProgressComplete(response));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(resetProgressError(e));
  }
}

export function createDangerZoneSaga(types) {
  return [
    takeEvery(types.deleteAccount, deleteAccountSaga),
    takeEvery(types.resetProgress, resetProgressSaga)
  ];
}
