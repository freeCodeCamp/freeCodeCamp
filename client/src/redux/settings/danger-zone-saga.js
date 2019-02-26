import { navigate } from 'gatsby';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  deleteAccountComplete,
  deleteAccountError,
  resetProgressComplete,
  resetProgressError
} from './';
import { resetUserData, fetchUser } from '../';
import { postResetProgress, postDeleteAccount } from '../../utils/ajax';
import { createFlashMessage } from '../../components/Flash/redux';

function* deleteAccountSaga() {
  try {
    const { data: response } = yield call(postDeleteAccount);
    yield put(deleteAccountComplete(response));
    // remove current user information from application state
    yield put(resetUserData());
    yield call(navigate, '/');
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(deleteAccountError(e));
  }
}

function* resetProgressSaga() {
  try {
    const { data: response } = yield call(postResetProgress);
    yield put(resetProgressComplete(response));
    // refresh current user data in application state
    yield put(fetchUser());
    yield call(navigate, '/welcome');
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
