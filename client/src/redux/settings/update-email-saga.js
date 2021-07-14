import { call, put, takeEvery } from 'redux-saga/effects';
import isEmail from 'validator/lib/isEmail';

import { updateMyEmailComplete, updateMyEmailError } from './';
import { createFlashMessage } from '../../components/Flash/redux';

import { putUserUpdateEmail } from '../../utils/ajax';
import reallyWeirdErrorMessage from '../../utils/really-weird-error-message';

function* updateMyEmailSaga({ payload: email = '' }) {
  if (!email || !isEmail(email)) {
    yield put(createFlashMessage(reallyWeirdErrorMessage));
    return;
  }
  try {
    const response = yield call(putUserUpdateEmail, email);
    yield put(
      updateMyEmailComplete({
        ...response,
        payload: { email, isEmailVerified: false }
      })
    );
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(updateMyEmailError(e));
  }
}

export function createUpdateMyEmailSaga(types) {
  return [takeEvery(types.updateMyEmail, updateMyEmailSaga)];
}
