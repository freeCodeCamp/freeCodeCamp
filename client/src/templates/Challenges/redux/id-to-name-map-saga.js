import { call, put, takeEvery } from 'redux-saga/effects';

import { getIdToNameMap } from '../../../utils/ajax';
import { fetchIdToNameMapComplete, fetchIdToNameMapError } from './';

function* fetchIdToNameMapSaga() {
  try {
    const { data } = yield call(getIdToNameMap);

    yield put(
      fetchIdToNameMapComplete(data)
    );
  } catch (e) {
    yield put(fetchIdToNameMapError(e));
  }
}

export function createIdToNameMapSaga(types) {
  return [
    takeEvery(types.fetchIdToNameMap, fetchIdToNameMapSaga)
  ];
}
