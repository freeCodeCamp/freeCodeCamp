import { Observable } from 'rx';
import { match } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';

// main app
import App from './App.jsx';
// app routes
import createChildRoute from './routes';

// redux
import { createEpic } from 'redux-epic';
import createReducer from './create-reducer';
import sagas from './sagas';

// general utils
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
//   sagas?: Function[],
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
  sagas: sideSagas = [],
  sagaOptions: sideSagaOptions = {}
}) {
  const sagaOptions = {
    ...sideSagaOptions,
    services: servicesCreator(serviceOptions)
  };

  const sagaMiddleware = createEpic(
    sagaOptions,
    ...sagas,
    ...sideSagas
  );
  const enhancers = [
    applyMiddleware(
      ...sideMiddlewares,
      sagaMiddleware
    ),
    // enhancers must come after middlewares
    // on client side these are things like Redux DevTools
    ...sideEnhancers
  ];
  const reducer = createReducer(sideReducers);

  // create composed store enhancer
  // use store enhancer function to enhance `createStore` function
  // call enhanced createStore function with reducer and initialState
  // to create store
  const store = compose(...enhancers)(createStore)(reducer, initialState);
  // sync history client side with store.
  // server side this is an identity function and history is undefined
  history = syncHistoryWithStore(history, store, syncOptions);
  const routes = {
    components: App,
    ...createChildRoute({
      getState() { return store.getState(); }
    })
  };
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
      epic: sagaMiddleware
    }));
}
