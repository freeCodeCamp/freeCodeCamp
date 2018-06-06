import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';

import { reducer as app, epics as appEpics } from './app';
import {
  reducer as challenge,
  epics as challengeEpics
} from '../templates/Challenges/redux';
import { reducer as map } from '../components/Map/redux';
import servicesCreator from './createServices';
import { _csrf } from './cookieVaules';

const serviceOptions = {
  context: _csrf ? { _csrf } : {},
  xhrPath: '/external/services',
  xhrTimeout: 15000
};

const rootReducer = combineReducers({
  app,
  challenge,
  form: formReducer,
  map,
  router
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

export const createStore = history =>
  reduxCreateStore(
    rootReducer,
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  );
