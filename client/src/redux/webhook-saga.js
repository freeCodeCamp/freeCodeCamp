import { call, put, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { postWebhookToken, deleteWebhookToken } from '../utils/ajax';
import {
  postWebhookTokenComplete,
  postWebhookTokenError,
  deleteWebhookTokenComplete,
  deleteWebhookTokenError
} from '.';

function* postWebhookTokenSaga() {
  try {
    const response = yield call(postWebhookToken);

    if (response.message) {
      yield put(createFlashMessage(response));
    } else {
      yield put(postWebhookTokenComplete(response));
    }
  } catch (e) {
    yield put(postWebhookTokenError(e));
  }
}

function* deleteWebhookTokenSaga() {
  try {
    const response = yield call(deleteWebhookToken);

    if (response.message) {
      yield put(createFlashMessage(response));
    } else {
      yield put(deleteWebhookTokenComplete(response));
    }
  } catch (e) {
    yield put(deleteWebhookTokenError(e));
  }
}

export function createWebhookSaga(types) {
  return [
    takeEvery(types.postWebhookToken, postWebhookTokenSaga),
    takeEvery(types.deleteWebhookToken, deleteWebhookTokenSaga)
  ];
}
