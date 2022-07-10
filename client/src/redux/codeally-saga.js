import { createAction } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { postUserToken } from '../utils/ajax';
import { actionTypes, ns as MainApp } from './action-types';

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

export const updateUserToken = createAction(actionTypes.updateUserToken);

export const hideCodeAlly = createAction(actionTypes.hideCodeAlly);
export const showCodeAlly = createAction(actionTypes.showCodeAlly);
export const tryToShowCodeAlly = createAction(actionTypes.tryToShowCodeAlly);

export const isSignedInSelector = state => !!state[MainApp].appUsername;

export const userTokenSelector = state => {
  return userSelector(state).userToken;
};
export const usernameSelector = state => state[MainApp].appUsername;
export const userSelector = state => {
  const username = usernameSelector(state);

  return state[MainApp].user[username] || {};
};

export function createCodeAllySaga(types) {
  return [takeEvery(types.tryToShowCodeAlly, tryToShowCodeAllySaga)];
}
