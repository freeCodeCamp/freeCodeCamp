import { combineReducers } from 'berkeleys-redux-utils';

import app from './redux';
import entities from './entities';
import { reducer as form } from 'redux-form';
import map from './Map/redux';
import nav from './Nav/redux';
import routes from './routes/redux';
import toasts from './Toasts/redux';
import flash from './Flash/redux';

form.toString = () => 'form';

export default combineReducers(
  app,
  entities,
  map,
  nav,
  routes,
  toasts,
  flash,
  form
);
