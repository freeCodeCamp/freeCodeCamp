import { call, put, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { postMsUsername, deleteMsUsername } from '../utils/ajax';
import { setMsUsername, setIsProcessing } from './actions';

const message = {
  linked: {
    type: 'success',
    message: FlashMessages.MsLinked
  },
  linkErr: {
    type: 'danger',
    message: FlashMessages.MsLinkErr
  },
  unlinked: {
    type: 'info',
    message: FlashMessages.MsUnlinked
  },
  unlinkErr: {
    type: 'danger',
    message: FlashMessages.MsUnlinkErr
  }
};

function* linkMsUsernameSaga({ payload: { msTranscriptUrl } }) {
  try {
    const { data } = yield call(postMsUsername, { msTranscriptUrl });

    if (data && Object.prototype.hasOwnProperty.call(data, 'msUsername')) {
      yield put(setMsUsername(data.msUsername));
      yield put(setIsProcessing(false));
      yield put(createFlashMessage(message.linked));
    } else {
      yield put(setIsProcessing(false));
      yield put(createFlashMessage(message.linkErr));
    }
  } catch {
    yield put(setIsProcessing(false));
    yield put(createFlashMessage(message.linkErr));
  }
}

function* unlinkMsUsernameSaga() {
  try {
    const { data } = yield call(deleteMsUsername);

    if (data && Object.prototype.hasOwnProperty.call(data, 'msUsername')) {
      yield put(setMsUsername(data.msUsername));
      yield put(createFlashMessage(message.unlinked));
    } else {
      yield put(createFlashMessage(message.unlinkErr));
    }
  } catch {
    yield put(createFlashMessage(message.unlinkErr));
  }
}

export function createMsUsernameSaga(types) {
  return [
    takeEvery(types.linkMsUsername, linkMsUsernameSaga),
    takeEvery(types.unlinkMsUsername, unlinkMsUsernameSaga)
  ];
}
