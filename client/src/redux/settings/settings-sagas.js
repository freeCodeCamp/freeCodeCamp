import { omit } from 'lodash-es';
import {
  call,
  put,
  select,
  takeLatest,
  takeEvery,
  debounce
} from 'redux-saga/effects';

import { createFlashMessage } from '../../components/Flash/redux';
import {
  getUsernameExists,
  putUpdateMyAbout,
  putUpdateMyProfileUI,
  putUpdateMyUsername,
  putUpdateUserFlag,
  putUpdateMySocials,
  putUpdateMyHonesty,
  putUpdateMyQuincyEmail,
  putVerifyCert,
  putUpdateMyPortfolio,
  putUpdateMyTheme,
  putUpdateMySound
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
  verifyCertError,
  updateMySocialsComplete,
  updateMySocialsError,
  updateMyHonestyError,
  updateMyHonestyComplete,
  updateMyQuincyEmailComplete,
  updateMyQuincyEmailError,
  updateMyPortfolioError,
  updateMyPortfolioComplete,
  updateMyThemeComplete,
  updateMyThemeError,
  updateMySoundComplete,
  updateMySoundError
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

function* updateMySocialsSaga({ payload: update }) {
  try {
    const response = yield call(putUpdateMySocials, update);
    yield put(updateMySocialsComplete({ ...response, payload: update }));
    yield put(createFlashMessage({ ...response }));
  } catch (e) {
    yield put(updateMySocialsError);
  }
}

function* updateMySoundSaga({ payload: update }) {
  try {
    const response = yield call(putUpdateMySound, update);
    yield put(updateMySoundComplete({ ...response, payload: update }));
    yield put(createFlashMessage({ ...response }));
  } catch (e) {
    yield put(updateMySoundError);
  }
}

function* updateMyThemeSaga({ payload: update }) {
  try {
    const response = yield call(putUpdateMyTheme, update);
    yield put(updateMyThemeComplete({ ...response, payload: update }));
    yield put(createFlashMessage({ ...response }));
  } catch (e) {
    yield put(updateMyThemeError);
  }
}

function* updateMyHonestySaga({ payload: update }) {
  try {
    const response = yield call(putUpdateMyHonesty, update);
    yield put(updateMyHonestyComplete({ ...response, payload: update }));
    yield put(createFlashMessage({ ...response }));
  } catch (e) {
    yield put(updateMyHonestyError);
  }
}

function* updateMyQuincyEmailSaga({ payload: update }) {
  try {
    const response = yield call(putUpdateMyQuincyEmail, update);
    yield put(updateMyQuincyEmailComplete({ ...response, payload: update }));
    yield put(createFlashMessage({ ...response }));
  } catch (e) {
    yield put(updateMyQuincyEmailError);
  }
}

function* updateMyPortfolioSaga({ payload: update }) {
  try {
    const response = yield call(putUpdateMyPortfolio, update);
    yield put(updateMyPortfolioComplete({ ...response, payload: update }));
    yield put(createFlashMessage({ ...response }));
  } catch (e) {
    yield put(updateMyPortfolioError);
  }
}

function* validateUsernameSaga({ payload }) {
  try {
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
    takeEvery(types.updateMySocials, updateMySocialsSaga),
    takeEvery(types.updateMyHonesty, updateMyHonestySaga),
    takeEvery(types.updateMySound, updateMySoundSaga),
    takeEvery(types.updateMyTheme, updateMyThemeSaga),
    takeEvery(types.updateMyQuincyEmail, updateMyQuincyEmailSaga),
    takeEvery(types.updateMyPortfolio, updateMyPortfolioSaga),
    takeLatest(types.submitNewAbout, submitNewAboutSaga),
    takeLatest(types.submitNewUsername, submitNewUsernameSaga),
    debounce(2000, types.validateUsername, validateUsernameSaga),
    takeLatest(types.submitProfileUI, submitProfileUISaga),
    takeEvery(types.verifyCert, verifyCertificationSaga)
  ];
}
