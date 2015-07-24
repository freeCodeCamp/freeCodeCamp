import Rx from 'rx';
import assign from 'object.assign';
import { Router } from 'react-router';
import App from './App.jsx';
import AppCat from './Cat';

import childRoutes from './routes';

const router$ = Rx.Observable.fromNodeCallback(Router.run, Router);

const routes = assign({ components: App }, childRoutes);

export default function app$(location) {
  return router$(routes, location)
    .map(([initialState, transistion]) => {
      return { initialState, transistion, AppCat };
    });
}
