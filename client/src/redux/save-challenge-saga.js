import { call, takeEvery, put, select } from 'redux-saga/effects';
import { postSaveChallenge, mapFilesToChallengeFiles } from '../utils/ajax';
import {
  challengeDataSelector,
  challengeMetaSelector
} from '../templates/Challenges/redux';
import { createFlashMessage } from '../components/Flash/redux';
import { challengeTypes } from '../../utils/challenge-types';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import {
  uniformizeRequestBody,
  getStringSizeInBytes,
  bodySizeFits,
  MAX_BODY_SIZE
} from '../utils/challenge-request-helpers';
import { saveChallengeComplete } from './';

export function* saveChallengeSaga() {
  const { id, challengeType } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);

  // only allow saving of multiFileCertProject's
  if (challengeType === challengeTypes.multiFileCertProject) {
    const body = uniformizeRequestBody({ id, challengeFiles, challengeType });
    const bodySizeInBytes = getStringSizeInBytes(body);

    if (!bodySizeFits(bodySizeInBytes)) {
      return yield put(
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.ChallengeSaveTooBig,
          variables: { 'max-size': MAX_BODY_SIZE, 'user-size': bodySizeInBytes }
        })
      );
    } else {
      try {
        const response = yield call(postSaveChallenge, body);

        if (response?.message) {
          yield put(createFlashMessage(response));
        } else if (response?.savedChallenges) {
          yield put(
            saveChallengeComplete(
              mapFilesToChallengeFiles(response.savedChallenges)
            )
          );
          yield put(
            createFlashMessage({
              type: 'success',
              message: FlashMessages.CodeSaved
            })
          );
        }
      } catch (e) {
        yield put(
          createFlashMessage({
            type: 'danger',
            message: FlashMessages.CodeSaveError
          })
        );
      }
    }
  }
}

export function createSaveChallengeSaga(types) {
  return [takeEvery(types.saveChallenge, saveChallengeSaga)];
}
