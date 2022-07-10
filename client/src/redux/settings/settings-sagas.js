import { omit } from 'lodash-es';
import {
  call,
  put,
  select,
  takeLatest,
  takeEvery,
  debounce
} from 'redux-saga/effects';
import store from 'store';
import { createAction } from 'redux-actions';

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
  putUpdateMySound,
  putUpdateMyKeyboardShortcuts
} from '../../utils/ajax';
import { certMap } from '../../resources/cert-and-project-map';
import { completedChallengesSelector } from '..';
import {
  certTypes,
  certTypeIdMap
} from '../../../../config/certification-settings';
import { actionTypes as types } from './action-types';

function* submitNewAboutSaga({ payload }) {
  try {
    const { data } = yield call(putUpdateMyAbout, payload);
    yield put(submitNewAboutComplete({ ...data, payload }));
    yield put(createFlashMessage(data));
  } catch (e) {
    yield put(submitNewAboutError(e));
  }
}

function* submitNewUsernameSaga({ payload: username }) {
  try {
    const { data } = yield call(putUpdateMyUsername, username);
    yield put(submitNewUsernameComplete({ ...data, username }));
    yield put(createFlashMessage(data));
  } catch (e) {
    yield put(submitNewUsernameError(e));
  }
}

function* submitProfileUISaga({ payload }) {
  try {
    const { data } = yield call(putUpdateMyProfileUI, payload);
    yield put(submitProfileUIComplete({ ...data, payload }));
    yield put(createFlashMessage(data));
  } catch (e) {
    yield put(submitProfileUIError);
  }
}

function* updateUserFlagSaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateUserFlag, update);
    yield put(updateUserFlagComplete({ ...data, payload: update }));
    yield put(
      createFlashMessage({ ...data, variables: { theme: update.theme } })
    );
  } catch (e) {
    yield put(updateUserFlagError(e));
  }
}

function* updateMySocialsSaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateMySocials, update);
    yield put(updateMySocialsComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMySocialsError);
  }
}

function* updateMySoundSaga({ payload: update }) {
  try {
    store.set('fcc-sound', !!update.sound);
    const { data } = yield call(putUpdateMySound, update);
    yield put(updateMySoundComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMySoundError);
  }
}

function* updateMyThemeSaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateMyTheme, update);
    yield put(updateMyThemeComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMyThemeError);
  }
}

function* updateMyKeyboardShortcutsSaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateMyKeyboardShortcuts, update);
    yield put(updateMyKeyboardShortcutsComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMyKeyboardShortcutsError);
  }
}

function* updateMyHonestySaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateMyHonesty, update);
    yield put(updateMyHonestyComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMyHonestyError);
  }
}

function* updateMyQuincyEmailSaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateMyQuincyEmail, update);
    yield put(updateMyQuincyEmailComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMyQuincyEmailError);
  }
}

function* updateMyPortfolioSaga({ payload: update }) {
  try {
    const { data } = yield call(putUpdateMyPortfolio, update);
    yield put(updateMyPortfolioComplete({ ...data, payload: update }));
    yield put(createFlashMessage({ ...data }));
  } catch (e) {
    yield put(updateMyPortfolioError);
  }
}

function* validateUsernameSaga({ payload }) {
  try {
    const {
      data: { exists }
    } = yield call(getUsernameExists, payload);
    yield put(validateUsernameComplete(exists));
  } catch (e) {
    yield put(validateUsernameError(e));
  }
}

