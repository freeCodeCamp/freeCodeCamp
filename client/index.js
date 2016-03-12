import './es6-shims';
import Rx from 'rx';
import React from 'react';
import debug from 'debug';
import { Router } from 'react-router';
import { routeReducer as routing, syncHistory } from 'react-router-redux';
import { createHistory } from 'history';

import app$ from '../common/app';
import provideStore from '../common/app/provide-store';

// client specific sagas
import sagas from './sagas';

// render to observable
import render from '../common/app/utils/render';

const log = debug('fcc:client');
const DOMContainer = document.getElementById('fcc');
const initialState = window.__fcc__.data;

const serviceOptions = { xhrPath: '/services' };

Rx.config.longStackSupport = !!debug.enabled;
const history = createHistory();
const appLocation = history.createLocation(
  location.pathname + location.search
);
const routingMiddleware = syncHistory(history);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const shouldRouterListenForReplays = !!window.devToolsExtension;

const clientSagaOptions = { doc: document };

// returns an observable
app$({
  location: appLocation,
  history,
  serviceOptions,
  initialState,
  middlewares: [
    routingMiddleware,
    ...sagas.map(saga => saga(clientSagaOptions))
  ],
  reducers: { routing },
  enhancers: [ devTools ]
})
  .flatMap(({ props, store }) => {

    // because of weirdness in react-routers match function
    // we replace the wrapped returned in props with the first one
    // we passed in. This might be fixed in react-router 2.0
    props.history = history;

    if (shouldRouterListenForReplays && store) {
      log('routing middleware listening for replays');
      routingMiddleware.listenForReplays(store);
    }

    log('rendering');
    return render(
      provideStore(React.createElement(Router, props), store),
      DOMContainer
    );
  })
  .subscribe(
    () => debug('react rendered'),
    err => { throw err; },
    () => debug('react closed subscription')
  );
