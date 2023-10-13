import { all } from 'redux-saga/effects';

import { sagas as challengeSagas } from '../templates/Challenges/redux';
import errorSagas from './error-saga';
import { sagas as settingsSagas } from './settings';
import { sagas as appSagas } from '.';
import confettiSaga from './confetti-saga'; // Import the confettiSaga

export default function* rootSaga() {
  yield all([...errorSagas, ...appSagas, ...challengeSagas, ...settingsSagas, confettiSaga]); // Include the confettiSaga
}

