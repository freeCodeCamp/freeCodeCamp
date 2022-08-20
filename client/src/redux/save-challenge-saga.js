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
  standardizeRequestBody,
  getStringSizeInBytes,
  bodySizeFits,
  MAX_BODY_SIZE
} from '../utils/challenge-request-helpers';
import { saveChallengeComplete, savedChallengesSelector } from './';

export function* saveChallengeSaga() {
  const { id, challengeType } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);
  const savedChallenges = yield select(savedChallengesSelector);
  const savedChallenge = savedChallenges.find(challenge => challenge.id === id);

  // don't let users save more than once every 5 seconds
  if (Date.now() - savedChallenge?.lastSavedDate < 5000) {
    return yield put(
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.CodeSaveLess
      })
    );
  }

  // only allow saving of multifileCertProject's
  if (challengeType === challengeTypes.multifileCertProject) {
    const body = standardizeRequestBody({ id, challengeFiles, challengeType });
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
        const { data } = yield call(postSaveChallenge, body);

        if (data?.message) {
          yield put(createFlashMessage(data));
        } else if (data?.savedChallenges) {
          yield put(
            saveChallengeComplete(
              mapFilesToChallengeFiles(data.savedChallenges)
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
