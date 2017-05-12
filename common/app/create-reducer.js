import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './redux';
import challenges, { projectNormalizer } from './routes/challenges/redux';
import entities from './entities';
import map from './Map/redux';
import nav from './Nav/redux';
import project from './routes/challenges/views/project/redux';
import step from './routes/challenges/views/step/redux';
import toasts from './Toasts/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    [app]: app,
    [challenges]: challenges,
    [entities]: entities,
    [map]: map,
    [nav]: nav,
    [project]: project,
    [step]: step,
    [toasts]: toasts,
    form: formReducer.normalize({ ...projectNormalizer })
  });
}
