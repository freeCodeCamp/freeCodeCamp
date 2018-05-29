import Rx from 'rx';
import debug from 'debug';
import { render } from 'redux-epic';
import createHistory from 'history/createBrowserHistory';
import sendPageAnalytics from './utils/send-page-analytics';

import { App, createApp, provideStore } from '../common/app';

// client specific epics
import epics from './epics';

const isDev = Rx.config.longStackSupport = debug.enabled('fcc:*');
const log = debug('fcc:client');
const hotReloadTimeout = 2000;
const {
  devToolsExtension,
  location,
  history: _history,
  document,
  ga,
  __fcc__: {
    data: defaultState = {},
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

defaultState.app.csrfToken = csrfToken;

const serviceOptions = {
  context: { _csrf: csrfToken },
  xhrPath: '/services',
  xhrTimeout: 15000
};

const history = createHistory();
sendPageAnalytics(history, ga);

createApp({
    history,
    serviceOptions,
    defaultState,
    epics,
    epicOptions,
    enhancers: isDev && devToolsExtension && [ devToolsExtension() ]
  })
  .doOnNext(() => {
    if (module.hot && typeof module.hot.accept === 'function') {
      module.hot.accept(() => {
        // note(berks): not sure this ever runs anymore after adding
        // RHR?
        log('saving state and refreshing.');
        log('ignore react ssr warning.');
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
