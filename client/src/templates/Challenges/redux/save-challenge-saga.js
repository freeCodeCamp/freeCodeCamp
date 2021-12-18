import { call, takeEvery, put, select } from 'redux-saga/effects';
import { postSaveChallenge } from '../../../utils/ajax';
import { challengeDataSelector, challengeMetaSelector } from './';
import { createFlashMessage } from '../../../components/Flash/redux';

export function* saveChallengeSaga() {
  try {
    const { id } = yield select(challengeMetaSelector);
    const { challengeFiles } = yield select(challengeDataSelector);

    const response = yield call(postSaveChallenge, { id, challengeFiles });

    if (response?.message) {
      yield put(createFlashMessage(response));
    }
  } catch (e) {
    yield put(
      createFlashMessage({
        type: 'danger',
        message: 'flash.save-code-error'
      })
    );
  }
}

export function createSaveChallengeSaga(types) {
  return [takeEvery(types.saveChallenge, saveChallengeSaga)];
}
