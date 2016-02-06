import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as app } from './redux';
import { reducer as hikesApp } from './routes/Hikes/redux';

export default function createReducer(sideReducers = {}) {
  return combineReducers({
    ...sideReducers,
    app,
    hikesApp,
    form: formReducer
  });
}
