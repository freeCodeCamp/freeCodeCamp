import { epics as app } from './redux';
import { epics as flash } from './Flash/redux';
import { epics as map } from './Map/redux';
import { epics as nav } from './Nav/redux';
import { epics as settings } from './routes/Settings/redux';

export default [
  ...app,
  ...flash,
  ...map,
  ...nav,
  ...settings
];
