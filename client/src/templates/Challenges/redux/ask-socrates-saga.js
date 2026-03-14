import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  challengeDataSelector,
  challengeTestsSelector,
  challengeMetaSelector
} from './selectors';

import { getSocratesHint } from '../../../utils/ajax';

import { isSocratesOnSelector } from '../../../redux/selectors';
import { askSocratesError, askSocratesComplete } from './actions';

function* askSocratesSaga() {
  const isSocratesOn = yield select(isSocratesOnSelector);
  if (!isSocratesOn) {
    yield put(askSocratesError('Socrates is not enabled for your account.'));
    return;
  }

  try {
    const challengeData = yield select(challengeDataSelector);
    const tests = yield select(challengeTestsSelector);
    const { description } = yield select(challengeMetaSelector);

    const fileWithEditableRegion = challengeData.challengeFiles.find(
      file => file.editableRegionBoundaries.length > 0
    );

    if (!fileWithEditableRegion) {
      yield put(
        askSocratesError('Socrates is not available for this challenge.')
      );
      return;
    }

    const { contents: seed, editableContents: userInput } =
      fileWithEditableRegion;

    if (!userInput || !seed) {
      yield put(
        askSocratesError(
          'Please write some code before asking Socrates for a hint.'
        )
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
    const error = response?.data?.error;
    if (error) {
      yield put(askSocratesError(error));
    } else {
      const { hint } = response.data;
      yield put(askSocratesComplete(hint));
    }
  } catch {
    yield put(
      askSocratesError(
        'Something went wrong while asking Socrates. Please try again.'
      )
    );
  }
}

export function createAskSocratesSaga(types) {
  return [takeEvery(types.askSocrates, askSocratesSaga)];
}
