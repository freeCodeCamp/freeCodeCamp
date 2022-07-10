import { call, put, takeEvery } from 'redux-saga/effects';
import isEmail from 'validator/lib/isEmail';
import { createAction } from 'redux-actions';

import { createFlashMessage } from '../../components/Flash/redux';

import { putUserUpdateEmail } from '../../utils/ajax';
import reallyWeirdErrorMessage from '../../utils/really-weird-error-message';
import { actionTypes as types } from './action-types';

function* updateMyEmailSaga({ payload: email = '' }) {
  if (!email || !isEmail(email)) {
    yield put(createFlashMessage(reallyWeirdErrorMessage));
    return;
  }
  try {
    const { data } = yield call(putUserUpdateEmail, email);
    yield put(
      updateMyEmailComplete({
        ...data,
        payload: { email, isEmailVerified: false }
      })
    );
    yield put(createFlashMessage(data));
  } catch (e) {
    yield put(updateMyEmailError(e));
  }
}

export const updateMyEmail = createAction(types.updateMyEmail);
export const updateMyEmailComplete = createAction(types.updateMyEmailComplete);
export const updateMyEmailError = createAction(types.updateMyEmailError);

export function createUpdateMyEmailSaga(types) {
  return [takeEvery(types.updateMyEmail, updateMyEmailSaga)];
}
