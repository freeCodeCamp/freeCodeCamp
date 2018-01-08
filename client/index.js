import _ from 'lodash';
import Rx from 'rx';
import debug from 'debug';
import { render } from 'redux-epic';
import createHistory from 'history/createBrowserHistory';
import useLangRoutes from './utils/use-lang-routes';
import sendPageAnalytics from './utils/send-page-analytics';

import { App, createApp, provideStore } from '../common/app';
import { getLangFromPath } from '../common/app/utils/lang';
import flashReducer, { messagesFoundOnBoot } from '../common/app/Flash/redux';

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
const {
  devToolsExtension = _.noop,
  location,
  history: _history,
  document,
  ga,
  __fcc__: {
    flash = {},
    data: ssrState = {},
    csrf: {
      token: csrfToken
    } = {}
  }
} = window;
const epicOptions = {
  isDev,
  window,
  document,
  location,
  history: _history
};

const DOMContainer = document.getElementById('fcc');
const defaultState = isColdStored() ?
  getColdStorage() :
  ssrState;
const primaryLang = getLangFromPath(location.pathname);

defaultState.app.csrfToken = csrfToken;
defaultState.flash = flashReducer(
  defaultState.flash,
  messagesFoundOnBoot(flash)
);

const serviceOptions = { xhrPath: '/services', context: { _csrf: csrfToken } };

const history = useLangRoutes(createHistory, primaryLang)();
sendPageAnalytics(history, ga);

createApp({
    history,
    serviceOptions,
    defaultState,
    epics,
    epicOptions,
    enhancers: [ devToolsExtension() ]
  })
  .doOnNext(({ store }) => {
    if (module.hot && typeof module.hot.accept === 'function') {
      module.hot.accept(() => {
        // note(berks): not sure this ever runs anymore after adding
        // RHR?
        log('saving state and refreshing.');
        log('ignore react ssr warning.');
        saveToColdStorage(store.getState());
        setTimeout(() => location.reload(), hotReloadTimeout);
      });
    }
  })
  .do(() => log('rendering'))
  .flatMap(({ store }) => render(provideStore(App, store), DOMContainer))
  .subscribe(
    () => debug('react rendered'),
    err => { throw err; },
    () => debug('react closed subscription')
  );
