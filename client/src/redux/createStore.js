/* eslint-disable-next-line  max-len */
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

import servicesCreator from './createServices';
import { _csrf } from './cookieValues';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const serviceOptions = {
  context: _csrf ? { _csrf } : {},
  xhrPath: '/external/services',
  xhrTimeout: 15000
};

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware({
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

export const createStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, epicMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  epicMiddleware.run(rootEpic);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
