import { epics as app } from './redux';
import { epics as challenge } from './routes/challenges/redux';
import { epics as settings } from './routes/settings/redux';

export default [
  ...app,
  ...challenge,
  ...settings
];
