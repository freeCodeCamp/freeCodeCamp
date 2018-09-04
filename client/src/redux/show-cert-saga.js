import { put, takeEvery, call } from 'redux-saga/effects';
import { navigateTo } from 'gatsby';

import { createFlashMessage } from '../components/Flash/redux';
import { getShowCert } from '../utils/ajax';
import { showCertComplete, showCertError } from '.';

function* getShowCertSaga({ payload: { username, certName: cert } }) {
  try {
    const { data: response } = yield call(getShowCert, username, cert);
    const { messages } = response;
    if (messages && messages.length) {
      for (let i = 0; i < messages.length; i++) {
        yield put(createFlashMessage(messages[i]));
      }
      yield call(navigateTo, '/');
      return;
    }
    yield put(showCertComplete(response));
  } catch (e) {
    yield put(showCertError(e));
  }
}

export function createShowCertSaga(types) {
  return [takeEvery(types.showCert, getShowCertSaga)];
}
