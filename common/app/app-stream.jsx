import Rx from 'rx';
import React from 'react';
import { Route, Router } from 'react-router';

// components
import { App } from './App.jsx';
import { Jobs } from './routes/Jobs';
import { NotFound } from './components/NotFound';

const router$ = Rx.Observable.fromNodeCallback(Router.run, Router);

const routes = (
  <Route handler={ App }>
    <Route
      component={ Jobs }
      path='/jobs' />
    <Route
      component={ NotFound }
      path='*' />
  </Route>
);

export default function app$(location) {
  return router$(routes, location);
}
