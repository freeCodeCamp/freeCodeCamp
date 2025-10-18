import { navigate } from 'gatsby';
import { call, put, take, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../../components/Flash/redux';
import { FlashMessages } from '../../components/Flash/redux/flash-messages';
import {
  postDeleteAccount,
  postResetProgress,
  postResetModule
} from '../../utils/ajax';
import { actionTypes as appTypes } from '../action-types';
import { fetchUser, resetUserData } from '../actions';
import {
  deleteAccountError,
  resetProgressError,
  resetModuleError
} from './actions';

function* deleteAccountSaga() {
  try {
    yield call(postDeleteAccount);
    yield put(
      createFlashMessage({
        type: 'info',
        message: FlashMessages.AccountDeleted
      })
    );
    // remove current user information from application state
    yield put(resetUserData());
    yield call(navigate, '/learn');
  } catch (e) {
    yield put(deleteAccountError(e));
  }
}

function* resetProgressSaga() {
  try {
    yield call(postResetProgress);
    yield put(
      createFlashMessage({
        type: 'info',
        message: FlashMessages.ProgressReset
      })
    );
    // refresh current user data in application state
    yield put(fetchUser());
    // wait for the refresh to complete
    yield take(appTypes.fetchUserComplete);
    // the complete action has been called
    yield call(navigate, '/');
  } catch (e) {
    yield put(resetProgressError(e));
  }
}

function* resetModuleSaga({ payload: blockId }) {
  try {
    yield call(postResetModule, { blockId });
    yield put(
      createFlashMessage({
        type: 'info',
        message: FlashMessages.ModuleReset
      })
    );
    // refresh current user data in application state
    yield put(fetchUser());
    // wait for the refresh to complete
    yield take(appTypes.fetchUserComplete);
  } catch (e) {
    yield put(resetModuleError(e));
  }
}

export function createDangerZoneSaga(types) {
  return [
    takeEvery(types.deleteAccount, deleteAccountSaga),
    takeEvery(types.resetProgress, resetProgressSaga),
    takeEvery(types.resetModule, resetModuleSaga)
  ];
}
