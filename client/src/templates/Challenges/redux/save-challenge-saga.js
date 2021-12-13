import { call, takeEvery } from 'redux-saga/effects';
import { postSaveChallenge } from '../../../utils/ajax';

export function* saveChallengeSaga({ payload }) {
  const { id, challengeFile } = payload;

  try {
    const response = yield call(postSaveChallenge({ id, challengeFile }));
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
