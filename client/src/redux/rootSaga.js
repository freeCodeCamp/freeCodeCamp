import { all } from 'redux-saga/effects';

import errorSagas from './error-saga';
import { sagas as appSagas } from './';
import { sagas as challengeSagas } from '../templates/Challenges/redux';
import { sagas as settingsSagas } from './settings';

export default function* rootSaga() {
  yield all([...errorSagas, ...appSagas, ...challengeSagas, ...settingsSagas]);
}
