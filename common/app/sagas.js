import { sagas as appSagas } from './redux';
import { sagas as challengeSagas } from './routes/challenges/redux';
import { sagas as settingsSagas } from './routes/settings/redux';

export default [
  ...appSagas,
  ...challengeSagas,
  ...settingsSagas
];
