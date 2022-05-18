import { omit } from 'lodash-es';
import {
  call,
  delay,
  put,
  select,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';

import { createFlashMessage } from '../../components/Flash/redux';
import {
  getUsernameExists,
  putUpdateMyAbout,
  putUpdateMyProfileUI,
  putUpdateMyUsername,
  putUpdateUserFlag,
  putVerifyCert
} from '../../utils/ajax';
import { certMap } from '../../resources/cert-and-project-map';
import { completedChallengesSelector } from '..';
import {
  updateUserFlagComplete,
  updateUserFlagError,
  validateUsernameComplete,
  validateUsernameError,
  submitNewAboutComplete,
  submitNewAboutError,
  submitNewUsernameComplete,
  submitNewUsernameError,
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

function* submitNewUsernameSaga({ payload: username }) {
  try {
    const response = yield call(putUpdateMyUsername, username);
    yield put(submitNewUsernameComplete({ ...response, username }));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(submitNewUsernameError(e));
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
  // check redux if can claim cert before calling backend
  const completedChallenges = yield select(completedChallengesSelector);
  const currentCert = certMap.find(cert => cert.certSlug === payload);
  const currentCertIds = currentCert?.projects.map(project => project.id);
  const certTitle = currentCert?.title || payload;

  const flash = {
    type: 'info',
    message: 'flash.incomplete-steps',
    variables: { name: certTitle }
  };

  const canClaimCert = currentCertIds.every(id =>
    completedChallenges.find(challenge => challenge.id === id)
  );

  if (!canClaimCert) {
    yield put(createFlashMessage(flash));
    return;
  }

  // redux says challenges are complete, call back end
  try {
    const { response, isCertMap, completedChallenges } = yield call(
      putVerifyCert,
      payload
    );
    yield put(
      verifyCertComplete({
        ...response,
        payload: {
          ...isCertMap,
          completedChallenges: completedChallenges.map(x => ({
            ...omit(x, 'files'),
            challengeFiles: x.files ?? null
          }))
        }
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
    takeLatest(types.submitNewUsername, submitNewUsernameSaga),
    takeLatest(types.validateUsername, validateUsernameSaga),
    takeLatest(types.submitProfileUI, submitProfileUISaga),
    takeEvery(types.verifyCert, verifyCertificationSaga)
  ];
}
