import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  challengeDataSelector,
  challengeTestsSelector,
  challengeMetaSelector
} from './selectors';

import { getSocratesHint } from '../../../utils/ajax';

import {
  userIdSelector,
  isAiAssistanceOnSelector
} from '../../../redux/selectors';
import { askSocratesError, askSocratesComplete } from './actions';

function* askSocratesSaga() {
  const isAiAssistanceOn = yield select(isAiAssistanceOnSelector);
  if (!isAiAssistanceOn) {
    //add error handling
    return;
  }

  // if data is not in the right shape, add error handling
  const challengeData = yield select(challengeDataSelector);
  const tests = yield select(challengeTestsSelector);
  const { description } = yield select(challengeMetaSelector);
  const userId = yield select(userIdSelector);

  const fileWithEditableRegion = challengeData.challengeFiles.find(
    file => file.editableRegionBoundaries.length > 0
  );

  const { contents: seed, editableContents: userInput } =
    fileWithEditableRegion;

  const hints = Array.isArray(tests)
    ? tests.map(({ text, err }) => {
        const item = { text };
        if (err) item.failed = true;
        return item;
      })
    : [];

  const optimizedPayload = {
    userId,
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
}

export function createAskSocratesSaga(types) {
  return [takeEvery(types.askSocrates, askSocratesSaga)];
}
