/* eslint-disable require-yield */

import { takeEvery } from 'redux-saga/effects';
import store from 'store';

const soundKey = 'fcc-sound';

export function setSound(setting) {
  store.set(soundKey, setting);
}

function* updateLocalSoundSaga({ payload }) {
  const { user, sound } = payload ?? {};
  if (user) {
    const { sound = false } = user;
    setSound(sound);
  } else if (typeof sound !== 'undefined') {
    setSound(sound);
  }
}

export function createSoundModeSaga(types) {
  return [
    takeEvery(types.fetchUserComplete, updateLocalSoundSaga),
    takeEvery(types.updateMySoundComplete, updateLocalSoundSaga)
  ];
}
