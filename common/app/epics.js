import { epics as app } from './redux';
import { epics as challenge } from './routes/Challenges/redux';
import { epics as flash } from './Flash/redux';
import { epics as nav } from './Nav/redux';
import { epics as map } from './Map/redux';
import { epics as panes } from './Panes/redux';
import { epics as user } from './entities/user';

export default [
  ...app,
  ...challenge,
  ...flash,
  ...map,
  ...nav,
  ...panes,
  ...user
];
