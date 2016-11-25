import './es6-shims';
import Rx from 'rx';
import React from 'react';
import debug from 'debug';
import { Router } from 'react-router';
import {
  routerMiddleware,
  routerReducer as routing,
  syncHistoryWithStore
} from 'react-router-redux';
import { render } from 'redux-epic';
import { createHistory } from 'history';
import useLangRoutes from './utils/use-lang-routes';
import sendPageAnalytics from './utils/send-page-analytics';
import flashToToast from './utils/flash-to-toast';

import createApp from '../common/app';
import provideStore from '../common/app/provide-store';
import { getLangFromPath } from '../common/app/utils/lang';

// client specific sagas
import sagas from './sagas';

import {
  isColdStored,
  getColdStorage,
  saveToColdStorage
} from './cold-reload';

const isDev = Rx.config.longStackSupport = debug.enabled('fcc:*');
const log = debug('fcc:client');
const hotReloadTimeout = 2000;
const { csrf: { token: csrfToken } = {} } = window.__fcc__;
const DOMContainer = document.getElementById('fcc');
const initialState = isColdStored() ?
  getColdStorage() :
  window.__fcc__.data;
const primaryLang = getLangFromPath(window.location.pathname);

initialState.app.csrfToken = csrfToken;
initialState.toasts = flashToToast(window.__fcc__.flash);

// make empty object so hot reload works
window.__fcc__ = {};

const serviceOptions = { xhrPath: '/services', context: { _csrf: csrfToken } };

const history = useLangRoutes(createHistory, primaryLang)();
sendPageAnalytics(history, window.ga);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const adjustUrlOnReplay = !!window.devToolsExtension;

const sagaOptions = {
  isDev,
  window,
  document: window.document,
  location: window.location,
  history: window.history
};

createApp({
    history,
    syncHistoryWithStore,
    syncOptions: { adjustUrlOnReplay },
    serviceOptions,
    initialState,
    middlewares: [ routerMiddleware(history) ],
    sagas: [...sagas ],
    sagaOptions,
    reducers: { routing },
    enhancers: [ devTools ]
  })
  .doOnNext(({ store }) => {
    if (module.hot && typeof module.hot.accept === 'function') {
      module.hot.accept(err => {
        if (err) { console.error(err); }
        log('saving state and refreshing.');
        log('ignore react ssr warning.');
        saveToColdStorage(store.getState());
        setTimeout(() => window.location.reload(), hotReloadTimeout);
      });
    }
  })
  .doOnNext(() => log('rendering'))
  .flatMap(
    ({ props, store }) => render(
      provideStore(React.createElement(Router, props), store),
      DOMContainer
    ),
    ({ store }) => store
  )
  .subscribe(
    () => debug('react rendered'),
    err => { throw err; },
    () => debug('react closed subscription')
  );
