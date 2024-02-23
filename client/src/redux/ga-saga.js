import { all, call, takeEvery } from 'redux-saga/effects';
import TagManager from '../analytics';

const renameChallengeRenderTimeKey = obj => {
  if ('challengeRenderTime' in obj) {
    obj['render_time_msec'] = obj['challengeRenderTime'];
    delete obj['challengeRenderTime'];
  }
  return obj;
};

function* callGaType({ payload }) {
  const standardizedPayLoad = renameChallengeRenderTimeKey(payload);
  yield call(TagManager.dataLayer, {
    dataLayer: {
      ...standardizedPayLoad
    }
  });
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
