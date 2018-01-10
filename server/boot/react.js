import debug from 'debug';
import { renderToString } from 'react-dom/server';
import createMemoryHistory from 'history/createMemoryHistory';
import { NOT_FOUND } from 'redux-first-router';
import devtoolsEnhancer from 'remote-redux-devtools';

import {
  errorThrowerMiddleware
} from '../utils/react.js';
import { createApp, provideStore, App } from '../../common/app';
import waitForEpics from '../../common/utils/wait-for-epics.js';
import { titleSelector } from '../../common/app/redux';

const log = debug('fcc:react-server');
const isDev = process.env.NODE_ENV !== 'production';

// add routes here as they slowly get reactified
// remove their individual controllers
const routes = [
  '/challenges',
  '/challenges/*',
  '/map',
  '/settings',
  '/settings/*'
];

const devRoutes = [];

const middlewares = isDev ? [errorThrowerMiddleware] : [];
export default function reactSubRouter(app) {
  var router = app.loopback.Router();

  router.get('/videos', (req, res) => res.redirect('/map'));
  router.get(
    '/videos/:dashedName',
    (req, res) => res.redirect(`/challenges/${req.params.dashedName}`)
  );

  // These routes are in production
  routes.forEach((route) => {
    router.get(route, serveReactApp);
  });

  if (process.env.NODE_ENV === 'development') {
    devRoutes.forEach(function(route) {
      router.get(route, serveReactApp);
    });
  }

  app.use('/:lang', router);

  function serveReactApp(req, res, next) {
    const { lang } = req;
    const serviceOptions = { req };
    createApp({
      serviceOptions,
      middlewares,
      enhancers: [
        devtoolsEnhancer({ name: 'server' })
      ],
      history: createMemoryHistory({ initialEntries: [ req.originalUrl ] }),
      defaultStaet: { app: { lang } }
    })
      .filter(({
        location: {
          type,
          kind,
          pathname
        } = {}
      }) => {
        if (kind === 'redirect') {
          log('react found a redirect');
          res.redirect(pathname);
          return false;
        }

        if (type === NOT_FOUND) {
          log(`react tried to find ${req.path} but got 404`);
          next();
          return false;
        }

        return true;
      })
      .flatMap(({ store, epic }) => {
        return waitForEpics(epic)
          .map(() => renderToString(
            provideStore(App, store)
          ))
          .map((markup) => ({ markup, store, epic }));
      })
      .do(({ markup, store, epic }) => {
        log('react markup rendered, data fetched');
        const state = store.getState();
        const title = titleSelector(state);
        epic.dispose();
        res.expose(state, 'data', { isJSON: true });
        // note(berks): we render without express-flash dumping our messages
        // the app will query for these on load
        res.renderWithoutFlash('layout-react', { markup, title });
      })
      .subscribe(() => log('html rendered and sent'), next);
  }
}
