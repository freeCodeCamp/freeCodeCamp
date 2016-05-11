import { sagas as appSagas } from './redux';
import { sagas as hikesSagas} from './routes/Hikes/redux';
import { sagas as jobsSagas } from './routes/Jobs/redux';
import { sagas as challengeSagas } from './routes/challenges/redux';

export default [
  ...appSagas,
  ...hikesSagas,
  ...jobsSagas,
  ...challengeSagas
];
