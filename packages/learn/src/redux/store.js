/* eslint-disable-next-line max-len */
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { reducer as app, epics as appEpics } from './app';
import {
  reducer as challenge,
  epics as challengeEpics,
  formReducer
} from '../templates/Challenges/redux';
import { reducer as map } from '../components/Map/redux';
import servicesCreator from './createServices';
import { _csrf } from './cookieValues';

const serviceOptions = {
  context: _csrf ? { _csrf } : {},
  xhrPath: '/external/services',
  xhrTimeout: 15000
};

const rootReducer = combineReducers({
  app,
  challenge,
  form: formReducer,
  map
});

const rootEpic = combineEpics(...appEpics, ...challengeEpics);

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    window: typeof window !== 'undefined' ? window : {},
    location: typeof window !== 'undefined' ? window.location : {},
    document: typeof window !== 'undefined' ? document : {},
    services: servicesCreator(serviceOptions)
  }
});

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const createStore = () =>
  reduxCreateStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
