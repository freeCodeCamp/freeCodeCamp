import { call, put, select, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { postUserToken } from '../utils/ajax';
import { showCodeAlly, updateUserToken } from './actions';
import { isSignedInSelector, userTokenSelector } from './selectors';

const startProjectErrMessage = {
  type: 'danger',
  message: FlashMessages.StartProjectErr
};

function* tryToShowCodeAllySaga() {
  const isSignedIn = yield select(isSignedInSelector);
  const hasUserToken = !!(yield select(userTokenSelector));

  if (!isSignedIn || hasUserToken) {
    yield put(showCodeAlly());
  } else {
    try {
      const { data } = yield call(postUserToken);

      if (data?.userToken) {
        yield put(updateUserToken(data.userToken));
        yield put(showCodeAlly());
      } else {
        yield put(createFlashMessage(startProjectErrMessage));
      }
    } catch (e) {
      yield put(createFlashMessage(startProjectErrMessage));
    }
  }
}

export function createCodeAllySaga(types) {
  return [takeEvery(types.tryToShowCodeAlly, tryToShowCodeAllySaga)];
}
