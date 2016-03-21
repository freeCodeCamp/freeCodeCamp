import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as app } from './redux';
import entitiesReducer from './redux/entities-reducer';
import { reducer as hikesApp } from './routes/Hikes/redux';
import { reducer as challengesApp } from './routes/challenges/redux';
import {
  reducer as jobsApp,
  formNormalizer as jobsNormalizer
} from './routes/Jobs/redux';
import { reducer as map } from './routes/map/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    entities: entitiesReducer,
    app,
    hikesApp,
    jobsApp,
    challengesApp,
    map,
    form: formReducer.normalize(jobsNormalizer)
  });
}
