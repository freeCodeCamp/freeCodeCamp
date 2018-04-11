import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

import { reducer as app } from './app';
import { reducer as challenge, epics } from '../templates/Challenges/redux';
import { reducer as map } from '../components/Map/redux';

const rootReducer = combineReducers({
  app,
  challenge,
  map,
  router
});

const rootEpic = combineEpics(...epics);

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    window: typeof window !== 'undefined' ? window : {},
    document: typeof window !== 'undefined' ? document : {}
  }
});

export const createStore = history =>
  reduxCreateStore(
    rootReducer,
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  );
