import { call, put, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { postWebhookToken, deleteWebhookToken } from '../utils/ajax';
import { postWebhookTokenComplete, deleteWebhookTokenComplete } from '.';

const message = {
  created: {
    type: 'success',
    message: FlashMessages.TokenCreated
  },
  createErr: {
    type: 'danger',
    message: FlashMessages.CreateTokenErr
  },
  deleted: {
    type: 'info',
    message: FlashMessages.TokenDeleted
  },
  deleteErr: {
    type: 'danger',
    message: FlashMessages.DeleteTokenErr
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
