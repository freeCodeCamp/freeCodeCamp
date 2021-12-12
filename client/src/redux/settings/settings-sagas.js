import { call, delay, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../../components/Flash/redux';
import {
  getUsernameExists,
  putUpdateMyAbout,
  putUpdateMyProfileUI,
  putUpdateMyUsernameDisplay,
  putUpdateUserFlag,
  putVerifyCert
} from '../../utils/ajax';
import {
  updateUserFlagComplete,
  updateUserFlagError,
  validateUsernameComplete,
  validateUsernameError,
  submitNewAboutComplete,
  submitNewAboutError,
  submitNewUsernameDisplayComplete,
  submitNewUsernameDisplayError,
  submitProfileUIComplete,
  submitProfileUIError,
  verifyCertComplete,
  verifyCertError
} from './';

function* submitNewAboutSaga({ payload }) {
  try {
    const response = yield call(putUpdateMyAbout, payload);
    yield put(submitNewAboutComplete({ ...response, payload }));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(submitNewAboutError(e));
  }
}

function* submitNewUsernameDisplaySaga({ payload: usernameDisplay }) {
  try {
    const response = yield call(putUpdateMyUsernameDisplay, usernameDisplay);
    yield put(
      submitNewUsernameDisplayComplete({ ...response, usernameDisplay })
    );
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(submitNewUsernameDisplayError(e));
  }
}

function* submitProfileUISaga({ payload }) {
  try {
    const response = yield call(putUpdateMyProfileUI, payload);
    yield put(submitProfileUIComplete({ ...response, payload }));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(submitProfileUIError);
  }
}

function* updateUserFlagSaga({ payload: update }) {
  try {
    const response = yield call(putUpdateUserFlag, update);
    yield put(updateUserFlagComplete({ ...response, payload: update }));
    yield put(
      createFlashMessage({ ...response, variables: { theme: update.theme } })
    );
  } catch (e) {
    yield put(updateUserFlagError(e));
  }
}

function* validateUsernameSaga({ payload }) {
  try {
    yield delay(500);
    const { exists } = yield call(getUsernameExists, payload);
    yield put(validateUsernameComplete(exists));
  } catch (e) {
    yield put(validateUsernameError(e));
  }
}

function* verifyCertificationSaga({ payload }) {
  try {
    const { response, isCertMap, completedChallenges } = yield call(
      putVerifyCert,
      payload
    );
    yield put(
      verifyCertComplete({
        ...response,
        payload: { ...isCertMap, completedChallenges }
      })
    );
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(verifyCertError(e));
  }
}

export function createSettingsSagas(types) {
  return [
    takeEvery(types.updateUserFlag, updateUserFlagSaga),
    takeLatest(types.submitNewAbout, submitNewAboutSaga),
    takeLatest(types.submitNewUsernameDisplay, submitNewUsernameDisplaySaga),
    takeLatest(types.validateUsername, validateUsernameSaga),
    takeLatest(types.submitProfileUI, submitProfileUISaga),
    takeEvery(types.verifyCert, verifyCertificationSaga)
  ];
}