function* verifyCertificationSaga({ payload }) {
  // check redux if can claim cert before calling backend
  const currentCert = certMap.find(cert => cert.certSlug === payload);
  const completedChallenges = yield select(completedChallengesSelector);
  const certTitle = currentCert?.title || payload;

  // (20/06/2022) Full Stack client-side validation is already done here:
  // https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/src/components/settings/certification.js#L309
  if (currentCert?.id !== certTypeIdMap[certTypes.fullStack]) {
    const flash = {
      type: 'info',
      message: 'flash.incomplete-steps',
      variables: { name: certTitle }
    };

    const currentCertIds = currentCert?.projects?.map(project => project.id);
    const canClaimCert = currentCertIds.every(id =>
      completedChallenges.find(challenge => challenge.id === id)
    );

    if (!canClaimCert) {
      yield put(createFlashMessage(flash));
      return;
    }
  }

  // redux says challenges are complete, call back end
  try {
    const {
      data: { response, isCertMap, completedChallenges }
    } = yield call(putVerifyCert, payload);
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

const checkForSuccessPayload = ({ type, payload }) =>
  type === 'success' ? payload : null;

export const submitNewAbout = createAction(types.submitNewAbout);
export const submitNewAboutComplete = createAction(
  types.submitNewAboutComplete,
  checkForSuccessPayload
);
export const submitNewAboutError = createAction(types.submitNewAboutError);

export const submitNewUsername = createAction(types.submitNewUsername);
export const submitNewUsernameComplete = createAction(
  types.submitNewUsernameComplete,
  ({ type, username }) => (type === 'success' ? username : null)
);
export const submitNewUsernameError = createAction(
  types.submitNewUsernameError
);

export const submitProfileUI = createAction(types.submitProfileUI);
export const submitProfileUIComplete = createAction(
  types.submitProfileUIComplete,
  checkForSuccessPayload
);
export const submitProfileUIError = createAction(types.submitProfileUIError);

export const updateUserFlag = createAction(types.updateUserFlag);
export const updateUserFlagComplete = createAction(
  types.updateUserFlagComplete,
  checkForSuccessPayload
);
export const updateUserFlagError = createAction(types.updateUserFlagError);

export const updateMySocials = createAction(types.updateMySocials);
export const updateMySocialsComplete = createAction(
  types.updateMySocialsComplete,
  checkForSuccessPayload
);
export const updateMySocialsError = createAction(types.updateMySocialsError);

export const updateMySound = createAction(types.updateMySound);
export const updateMySoundComplete = createAction(
  types.updateMySoundComplete,
  checkForSuccessPayload
);
export const updateMySoundError = createAction(types.updateMySoundError);

export const updateMyTheme = createAction(types.updateMyTheme);
export const updateMyThemeComplete = createAction(
  types.updateMyThemeComplete,
  checkForSuccessPayload
);
export const updateMyThemeError = createAction(types.updateMyThemeError);

export const updateMyKeyboardShortcuts = createAction(
  types.updateMyKeyboardShortcuts
);
export const updateMyKeyboardShortcutsComplete = createAction(
  types.updateMyKeyboardShortcutsComplete,
  checkForSuccessPayload
);
export const updateMyKeyboardShortcutsError = createAction(
  types.updateMyKeyboardShortcutsError
);

export const updateMyHonesty = createAction(types.updateMyHonesty);
export const updateMyHonestyComplete = createAction(
  types.updateMyHonestyComplete,
  checkForSuccessPayload
);
export const updateMyHonestyError = createAction(types.updateMyHonestyError);

export const updateMyQuincyEmail = createAction(types.updateMyQuincyEmail);
export const updateMyQuincyEmailComplete = createAction(
  types.updateMyQuincyEmailComplete,
  checkForSuccessPayload
);
export const updateMyQuincyEmailError = createAction(
  types.updateMyQuincyEmailError
);

export const updateMyPortfolio = createAction(types.updateMyPortfolio);
export const updateMyPortfolioComplete = createAction(
  types.updateMyPortfolioComplete,
  checkForSuccessPayload
);
export const updateMyPortfolioError = createAction(
  types.updateMyPortfolioError
);

export const validateUsername = createAction(types.validateUsername);
export const validateUsernameComplete = createAction(
  types.validateUsernameComplete
);
export const validateUsernameError = createAction(types.validateUsernameError);

export const verifyCert = createAction(types.verifyCert);
export const verifyCertComplete = createAction(
  types.verifyCertComplete,
  checkForSuccessPayload
);
export const verifyCertError = createAction(types.verifyCertError);

export function createSettingsSagas(types) {
  return [
    takeEvery(types.updateUserFlag, updateUserFlagSaga),
    takeEvery(types.updateMySocials, updateMySocialsSaga),
    takeEvery(types.updateMyHonesty, updateMyHonestySaga),
    takeEvery(types.updateMySound, updateMySoundSaga),
    takeEvery(types.updateMyTheme, updateMyThemeSaga),
    takeEvery(types.updateMyKeyboardShortcuts, updateMyKeyboardShortcutsSaga),
    takeEvery(types.updateMyQuincyEmail, updateMyQuincyEmailSaga),
    takeEvery(types.updateMyPortfolio, updateMyPortfolioSaga),
    takeLatest(types.submitNewAbout, submitNewAboutSaga),
    takeLatest(types.submitNewUsername, submitNewUsernameSaga),
    debounce(2000, types.validateUsername, validateUsernameSaga),
    takeLatest(types.submitProfileUI, submitProfileUISaga),
    takeEvery(types.verifyCert, verifyCertificationSaga)
  ];
}
