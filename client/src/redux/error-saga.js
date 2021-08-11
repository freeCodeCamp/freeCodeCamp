import { navigate } from 'gatsby';
import { isError } from 'lodash-es';
import { takeEvery, put } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { isHandledError, unwrapHandledError } from '../utils/handled-error';
import { reportClientSideError } from '../utils/report-error';
import reportedErrorMessage from '../utils/reported-error-message';

const errorActionSelector = action => isError(action.payload);

function* errorHandlerSaga({ payload: error }) {
  if (isHandledError(error)) {
    const { type, message, redirectTo } = unwrapHandledError(error);
    if (redirectTo) {
      navigate(redirectTo);
    }
    yield put(createFlashMessage({ type, message }));
    return;
  }
  reportClientSideError('Unhandled Error caught in error-saga', error);
  yield put(createFlashMessage(reportedErrorMessage));
}

const errorSagas = [takeEvery(errorActionSelector, errorHandlerSaga)];

export default errorSagas;
