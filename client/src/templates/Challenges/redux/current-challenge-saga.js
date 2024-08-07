import { put, takeEvery, select, call } from 'redux-saga/effects';
import store from 'store';

import { randomCompliment } from '../../../utils/get-words';
import { setRenderStartTime } from '../../../redux/actions';
import { renderStartTimeSelector } from '../../../redux/selectors';
import callGA from '../../../analytics/call-ga';
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

function* sendRenderTimeSaga({ payload }) {
  /*
    This saga sends the difference between a challenge submission time 
    and next challenge's description change time to google analytics.
  */
  const renderStartTime = yield select(renderStartTimeSelector);
  if (renderStartTime) {
    const challengeRenderTime = payload - renderStartTime;
    yield put(setRenderStartTime(null));
    yield call(callGA, {
      event: 'render_time',
      render_time_msec: challengeRenderTime
    });
  }
}

export function createCurrentChallengeSaga(types) {
  return [
    takeEvery(types.challengeMounted, currentChallengeSaga),
    takeEvery(types.challengeMounted, updateSuccessMessageSaga),
    takeEvery(types.sendRenderTime, sendRenderTimeSaga)
  ];
}
