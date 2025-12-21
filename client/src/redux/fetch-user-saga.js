import { call, cancel, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { getSessionUser, getUserProfile } from '../utils/ajax';
import { wrapHandledError } from '../utils/handled-error';
import { UserFetchErrorMessage } from '../utils/error-messages';
import {
  fetchProfileForUserComplete,
  fetchProfileForUserError,
  fetchUserComplete,
  fetchUserError,
  fetchUserTimeout
} from './actions';

function* fetchSessionUser() {
  const timeoutTask = yield fork(function* () {
    // The server should not take anywhere near 2 seconds to respond. If it
    // does, we assume the request has failed and dispatch a timeout action to
    // dismiss the loading state.
    yield delay(2000);
    yield put(fetchUserTimeout());
  });

  try {
    // This is on a longer timeout to make sure that users with slow connections
    // do, eventually, get signed in.
    const res = yield call(getSessionUser, AbortSignal.timeout(10000));

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
    const handledError = wrapHandledError(e, UserFetchErrorMessage);
    yield put(fetchUserError(handledError));
  } finally {
    yield cancel(timeoutTask);
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
