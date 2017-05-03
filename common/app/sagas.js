import { epics as appEpics } from './redux';
import { epics as challengeEpics } from './routes/challenges/redux';
import { sagas as settingsSagas } from './routes/settings/redux';

export default [
  ...appEpics,
  ...challengeEpics,
  ...settingsSagas
];
