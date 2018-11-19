import { takeEvery, put } from 'redux-saga/effects';
import { has, isError } from 'lodash';

import { handledErrorSymbol } from '../utils';
import { createFlashMessage } from '../components/Flash/redux';
import standardErrorMessage from '../utils/standardErrorMessage';

const errorActionSelector = action => isError(action.payload);

function* errorHandlerSaga(action) {
  if (has(action.payload, handledErrorSymbol)) {
    return;
  }
  yield put(createFlashMessage(standardErrorMessage));
}

export default [takeEvery(errorActionSelector, errorHandlerSaga)];
