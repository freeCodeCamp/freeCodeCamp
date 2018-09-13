import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  validateUsernameComplete,
  validateUsernameError,
  submitNewUsernameComplete,
  submitNewUsernameError
} from './';

import { getUsernameExists, putUpdateMyUsername } from '../../utils/ajax';
import { createFlashMessage } from '../../components/Flash/redux';

function* validateUsernameSaga({ payload }) {
  try {
    yield delay(500);
    const {
      data: { exists }
    } = yield call(getUsernameExists, payload);
    yield put(validateUsernameComplete(exists));
  } catch (e) {
    yield put(validateUsernameError(e));
  }
}

function* submitNEwUswernameSaga({ payload: username }) {
  try {
    const { data: response } = yield call(putUpdateMyUsername, username);
    yield put(submitNewUsernameComplete({...response, username}));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(submitNewUsernameError(e));
  }
}

export function createSettingsSagas(types) {
  return [
    takeLatest(types.validateUsername, validateUsernameSaga),
    takeLatest(types.submitNewUsername, submitNEwUswernameSaga)
  ];
}
