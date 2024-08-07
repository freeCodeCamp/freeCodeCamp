import { call, put, takeEvery } from 'redux-saga/effects';
import { getSessionUser, getUserProfile } from '../utils/ajax';
import {
  fetchProfileForUserComplete,
  fetchProfileForUserError,
  fetchUserComplete,
  fetchUserError
} from './actions';

function* fetchSessionUser() {
  try {
    const {
      data: { user = {}, result = '' }
    } = yield call(getSessionUser);
    const appUser = user[result] || {};

    yield put(fetchUserComplete({ user: appUser, username: result }));
  } catch (e) {
    console.log('failed to fetch user', e);
    yield put(fetchUserError(e));
  }
}

function* fetchOtherUser({ payload: maybeUser = '' }) {
  try {
    const maybeUserLC = maybeUser.toLowerCase();

    const {
      data: { entities: { user = {} } = {}, result = '' }
    } = yield call(getUserProfile, maybeUserLC);
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
