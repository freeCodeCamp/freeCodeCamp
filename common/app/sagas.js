import { sagas as appSagas } from './redux';
import { sagas as campsitesSagas} from './routes/Campsites/redux';
import { sagas as challengeSagas } from './routes/challenges/redux';
import { sagas as settingsSagas } from './routes/settings/redux';

export default [
  ...appSagas,
  ...campsitesSagas,
  ...challengeSagas,
  ...settingsSagas
];
