import { all, call, takeEvery } from 'redux-saga/effects';
import TagManager from '../analytics';

function* callGaType({
  payload: { action, duration, amount, event, pagePath }
}) {
  if (event === 'pageview') {
    yield call(TagManager.dataLayer, {
      dataLayer: {
        event,
        pagePath
      }
    });
  } else if (event === 'donationview') {
    yield call(TagManager.dataLayer, {
      dataLayer: {
        event,
        action
      }
    });
  } else {
    // donation and donationrelated
    yield call(TagManager.dataLayer, {
      dataLayer: {
        event,
        action,
        duration,
        amount
      }
    });
  }
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
