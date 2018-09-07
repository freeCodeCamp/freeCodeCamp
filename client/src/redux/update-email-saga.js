import { call, put, takeEvery } from 'redux-saga/effects';

import { updateMyEmailComplete, updateMyEmailError } from './';
import { createFlashMessage } from '../components/Flash/redux';

import { putUserUpdateEmail } from '../utils/ajax';

function* updateMyEmailSaga({ payload: newEmail }) {
  try {
    const { data: response } = yield call(putUserUpdateEmail, newEmail);

    yield put(updateMyEmailComplete());
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(updateMyEmailError(e));
  }
}

export function createUpdateMyEmailSaga(types) {
  return [takeEvery(types.updateMyEmail, updateMyEmailSaga)];
}
