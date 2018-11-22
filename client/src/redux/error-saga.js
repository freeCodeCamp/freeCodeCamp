import {navigate} from 'gatsby';
import { takeEvery, put } from 'redux-saga/effects';
import { isError } from 'lodash';

import {isHandledError, unwrapHandledError} from '../utils/handled-error';

import { createFlashMessage } from '../components/Flash/redux';
import standardErrorMessage from '../utils/standardErrorMessage';

const errorActionSelector = action => isError(action.payload);

function* errorHandlerSaga({payload: error}) {
  if (isHandledError(error)) {
    const {type, message, redirectTo} = unwrapHandledError(error);
    navigate(redirectTo);
    yield put(createFlashMessage({type, message}));
    return;
  }
  // TODO(Bouncey): Add an error reporting service, like rollbar
  yield put(createFlashMessage(standardErrorMessage));
}

export default [takeEvery(errorActionSelector, errorHandlerSaga)];
