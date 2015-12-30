import unused from './es6-shims'; // eslint-disable-line
import Rx from 'rx';
import React from 'react';
import Fetchr from 'fetchr';
import debugFactory from 'debug';
import { Router } from 'react-router';
import { createLocation, createHistory } from 'history';
import { hydrate } from 'thundercats';
import { render$ } from 'thundercats-react';

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

function location$(history) {
  return Rx.Observable.create(function(observer) {
    const dispose = history.listen(function(location) {
      observer.onNext(location);
    });

    return Rx.Disposable.create(() => {
      dispose();
    });
  });
}

// returns an observable
app$({ history, location: appLocation })
  .flatMap(
    ({ AppCat }) => {
      // instantiate the cat with service
      const appCat = AppCat(null, services, history);
      // hydrate the stores
      return hydrate(appCat, catState).map(() => appCat);
    },
    // not using nextLocation at the moment but will be used for
    // redirects in the future
    ({ nextLocation, props }, appCat) => ({ nextLocation, props, appCat })
  )
  .doOnNext(({ appCat }) => {
    const appActions = appCat.getActions('appActions');
    const appStore = appCat.getStore('appStore');

    const route$ = location$(history)
      .pluck('pathname')
      .distinctUntilChanged();

    appStore
      .pluck('route')
      .filter(route => !!route)
      .withLatestFrom(
        route$,
        (nextRoute, currentRoute) => ({ currentRoute, nextRoute })
      )
      // only continue when route change requested
      .filter(({ currentRoute, nextRoute }) => currentRoute !== nextRoute)
      .doOnNext(({ nextRoute }) => {
        debug('route change', nextRoute);
        history.pushState(history.state, nextRoute);
      })
      .subscribeOnError(err => console.error(err));

    appActions.goBack.subscribe(function() {
      history.goBack();
    });

    appActions
      .updateRoute
      .pluck('route')
      .doOnNext(route => {
        debug('update route', route);
        history.pushState(history.state, route);
      })
      .subscribeOnError(err => console.error(err));
  })
  .flatMap(({ props, appCat }) => {
    props.history = history;
    return render$(
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
      throw err;
    },
    () => {
      debug('react closed subscription');
    }
  );
