import { call, takeEvery, put, select } from 'redux-saga/effects';
import { postSaveChallenge } from '../../../utils/ajax';
import {
  challengeDataSelector,
  challengeMetaSelector,
  saveChallengeComplete
} from './';
import { createFlashMessage } from '../../../components/Flash/redux';
import { challengeTypes } from '../../../../utils/challenge-types';

export function* saveChallengeSaga() {
  const { id, challengeType } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);

  if (challengeType === challengeTypes.multiFileCertProject) {
    try {
      const response = yield call(postSaveChallenge, { id, challengeFiles });

      if (response?.savedChallenges) {
        yield put(saveChallengeComplete(response.savedChallenges));
        yield put(
          createFlashMessage({
            type: 'success',
            message: 'flash.code-saved'
          })
        );
      }
    } catch (e) {
      yield put(
        createFlashMessage({
          type: 'danger',
          message: 'flash.code-save-error'
        })
      );
    }
  }
}

export function createSaveChallengeSaga(types) {
  return [takeEvery(types.saveChallenge, saveChallengeSaga)];
}
