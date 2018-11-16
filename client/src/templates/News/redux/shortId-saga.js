import { call, put, takeEvery } from 'redux-saga/effects';

import { getArticleById } from '../../../utils/ajax';
import { resolveShortIdComplete, resolveShortIdError } from './';

function* fetchArticleByIdSaga({ payload }) {
  try {
    const { data } = yield call(getArticleById, payload);
    console.log(data);
    yield put(resolveShortIdComplete(data));
  } catch (e) {
    console.error(e.response);
    yield put(resolveShortIdError(e));
  }
}

export function createShortIdSaga(types) {
  return [takeEvery(types.resolveShortId, fetchArticleByIdSaga)];
}
