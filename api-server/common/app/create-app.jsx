import { Observable } from 'rx';
import createDebugger from 'debug';
import { compose, createStore, applyMiddleware } from 'redux';
import { selectLocationState, connectRoutes } from 'redux-first-router';
import { combineReducers } from 'berkeleys-redux-utils';

import { createEpic } from 'redux-epic';
import appReducer from './reducer.js';
import routesMap from './routes-map.js';
import epics from './epics';

import servicesCreator from '../utils/services-creator';

const debug = createDebugger('fcc:app:createApp');
// createApp(settings: {
//   history?: History,
//   defaultState?: Object|Void,
//   serviceOptions?: Object,
//   middlewares?: [...Function],
//   enhancers?: [...Function],
//   epics?: [...Function],
// }) => Observable
//
// Either location or history must be defined
export default function createApp({
  history,
  defaultState,
  serviceOptions = {},
  middlewares: sideMiddlewares = [],
  enhancers: sideEnhancers = [],
  epics: sideEpics = [],
  epicOptions: sideEpicOptions = {}
}) {
  const epicOptions = {
    ...sideEpicOptions,
    services: servicesCreator(serviceOptions)
  };

  const epicMiddleware = createEpic(
    epicOptions,
    ...epics,
    ...sideEpics
  );

  const {
    reducer: routesReducer,
    middleware: routesMiddleware,
    enhancer: routesEnhancer
  } = connectRoutes(history, routesMap);

  routesReducer.toString = () => 'location';

  const enhancer = compose(
    routesEnhancer,
    applyMiddleware(
      routesMiddleware,
      epicMiddleware,
      ...sideMiddlewares
    ),
    // enhancers must come after middlewares
    // on client side these are things like Redux DevTools
    ...sideEnhancers
  );

  const reducer = combineReducers(
    appReducer,
    routesReducer
  );

  // create composed store enhancer
  // use store enhancer function to enhance `createStore` function
  // call enhanced createStore function with reducer and defaultState
  // to create store
  const store = createStore(reducer, defaultState, enhancer);
  const location = selectLocationState(store.getState());

  // note(berks): should get stripped in production client by webpack
  // We need to find a way to hoist to top level in production node env
  // babel plugin, maybe? After a quick search I couldn't find one
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducer.js', () => {
        debug('hot reloading reducers');
        store.replaceReducer(combineReducers(
          require('./reducer.js').default,
          routesReducer
        ));
      });
    }
  }
  // ({
  //   redirect,
  //   props,
  //   reducer,
  //   store,
  //   epic: epicMiddleware
  // }));
  return Observable.of({
    store,
    epic: epicMiddleware,
    location,
    notFound: false
  });
}
