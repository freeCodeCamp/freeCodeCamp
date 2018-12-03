import { call, put, takeEvery } from 'redux-saga/effects';

import {
  fetchUserComplete,
  fetchUserError,
  fetchProfileForUserError,
  fetchProfileForUserComplete
} from './';
import { getSessionUser, getUserProfile } from '../utils/ajax';
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
    const appUser = user[result] || {};
    yield put(fetchUserComplete({ user: appUser, username: result }));
  } catch (e) {
    yield put(fetchUserError(e));
  }
}

function* fetchOtherUser({ payload: maybeUser }) {
  try {
    const { data } = yield call(getUserProfile, maybeUser);

    const { entities: { user = {} } = {}, result = '' } = data;
    const otherUser = user[result] || {};
    yield put(
      fetchProfileForUserComplete({ user: otherUser, username: result })
    );
  } catch (e) {
    yield put(fetchProfileForUserError(e));
  }
}

export function createFetchUserSaga(types) {
  return [
    takeEvery(types.fetchUser, fetchSessionUser),
    takeEvery(types.fetchProfileForUser, fetchOtherUser)
  ];
}
