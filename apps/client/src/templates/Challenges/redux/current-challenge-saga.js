import { put, takeEvery } from 'redux-saga/effects';
import store from 'store';

import { randomCompliment } from '../../../utils/get-words';
import { CURRENT_CHALLENGE_KEY } from './action-types';
import { updateSuccessMessage } from './actions';

function* currentChallengeSaga({ payload: id }) {
  yield store.set(CURRENT_CHALLENGE_KEY, id);
  //     // Temporarily removed to reduce calls to database
  //     // will need to re-import things at the top
  //     // yield call(post, update.endpoint, update.payload);
  // const isSignedIn = yield select(isSignedInSelector);
  // if (isSignedIn) {
  //   const update = {
  //     endpoint: '/update-my-current-challenge',
  //     payload: {
  //       currentChallengeId: id
  //     }
  //   };
  //   try {
  //     yield put(updateComplete());
  //   } catch {
  //     yield put(updateFailed(update));
  //   }
  // }
}

function* updateSuccessMessageSaga() {
  yield put(updateSuccessMessage(randomCompliment()));
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga)
  ];
}
