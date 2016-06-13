import { sagas as appSagas } from './redux';
import { sagas as challengeSagas } from './routes/challenges/redux';

export default [
  ...appSagas,
  ...challengeSagas
];
