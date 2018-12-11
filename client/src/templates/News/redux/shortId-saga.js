import { call, put, takeEvery } from 'redux-saga/effects';

import { getArticleById } from '../../../utils/ajax';
import { resolveShortIdComplete, resolveShortIdError } from './';
import { handleAPIError, wrapHandledError } from '../../../utils/handled-error';

function* fetchArticleByIdSaga({ payload }) {
  try {
    const { data } = yield call(getArticleById, payload);
    yield put(resolveShortIdComplete(data));
  } catch (e) {
    const { response: { status } = {} } = e;
    if (typeof status !== 'undefined') {
      const handledError = wrapHandledError(
        e,
        handleAPIError(e, { redirectTo: '/news' })
      );
      yield put(resolveShortIdError(handledError));
      return;
    }
    yield put(resolveShortIdError(e));
  }
}

export function createShortIdSaga(types) {
  return [takeEvery(types.resolveShortId, fetchArticleByIdSaga)];
}
