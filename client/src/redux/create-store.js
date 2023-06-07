import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import envData from '../../../config/env.json';
import { isBrowser } from '../../utils';
import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const { environment } = envData;

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
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
