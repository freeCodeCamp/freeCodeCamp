import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { default as app } from './redux';
import { default as toasts } from './Toasts/redux';
import entitiesReducer from './redux/entities-reducer';
import {
  default as challenges,
  projectNormalizer
} from './routes/challenges/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    entities: entitiesReducer,
    [app]: app,
    [toasts]: toasts,
    [challenges]: challenges,
    form: formReducer.normalize({ ...projectNormalizer })
  });
}
