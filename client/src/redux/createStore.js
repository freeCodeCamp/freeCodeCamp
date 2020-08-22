/* eslint-disable-next-line  max-len */
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { isBrowser } from '../../utils';

import { environment } from '../../../config/env.json';

const clientSide = isBrowser();

const sagaMiddleware = createSagaMiddleware({
  context: {
    document: clientSide ? document : {}
  }
});
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    window: clientSide ? window : {},
    location: clientSide ? window.location : {},
    document: clientSide ? document : {}
  }
});

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const createStore = () => {
  let store;
  if (environment === 'production') {
    store = reduxCreateStore(
      rootReducer,
      applyMiddleware(sagaMiddleware, epicMiddleware)
    );
  } else {
    store = reduxCreateStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware, epicMiddleware))
    );
  }
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
