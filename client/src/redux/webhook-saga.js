import { call, put, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { deleteWebhookToken } from '../utils/ajax';
import { deleteWebhookTokenComplete } from '.';

const message = {
  deleted: {
    type: 'info',
    message: FlashMessages.TokenDeleted
  },
  deleteErr: {
    type: 'danger',
    message: FlashMessages.DeleteTokenErr
  }
};

function* deleteWebhookTokenSaga() {
  try {
    const response = yield call(deleteWebhookToken);

    if (response && Object.prototype.hasOwnProperty.call(response, 'token')) {
      yield put(deleteWebhookTokenComplete());
      yield put(createFlashMessage(message.deleted));
    } else {
      yield put(createFlashMessage(message.deleteErr));
    }
  } catch (e) {
    yield put(createFlashMessage(message.deleteErr));
  }
}

export function createWebhookSaga(types) {
  return [takeEvery(types.deleteWebhookToken, deleteWebhookTokenSaga)];
}
