import { takeEvery, put } from 'redux-saga/effects';
import { has, isError } from 'lodash';

import { handledErrorSymbol } from '../utils';
import { createFlashMessage } from '../components/Flash/redux';

const errorActionSelector = action => isError(action.payload);

function* errorHandlerSaga(action) {
  if (has(action.payload, handledErrorSymbol)) {
    return;
  }
  yield put(
    createFlashMessage({
      type: 'danger',
      message: 'Ooops! Something went wrong, please check and try again'
    })
  );
}

export default [takeEvery(errorActionSelector, errorHandlerSaga)];
