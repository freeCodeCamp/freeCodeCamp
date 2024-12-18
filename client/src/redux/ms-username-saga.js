import { call, put, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { postMsUsername, deleteMsUsername } from '../utils/ajax';
import { setMsUsername, setIsProcessing } from './actions';

const message = {
  linked: {
    type: 'success',
    message: FlashMessages.MsTranscriptLinked
  },
  linkErr: {
    type: 'danger',
    message: FlashMessages.MsTranscriptErr6
  },
  unlinked: {
    type: 'info',
    message: FlashMessages.MsTranscriptUnlinked
  },
  unlinkErr: {
    type: 'danger',
    message: FlashMessages.MsTranscriptUnlinkErr
  }
};

function* linkMsUsernameSaga({ payload: { msTranscriptUrl } }) {
  try {
    const { data } = yield call(postMsUsername, { msTranscriptUrl });

    yield put(setIsProcessing(false));

    if (data?.message) {
      yield put(createFlashMessage(data));
    } else if (data?.msUsername) {
      yield put(setMsUsername(data.msUsername));
      yield put(createFlashMessage(message.linked));
    } else {
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

    if (data?.message) {
      yield put(createFlashMessage(data));
    } else if (
      data &&
      Object.prototype.hasOwnProperty.call(data, 'msUsername')
    ) {
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
