import { all, call, takeEvery } from 'redux-saga/effects';
import TagManager from '../analytics';

function* callGaType({
  payload: { action, duration, amount, event, pagePath }
}) {
  if (event === 'page_view') {
    yield call(TagManager.dataLayer, {
      dataLayer: {
        event,
        pagePath
      }
    });
  } else if (event === 'donation_view') {
    yield call(TagManager.dataLayer, {
      dataLayer: {
        event,
        action
      }
    });
  } else {
    // donation and donation_related
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
