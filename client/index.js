import Rx from 'rx';
import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import debugFactory from 'debug';
import { Cat } from 'thundercats';

import { app$ } from '../common/app';

const debug = debugFactory('fcc:client');
const DOMContianer = document.getElementById('fcc');
const fcc = new Cat();

Rx.longStackSupport = !!debug.enabled;

// returns an observable
app$(history)
  .flatMap(([ initialState ]) => {
    return fcc.render(React.createElement(Router, initialState), DOMContianer);
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
