import { call, put, takeEvery } from 'redux-saga/effects';
import { navigate } from 'gatsby';

import { reportUserComplete, reportUserError } from './';
import { createFlashMessage } from '../components/Flash/redux';

import { postReportUser } from '../utils/ajax';

function* reportUserSaga({ payload }) {
  try {
    const { data: response } = yield call(postReportUser, payload);

    yield put(reportUserComplete());
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(reportUserError(e));
  }
}

function* acceptCompleteSaga() {
  yield call(navigate, '/learn');
}

export function createReportUserSaga(types) {
  return [
    takeEvery(types.reportUser, reportUserSaga),
    takeEvery(types.reportUserComplete, acceptCompleteSaga)
  ];
}
