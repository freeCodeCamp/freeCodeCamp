import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchUserComplete, fetchUserError } from './';
import { getSessionUser } from '../utils/ajax';
import { jwt } from './cookieValues';

function* fetchSessionUser() {
  if (!jwt) {
    yield put(fetchUserComplete({ user: {}, username: '' }));
    return;
  }
  try {
    const {
      data: { user = {}, result = '' }
    } = yield call(getSessionUser);
    const appUser = user[result];
    yield put(fetchUserComplete({ user: appUser, username: result }));
  } catch (e) {
    yield put(fetchUserError(e));
  }
}

export function createFetchUserSaga(types) {
  return [takeEvery(types.fetchUser, fetchSessionUser)];
}
