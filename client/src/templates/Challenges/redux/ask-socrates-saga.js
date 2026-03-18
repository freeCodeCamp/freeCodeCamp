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

function* askSocratesSaga() {
  const isSocratesOn = yield select(isSocratesOnSelector);
  if (!isSocratesOn) {
    yield put(
      askSocratesError({
        error: 'Socrates is not enabled for your account.'
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
          error: 'Check your code before asking Socrates for a hint.'
        })
      );
      return;
    }

    const allTestsPass = tests.every(test => test.pass);
    if (allTestsPass) {
      yield put(
        askSocratesError({
          error:
            'Congratulations, your code passes! Press submit and continue to the next challenge.'
        })
      );
      return;
    }

    const buildData = yield call(buildChallenge, challengeData);
    const { sources, build } = buildData;
    const seed = build;
    const userInput = sources?.editableContents;

    if (!userInput || !seed) {
      yield put(
        askSocratesError({
          error: 'Please write some code before asking Socrates for a hint.'
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
      userInput,
      seed,
      description,
      hints
    };

    const response = yield call(getSocratesHint, optimizedPayload);
    const responseData = response?.data;
    const error = responseData?.error;
    if (error) {
      yield put(
        askSocratesError({
          error,
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
        error: 'Something went wrong while asking Socrates. Please try again.'
      })
    );
  }
}

export function createAskSocratesSaga(types) {
  return [takeEvery(types.askSocrates, askSocratesSaga)];
}
