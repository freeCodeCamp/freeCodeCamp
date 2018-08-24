import { call, put, takeEvery } from 'redux-saga/effects';

import { acceptTermsComplete, acceptTermsError } from './';

import { putUserAcceptsTerms } from '../utils/ajax';
import { createFlashMessage } from '../components/Flash/redux';

function* acceptTermsSaga({ payload: quincyEmails }) {
  console.log('hello?');
  try {
    const {
      data: response
    } = yield call(putUserAcceptsTerms, quincyEmails);

    yield put(acceptTermsComplete());
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(acceptTermsError(e));
  }
}

export function createAcceptTermsSaga(types) {
  return [takeEvery(types.acceptTerms, acceptTermsSaga)];
}
