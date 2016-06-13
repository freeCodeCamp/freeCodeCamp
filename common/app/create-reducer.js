import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as app } from './redux';
import entitiesReducer from './redux/entities-reducer';
import {
  reducer as challengesApp,
  projectNormalizer
} from './routes/challenges/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    entities: entitiesReducer,
    app,
    challengesApp,
    form: formReducer.normalize({ ...projectNormalizer })
  });
}
