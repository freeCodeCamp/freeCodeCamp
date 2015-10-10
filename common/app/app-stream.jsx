import Rx from 'rx';
import { match } from 'react-router';
import App from './App.jsx';
import AppCat from './Cat';

import childRoutes from './routes';

const route$ = Rx.Observable.fromNodeCallback(match);

const routes = Object.assign({ components: App }, childRoutes);

export default function app$({ location, history }) {
  return route$({ routes, location, history })
    .map(([nextLocation, props]) => {
      return { nextLocation, props, AppCat };
    });
}
