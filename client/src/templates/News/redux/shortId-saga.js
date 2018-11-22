import { call, put, takeEvery } from 'redux-saga/effects';

import { getArticleById } from '../../../utils/ajax';
import { resolveShortIdComplete, resolveShortIdError } from './';
import { wrapHandledError } from '../../../utils/handled-error';

function* fetchArticleByIdSaga({ payload }) {
  try {
    const { data } = yield call(getArticleById, payload);
    yield put(resolveShortIdComplete(data));
  } catch (e) {
    const { status } = e.response;
    if (status >= 400 && status < 500) {
      yield put(
        resolveShortIdError(
          wrapHandledError(e, {
            type: 'info',
            message:
              "We couldn't find what you were looking for, " +
              'please check and try again',
            redirectTo: '/news'
          })
        )
      );
    }
  }
}

export function createShortIdSaga(types) {
  return [takeEvery(types.resolveShortId, fetchArticleByIdSaga)];
}
