import { call, takeEvery, put, select } from 'redux-saga/effects';
import { postSaveChallenge } from '../../../utils/ajax';
import { challengeDataSelector, challengeMetaSelector } from './';
import { createFlashMessage } from '../../../components/Flash/redux';
import { challengeTypes } from '../../../../utils/challenge-types';

export function* saveChallengeSaga() {
  const { id, challengeType } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);

  if (challengeType === challengeTypes.multiFileCertProject) {
    try {
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
}

export function createSaveChallengeSaga(types) {
  return [takeEvery(types.saveChallenge, saveChallengeSaga)];
}
