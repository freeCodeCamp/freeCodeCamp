import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as app } from './redux';
import { reducer as toasts } from './toasts/redux';
import entitiesReducer from './redux/entities-reducer';
import {
  reducer as challengesApp,
  projectNormalizer
} from './routes/challenges/redux';
import { reducer as settingsApp } from './routes/settings/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    entities: entitiesReducer,
    app,
    toasts,
    challengesApp,
    settingsApp,
    form: formReducer.normalize({ ...projectNormalizer })
  });
}
