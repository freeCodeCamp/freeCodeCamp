import { call, put, takeEvery } from 'redux-saga/effects';

import { getArticleById } from '../../../utils/ajax';
import { resolveShortIdComplete, resolveShortIdError } from './';
import { handle400Error, handle500Error } from '../../../utils/handled-error';

function* fetchArticleByIdSaga({ payload }) {
  try {
    const { data } = yield call(getArticleById, payload);
    yield put(resolveShortIdComplete(data));
  } catch (e) {
    const { status } = e.response;
    if (status >= 400 && status < 500) {
      const handledError = handle400Error(e, { redirectTo: '/news' });
      yield put(resolveShortIdError(handledError));
      return;
    }
    if (status >= 500) {
      const handledError = handle500Error(e, { redirectTo: '/news' });
      yield put(resolveShortIdError(handledError));
      return;
    }
    yield put(resolveShortIdError(e));
    return;
  }
}

export function createShortIdSaga(types) {
  return [takeEvery(types.resolveShortId, fetchArticleByIdSaga)];
}
