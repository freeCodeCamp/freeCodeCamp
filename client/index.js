import unused from './es6-shims'; // eslint-disable-line
import Rx from 'rx';
import React from 'react';
import Fetchr from 'fetchr';
import debugFactory from 'debug';
import { Router } from 'react-router';
import { createLocation, createHistory } from 'history';
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
const history = createHistory();
const appLocation = createLocation(
  location.pathname + location.search
);
// returns an observable
app$({ history, location: appLocation })
  .flatMap(
    ({ AppCat }) => {
      // instantiate the cat with service
      const appCat = AppCat(null, services);
      // hydrate the stores
      return hydrate(appCat, catState)
        .map(() => appCat);
    },
    // not using nextLocation at the moment but will be used for
    // redirects in the future
    ({ nextLocation, props }, appCat) => ({ nextLocation, props, appCat })
  )
  .flatMap(({ props, appCat }) => {
    props.history = history;
    return Render(
      appCat,
      React.createElement(Router, props),
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
