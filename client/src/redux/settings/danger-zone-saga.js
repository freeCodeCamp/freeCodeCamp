import { navigate } from 'gatsby';
import { call, put, select, take, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../../components/Flash/redux';
import { FlashMessages } from '../../components/Flash/redux/flash-messages';
import {
  getSignout,
  postDeleteAccount,
  postResetProgress
} from '../../utils/ajax';
import { actionTypes as appTypes } from '../action-types';
import { fetchUser, hardGoTo } from '../actions';
import { userIdSelector } from '../selectors';
import { deleteAccountError, resetProgressError } from './actions';

export function* deleteAccountSaga() {
  try {
    const userId = yield select(userIdSelector);
    if (!userId) {
      throw new Error('Unable to delete account: no user id found');
    }
    yield call(postDeleteAccount, userId);
    yield call(getSignout);
    yield put(
      createFlashMessage({
        type: 'info',
        message: FlashMessages.AccountDeleted
      })
    );
    yield put(hardGoTo('/learn'));
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

export function createDangerZoneSaga(types) {
  return [
    takeEvery(types.deleteAccount, deleteAccountSaga),
    takeEvery(types.resetProgress, resetProgressSaga)
  ];
}
