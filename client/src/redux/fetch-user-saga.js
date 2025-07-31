import { call, put, takeEvery, race, delay } from 'redux-saga/effects';
import { getSessionUser, getUserProfile } from '../utils/ajax';
import {
  fetchProfileForUserComplete,
  fetchProfileForUserError,
  fetchUserComplete,
  fetchUserError
} from './actions';

function* fetchSessionUser() {
  try {
    const { res, timeout } = yield race({
      res: call(getSessionUser),
      timeout: delay(5000)
    });

    if (timeout) {
      throw new Error('Request timed out after 5 seconds');
    }

    const isSignedOut = res.response.status === 401;
    if (!res.response.ok && !isSignedOut) {
      throw new Error(
        `HTTP Error: ${res.response.status} ${res.response.statusText}`
      );
    }

    const { data: user } = res;
    yield put(fetchUserComplete({ user }));
  } catch (e) {
    console.log('failed to fetch user', e);
    yield put(fetchUserError(e));
  }
}

function* fetchOtherUser({ payload: maybeUser = '' }) {
  try {
    const maybeUserLC = maybeUser.toLowerCase();

    const { data: otherUser } = yield call(getUserProfile, maybeUserLC);
    yield put(fetchProfileForUserComplete({ user: otherUser }));
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
