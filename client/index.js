import Rx from 'rx';
import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import debugFactory from 'debug';
import { Render } from 'thundercats-react';

import { app$ } from '../common/app';

const debug = debugFactory('fcc:client');
const DOMContianer = document.getElementById('fcc');

Rx.longStackSupport = !!debug.enabled;

// returns an observable
app$(history)
  .flatMap(({ initialState, AppCat }) => {
    return Render(
      AppCat(),
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
