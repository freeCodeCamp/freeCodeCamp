import { all } from 'redux-saga/effects';

import { sagas as appSagas } from './';
import { sagas as settingsSagas } from './settings';

export default function* rootSaga() {
  yield all([...appSagas, ...settingsSagas]);
}
