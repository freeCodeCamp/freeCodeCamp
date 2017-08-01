import { Observable } from 'rx';
import { match } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';

import { createEpic } from 'redux-epic';
import createReducer from './create-reducer';
import createRoutes from './create-routes.js';
import createPanesMap from './create-panes-map.js';
import createPanesAspects from './Panes/redux';
import epics from './epics';

import servicesCreator from '../utils/services-creator';

const createRouteProps = Observable.fromNodeCallback(match);

//
// createApp(settings: {
//   location?: Location|String,
//   history?: History,
//   syncHistoryWithStore?: ((history, store) => history) = (x) => x,
//   initialState?: Object|Void,
//   serviceOptions?: Object,
//   middlewares?: Function[],
//   sideReducers?: Object
//   enhancers?: Function[],
//   epics?: Function[],
// }) => Observable
//
// Either location or history must be defined
export default function createApp({
  location,
  history,
  syncHistoryWithStore = (x) => x,
  syncOptions = {},
  initialState,
  serviceOptions = {},
  middlewares: sideMiddlewares = [],
  enhancers: sideEnhancers = [],
  reducers: sideReducers = {},
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
    reducer: panesReducer,
    middleware: panesMiddleware
  } = createPanesAspects(createPanesMap());
  const enhancer = compose(
    applyMiddleware(
      panesMiddleware,
      epicMiddleware,
      ...sideMiddlewares
    ),
    // enhancers must come after middlewares
    // on client side these are things like Redux DevTools
    ...sideEnhancers
  );
  const reducer = createReducer(
    {
      [panesReducer]: panesReducer,
      ...sideReducers
    },
  );

  // create composed store enhancer
  // use store enhancer function to enhance `createStore` function
  // call enhanced createStore function with reducer and initialState
  // to create store
  const store = createStore(reducer, initialState, enhancer);
  // sync history client side with store.
  // server side this is an identity function and history is undefined
  history = syncHistoryWithStore(history, store, syncOptions);
  const routes = createRoutes(store);
  // createRouteProps({
  //   redirect: LocationDescriptor,
  //   history: History,
  //   routes: Object
  // }) => Observable
  return createRouteProps({ routes, location, history })
    .map(([ redirect, props ]) => ({
      redirect,
      props,
      reducer,
      store,
      epic: epicMiddleware
    }));
}
