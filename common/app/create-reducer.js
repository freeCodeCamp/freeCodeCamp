import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as app } from './redux';
import { reducer as hikesApp } from './routes/Hikes/redux';
import {
  reducer as jobsApp,
  formNormalizer as jobsNormalizer
} from './routes/Jobs/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    app,
    hikesApp,
    jobsApp,
    form: formReducer.normalize(jobsNormalizer)
  });
}
