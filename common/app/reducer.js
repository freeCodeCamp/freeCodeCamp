import { combineReducers } from 'berkeleys-redux-utils';

import app from './redux';
import entities from './entities';
import form from './redux-form-reducer';
import map from './Map/redux';
import nav from './Nav/redux';
import routes from './routes/redux';
import toasts from './Toasts/redux';
import files from './files';
import flash from './Flash/redux';


export default combineReducers(
  app,
  entities,
  map,
  nav,
  routes,
  toasts,
  files,
  flash,
  form
);
