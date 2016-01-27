import { sagas as appSagas } from './redux';
import { sagas as hikesSagas} from './routes/Hikes/redux';
export default [
  ...appSagas,
  ...hikesSagas
];
