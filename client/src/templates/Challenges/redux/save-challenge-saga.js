import { call, takeEvery } from 'redux-saga/effects';
import { postSaveChallenge } from '../../../utils/ajax';

export function* saveChallengeSaga(payload) {
  console.log(payload);
  try {
    const response = yield call(postSaveChallenge(payload));

    if (response) {
      console.log('got a response');
    } else {
      console.log('no response');
    }
  } catch (e) {
    console.log('error caught');
  }
}

export function createSaveChallengeSaga(types) {
  return [takeEvery(types.saveChallenge, saveChallengeSaga)];
}
