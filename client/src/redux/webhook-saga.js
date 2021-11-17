import { call, put, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { postWebhookToken, deleteWebhookToken } from '../utils/ajax';
import { postWebhookTokenComplete, deleteWebhookTokenComplete } from '.';

const message = {
  created: {
    type: 'success',
    message: 'flash.token-created'
  },
  createErr: {
    type: 'danger',
    message: 'flash.create-token-err'
  },
  deleted: {
    type: 'info',
    message: 'flash.token-deleted'
  },
  deleteErr: {
    type: 'danger',
    message: 'flash.delete-token-err'
  }
};

function* postWebhookTokenSaga() {
  try {
    const response = yield call(postWebhookToken);

    if (response?.message) {
      yield put(createFlashMessage(response));
    } else {
      yield put(postWebhookTokenComplete(response));
      yield put(createFlashMessage(message.created));
    }
  } catch (e) {
    yield put(createFlashMessage(message.createErr));
  }
}

function* deleteWebhookTokenSaga() {
  try {
    const response = yield call(deleteWebhookToken);

    if (response?.message) {
      yield put(createFlashMessage(response));
    } else {
      yield put(deleteWebhookTokenComplete());
      yield put(createFlashMessage(message.deleted));
    }
  } catch (e) {
    yield put(createFlashMessage(message.deleteErr));
  }
}

export function createWebhookSaga(types) {
  return [
    takeEvery(types.postWebhookToken, postWebhookTokenSaga),
    takeEvery(types.deleteWebhookToken, deleteWebhookTokenSaga)
  ];
}
