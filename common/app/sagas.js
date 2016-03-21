import { sagas as appSagas } from './redux';
import { sagas as hikesSagas} from './routes/Hikes/redux';
import { sagas as jobsSagas } from './routes/Jobs/redux';
import { sagas as mapSagas } from './routes/map/redux';

export default [
  ...appSagas,
  ...hikesSagas,
  ...jobsSagas,
  ...mapSagas
];
