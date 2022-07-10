import { navigate } from 'gatsby';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import { createFlashMessage } from '../components/Flash/redux';

import { putUserAcceptsTerms } from '../utils/ajax';
import { actionTypes } from './action-types';

function* acceptTermsSaga({ payload: quincyEmails }) {
  try {
    const { data } = yield call(putUserAcceptsTerms, quincyEmails);

    yield put(acceptTermsComplete(quincyEmails));
    yield put(createFlashMessage(data));
  } catch (e) {
    yield put(acceptTermsError(e));
  }
}

function* acceptCompleteSaga() {
  yield call(navigate, '/learn');
}

export const acceptTerms = createAction(actionTypes.acceptTerms);
export const acceptTermsComplete = createAction(
  actionTypes.acceptTermsComplete
);
export const acceptTermsError = createAction(actionTypes.acceptTermsError);

export function createAcceptTermsSaga(types) {
  return [
    takeEvery(types.acceptTerms, acceptTermsSaga),
    takeEvery(types.acceptTermsComplete, acceptCompleteSaga)
  ];
}
