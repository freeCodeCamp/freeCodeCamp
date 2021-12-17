import { call, takeEvery } from 'redux-saga/effects';
import { postSaveChallenge } from '../../../utils/ajax';
import { select } from 'redux-saga/effects';
import { challengeDataSelector, challengeMetaSelector } from './';
import { challengeTypes } from '../../../../utils/challenge-types';

export function* saveChallengeSaga() {
  console.log('saveChallengeSaga');
  // const { id, challengeFile } = payload;

  try {
    const { id, challengeType } = yield select(challengeMetaSelector);
    const { challengeFiles } = yield select(challengeDataSelector);
    
    console.log('challengeFiles');
    console.log(challengeFiles);

    // only allow saving the cert projects for now
    if(challengeType !== challengeTypes.multiFileCertProject) {
      throw new Error(`Cannot save challenge type of ${challengeType}`);
    }

    //console.log('challengeMeta');
    //console.log(challengeMeta);

    const response = yield call(postSaveChallenge({ id, challengeFiles }));
    console.log('response');
    console.log(response);
  } catch (e) {
    console.log('error caught');
    console.log(e);
  }
}

export function createSaveChallengeSaga(types) {
  return [takeEvery(types.saveChallenge, saveChallengeSaga)];
}
