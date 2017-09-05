import React from 'react';
import debug from 'debug';
import { renderToString } from 'react-dom/server';
import createMemoryHistory from 'history/lib/createMemoryHistory';

import { createApp, provideStore, App } from '../../common/app';
import waitForEpics from '../../common/utils/wait-for-epics.js';
import { titleSelector } from '../../common/app/redux';

const log = debug('fcc:react-server');

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
      history: createMemoryHistory({ initialEntries: [ req.originalUrl ] }),
      defaultStaet: { app: { lang } }
    })
      .filter(({ redirect, notFound }) => {
        if (redirect) {
          log('found a redirect');
          res.redirect(redirect.pathname + redirect.search);
          return false;
        }

        if (notFound) {
          log(`tried to find ${req.path} but got 404`);
          next();
          return false;
        }

        return true;
      })
      .flatMap(({ store, epic }) => {
        return waitForEpics(epic)
          .map(() => renderToString(
            provideStore(React.createElement(App), store)
          ))
          .map((markup) => ({ markup, store, epic }));
      })
      .do(({ markup, store, epic }) => {
        log('react markup rendered, data fetched');
        const state = store.getState();
        const title = titleSelector(state);
        epic.dispose();
        res.expose(state, 'data');
        res.expose(req.flash(), 'flash');
        res.render('layout-react', { markup, title });
      })
      .subscribe(() => log('html rendered and sent'), next);
  }
}
