import i18next from 'i18next';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  challengeDataSelector,
  challengeTestsSelector,
  challengeMetaSelector
} from './selectors';

import { buildChallenge } from '@freecodecamp/challenge-builder/build';
import { getSocratesHint } from '../../../utils/ajax';

import { isSocratesOnSelector } from '../../../redux/selectors';
import { askSocratesError, askSocratesComplete } from './actions';

// Maps server-side error keys to client-side translation keys.
const serverErrorKeyMap = {
  'socrates-no-access': 'learn.socrates-no-access',
  'socrates-daily-limit': 'learn.socrates-daily-limit',
  'socrates-rate-limit': 'learn.socrates-rate-limit',
  'socrates-unable-to-generate': 'learn.socrates-unable-to-generate',
  'socrates-unavailable': 'learn.socrates-unavailable',
  'socrates-invalid-request': 'learn.socrates-invalid-request'
};

function translateServerError(errorKey) {
  const translationKey = serverErrorKeyMap[errorKey];
  return translationKey ? i18next.t(translationKey) : errorKey;
}

export function* askSocratesSaga() {
  const isSocratesOn = yield select(isSocratesOnSelector);
  if (!isSocratesOn) {
    yield put(
      askSocratesError({
        error: i18next.t('learn.socrates-not-enabled')
      })
    );
    return;
  }

  try {
    const challengeData = yield select(challengeDataSelector);
    const tests = yield select(challengeTestsSelector);
    const { description } = yield select(challengeMetaSelector);

    const hasCheckedCode = tests.some(test => test.pass || test.err);
    if (!hasCheckedCode) {
      yield put(
        askSocratesError({
          error: i18next.t('learn.socrates-check-code-first')
        })
      );
      return;
    }

    const allTestsPass = tests.every(test => test.pass);
    if (allTestsPass) {
      yield put(
        askSocratesError({
          error: i18next.t('learn.socrates-code-passes')
        })
      );
      return;
    }

    const buildData = yield call(buildChallenge, challengeData);
    const { sources, build } = buildData;
    const seed = build;
    const userInput = sources?.editableContents;

    if (!seed) {
      yield put(
        askSocratesError({
          error: i18next.t('learn.socrates-write-code-first')
        })
      );
      return;
    }

    const hints = Array.isArray(tests)
      ? tests.map(({ text, err }) => {
          const item = { text };
          if (err) item.failed = true;
          return item;
        })
      : [];

    const optimizedPayload = {
      seed,
      description,
      hints
    };

    if (userInput) {
      optimizedPayload.userInput = userInput;
    }

    const response = yield call(getSocratesHint, optimizedPayload);
    const responseData = response?.data;
    const error = responseData?.error;
    if (error) {
      yield put(
        askSocratesError({
          error: translateServerError(error),
          attempts: responseData?.attempts,
          limit: responseData?.limit
        })
      );
    } else {
      yield put(
        askSocratesComplete({
          hint: responseData.hint,
          attempts: responseData.attempts,
          limit: responseData.limit
        })
      );
    }
  } catch {
    yield put(
      askSocratesError({
        error: i18next.t('learn.socrates-generic-error')
      })
    );
  }
}

export function createAskSocratesSaga(types) {
  return [takeEvery(types.askSocrates, askSocratesSaga)];
}
