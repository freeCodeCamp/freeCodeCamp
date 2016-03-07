import { Observable } from 'rx';
import { match } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';

// main app
import App from './App.jsx';
// app routes
import childRoutes from './routes';

// redux
import createReducer from './create-reducer';
import middlewares from './middlewares';
import sagas from './sagas';

// general utils
import servicesCreator from '../utils/services-creator';

const createRouteProps = Observable.fromNodeCallback(match);

const routes = { components: App, ...childRoutes };

//
// createApp(settings: {
//   location?: Location|String,
//   history?: History,
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
  initialState,
  serviceOptions = {},
  middlewares: sideMiddlewares = [],
  enhancers: sideEnhancers = [],
  reducers: sideReducers = {},
  sagas: sideSagas = []
}) {
  const sagaOptions = {
    services: servicesCreator(null, serviceOptions)
  };

  const enhancers = [
    applyMiddleware(
      ...middlewares,
      ...sideMiddlewares,
      ...[ ...sagas, ...sideSagas].map(saga => saga(sagaOptions)),
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
      store
    }));
}
