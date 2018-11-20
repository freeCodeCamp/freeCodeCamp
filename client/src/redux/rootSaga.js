import { all } from 'redux-saga/effects';

import { sagas as appSagas } from './';
import { sagas as settingsSagas } from './settings';
import { sagas as challengeSagas } from '../templates/Challenges/redux';

export default function* rootSaga() {
  yield all([...appSagas, ...challengeSagas, ...settingsSagas]);
}
