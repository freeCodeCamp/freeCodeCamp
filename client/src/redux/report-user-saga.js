import { navigate } from 'gatsby';
import { call, put, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { postReportUser } from '../utils/ajax';
import { reportUserComplete, reportUserError } from './actions';

function* reportUserSaga({ payload }) {
  try {
    const { data } = yield call(postReportUser, payload);

    yield put(reportUserComplete());
    yield put(createFlashMessage(data));
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
