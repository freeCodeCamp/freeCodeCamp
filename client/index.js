import './es6-shims';
import Rx from 'rx';
import debug from 'debug';
import { render } from 'redux-epic';
import createHistory from 'history/createBrowserHistory';
import useLangRoutes from './utils/use-lang-routes';
import sendPageAnalytics from './utils/send-page-analytics';
import flashToToast from './utils/flash-to-toast';

import { App, createApp, provideStore } from '../common/app';
import { getLangFromPath } from '../common/app/utils/lang';

// client specific epics
import epics from './epics';

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
const defaultState = isColdStored() ?
  getColdStorage() :
  window.__fcc__.data;
const primaryLang = getLangFromPath(window.location.pathname);

defaultState.app.csrfToken = csrfToken;
defaultState.toasts = flashToToast(window.__fcc__.flash);

// make empty object so hot reload works
window.__fcc__ = {};

const serviceOptions = { xhrPath: '/services', context: { _csrf: csrfToken } };

const history = useLangRoutes(createHistory, primaryLang)();
sendPageAnalytics(history, window.ga);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const epicOptions = {
  isDev,
  window,
  document: window.document,
  location: window.location,
  history: window.history
};

createApp({
    history,
    serviceOptions,
    defaultState,
    epics,
    epicOptions,
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
  .flatMap(({ store }) => render(provideStore(App, store), DOMContainer))
  .subscribe(
    () => debug('react rendered'),
    err => { throw err; },
    () => debug('react closed subscription')
  );
