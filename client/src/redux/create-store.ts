import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import envData from '../../config/env.json';
import { isBrowser } from '../../utils';
import {
  examAttempts,
  examEnvironmentAuthorizationTokenApi
} from '../utils/ajax';
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

// const composeEnhancers = composeWithDevTools({
//   // options like actionSanitizer, stateSanitizer
// });

export const createStore = (preloadedState = {}) => {
  let store;
  if (environment === 'production') {
    store = reduxCreateStore(
      rootReducer,
      preloadedState,
      applyMiddleware(
        sagaMiddleware,
        epicMiddleware,
        // @ts-expect-error RTK uses unknown, Redux uses any
        examAttempts.middleware,
        examEnvironmentAuthorizationTokenApi.middleware
      )
    );
  } else {
    // store = reduxCreateStore(
    //   rootReducer,
    //   preloadedState,
    //   composeEnhancers(
    //     // @ts-expect-error RTK uses unknown, Redux uses any
    //     applyMiddleware(sagaMiddleware, epicMiddleware, examAttempts.middleware)
    //   )
    // );
    store = configureStore({
      // @ts-expect-error RTK uses unknown, Redux uses any
      reducer: rootReducer,
      // @ts-expect-error RTK uses unknown, Redux uses any
      middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
          .concat(examAttempts.middleware)
          .concat(examEnvironmentAuthorizationTokenApi.middleware)
          .concat(sagaMiddleware)
          .concat(epicMiddleware);
      },
      preloadedState
    });
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
