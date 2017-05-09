import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './redux';
import toasts from './Toasts/redux';
import entities from './redux/entities-reducer';
import challenges, { projectNormalizer } from './routes/challenges/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    [entities]: entities,
    [app]: app,
    [toasts]: toasts,
    [challenges]: challenges,
    form: formReducer.normalize({ ...projectNormalizer })
  });
}
