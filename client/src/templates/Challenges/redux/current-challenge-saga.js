import { call, put, select, takeEvery } from 'redux-saga/effects';
import store from 'store';

import { randomCompliment } from '../../../utils/get-words';
import { recordClientActivity } from '../../../utils/activity';
import { updateResumeUrl } from '../../../redux/actions';
import { isSignedInSelector } from '../../../redux/selectors';
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

export function* updateActivityOnSubmitSaga({ payload = {} }) {
  const { challengeId, nextChallengePath } = payload;
  const isSignedIn = yield select(isSignedInSelector);
  if (!isSignedIn || !challengeId || !nextChallengePath) return;

  try {
    const result = yield call(
      recordClientActivity,
      challengeId,
      nextChallengePath
    );
    if (result?.recorded) {
      yield put(updateResumeUrl(nextChallengePath));
    }
  } catch {
    // Activity tracking is non-critical and must not break completion.
  }
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.submitChallengeComplete, updateActivityOnSubmitSaga)
  ];
}
