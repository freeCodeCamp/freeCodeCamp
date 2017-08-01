import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './redux';
import entities from './entities';
import map from './Map/redux';
import nav from './Nav/redux';
import routes from './routes/redux';
import toasts from './Toasts/redux';
// not ideal but should go away once we move to react-redux-form
import { projectNormalizer } from './routes/challenges/redux';

export default function createReducer(sideReducers) {
  // reducers exported from features need to be factories
  // this helps avoid cyclic requires messing up reducer creation
  // We end up with exports from files being undefined as node tries
  // to resolve cyclic dependencies.
  // This prevents that by wrapping the `handleActions` call so that the ref
  // to types imported from parent features are closures and can be resolved
  // by node before we need them.
  const reducerMap = [
    app,
    entities,
    map,
    nav,
    routes,
    toasts
  ]
    .map(createReducer => createReducer())
    .reduce((arr, cur) => arr.concat(cur), [])
    .reduce(
      (reducerMap, reducer) => {
        reducerMap[reducer] = reducer;
        return reducerMap;
      },
      {
        form: formReducer.normalize({ ...projectNormalizer }),
        ...sideReducers
      }
    );
  return combineReducers(reducerMap);
}
