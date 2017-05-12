import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './redux';
import toasts from './Toasts/redux';
import entities from './entities';
import challenges, { projectNormalizer } from './routes/challenges/redux';
import nav from './Nav/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    [nav]: nav,
    [entities]: entities,
    [app]: app,
    [toasts]: toasts,
    [challenges]: challenges,
    form: formReducer.normalize({ ...projectNormalizer })
  });
}
