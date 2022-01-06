import { call, takeEvery, put, select } from 'redux-saga/effects';
import { postSaveChallenge, mapFilesToChallengeFiles } from '../utils/ajax';
import {
  challengeDataSelector,
  challengeMetaSelector
} from '../templates/Challenges/redux';
import { createFlashMessage } from '../components/Flash/redux';
import { challengeTypes } from '../../utils/challenge-types';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { uniformizeChallengeSize } from '../utils/uniformize-challenge-size';
import { saveChallengeComplete } from './';

export function* saveChallengeSaga() {
  const { id, challengeType } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);

  // only allow saving of multiFileCertProject's
  if (challengeType === challengeTypes.multiFileCertProject) {
    // body-parser has a size limit for req.body
    // this makes a uniform object to check the size of for saving and submitting challenges
    const body = uniformizeChallengeSize({ id, challengeFiles, challengeType });
    const bodySizeInBytes = new Blob([JSON.stringify(body)]).size;

    // body-parser's default size limit
    const MAX_SIZE = 102400;

    // if it's too big, don't send the request
    if (bodySizeInBytes > MAX_SIZE) {
      yield put(
        createFlashMessage({
          type: 'danger',
          message: 'flash.challenge-save-too-big',
          variables: {
            'max-size': MAX_SIZE,
            'user-size': bodySizeInBytes
          }
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
