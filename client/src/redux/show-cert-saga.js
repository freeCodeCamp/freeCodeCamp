import { navigate } from 'gatsby';
import { call, put, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { getShowCert } from '../utils/ajax';
import { showCertComplete, showCertError } from './actions';

function* getShowCertSaga({ payload: { username, certSlug } }) {
  try {
    const { data } = yield call(getShowCert, username, certSlug);
    const { messages } = data;
    if (messages && messages.length) {
      for (let i = 0; i < messages.length; i++) {
        yield put(createFlashMessage(messages[i]));
      }
      yield call(navigate, '/');
      return;
    }
    yield put(showCertComplete(data));
  } catch (e) {
    yield put(showCertError(e));
  }
}

export function createShowCertSaga(types) {
  return [takeEvery(types.showCert, getShowCertSaga)];
}
