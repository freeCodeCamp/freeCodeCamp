import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchUserComplete, fetchUserError } from './';
import { getSessionUser } from '../utils/ajax';

function* fetchSessionUser() {
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
