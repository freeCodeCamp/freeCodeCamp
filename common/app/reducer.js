import { combineReducers } from 'berkeleys-redux-utils';
import { reducer as formReducer } from 'redux-form';

import app from './redux';
import entities from './entities';
import map from './Map/redux';
import nav from './Nav/redux';
import routes from './routes/redux';
import toasts from './Toasts/redux';
import files from './files';
import flash from './Flash/redux';
// not ideal but should go away once we move to react-redux-form
import { projectNormalizer } from './routes/Challenges/redux';

const _formReducer = formReducer.normalize({ ...projectNormalizer });
_formReducer.toString = () => 'form';

export default combineReducers(
  app,
  entities,
  map,
  nav,
  routes,
  toasts,
  files,
  flash,
  _formReducer
);
