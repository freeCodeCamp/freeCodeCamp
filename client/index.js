import unused from './es6-shims'; // eslint-disable-line
import Rx from 'rx';
import React from 'react';
import Fetchr from 'fetchr';
import debugFactory from 'debug';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { hydrate } from 'thundercats';
import { Render } from 'thundercats-react';

import { app$ } from '../common/app';

const debug = debugFactory('fcc:client');
const DOMContianer = document.getElementById('fcc');
const catState = window.__fcc__.data || {};
const services = new Fetchr({
  xhrPath: '/services'
});

Rx.config.longStackSupport = !!debug.enabled;

// returns an observable
app$(history)
  .flatMap(
    ({ AppCat }) => {
      const appCat = AppCat(null, services);
      return hydrate(appCat, catState)
        .map(() => appCat);
    },
    ({ initialState }, appCat) => ({ initialState, appCat })
  )
  .flatMap(({ initialState, appCat }) => {
    return Render(
      appCat,
      React.createElement(Router, initialState),
      DOMContianer
    );
  })
  .subscribe(
    () => {
      debug('react rendered');
    },
    err => {
      debug('an error has occured', err.stack);
    },
    () => {
      debug('react closed subscription');
    }
  );
