import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import envData from '../../config/env.json';
import { isBrowser } from '../../utils';
import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

declare const module: {
  hot?: {
    accept: (path: string, callback: () => void) => void;
  };
};

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

export const createStore = (preloadedState = {}) => {
  let store;
  if (environment === 'production') {
    store = reduxCreateStore(
      rootReducer,
      preloadedState,
      applyMiddleware(sagaMiddleware, epicMiddleware)
    );
  } else {
    store = reduxCreateStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(sagaMiddleware, epicMiddleware))
    );
  }
  sagaMiddleware.run(rootSaga);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  epicMiddleware.run(rootEpic);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./root-reducer', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
      const nextRootReducer = require('./root-reducer');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
