import { call, put, takeEvery } from 'redux-saga/effects';
import { navigate } from 'gatsby';

import { acceptTermsComplete, acceptTermsError } from './';
import { createFlashMessage } from '../components/Flash/redux';

import { putUserAcceptsTerms } from '../utils/ajax';

function* acceptTermsSaga({ payload: quincyEmails }) {
  try {
    const { data: response } = yield call(putUserAcceptsTerms, quincyEmails);

    yield put(acceptTermsComplete(quincyEmails));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(acceptTermsError(e));
  }
}

function* acceptCompleteSaga() {
  yield call(navigate, '/learn');
}

export function createAcceptTermsSaga(types) {
  return [
    takeEvery(types.acceptTerms, acceptTermsSaga),
    takeEvery(types.acceptTermsComplete, acceptCompleteSaga)
  ];
}
