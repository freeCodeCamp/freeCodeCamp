import React from 'react';
import { RouterContext } from 'react-router';
import debug from 'debug';

import { renderToString } from 'redux-epic';
import provideStore from '../../common/app/provide-store';

import createApp from '../../common/app';

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
      location: req.originalUrl,
      initialState: { app: { lang } }
    })
      // if react-router does not find a route send down the chain
      .filter(({ redirect, props }) => {
        if (!props && redirect) {
          log('react router found a redirect');
          return res.redirect(redirect.pathname + redirect.search);
        }
        if (!props) {
          log(`react tried to find ${req.path} but got 404`);
          return next();
        }
        return !!props;
      })
      .flatMap(({ props, store, epic }) => {
        log('render react markup and pre-fetch data');

        return renderToString(
          provideStore(React.createElement(RouterContext, props), store),
          epic
        )
          .map(({ markup }) => ({ markup, store, epic }));
      })
      .filter(({ store, epic }) => {
        const { delayedRedirect } = store.getState().app;
        if (delayedRedirect) {
          res.redirect(delayedRedirect);
          epic.dispose();
          return false;
        }
        return true;
      })
      .flatMap(function({ markup, store, epic }) {
        log('react markup rendered, data fetched');
        const state = store.getState();
        const { title } = state.app;
        epic.dispose();
        res.expose(state, 'data');
        res.expose(req.flash(), 'flash');
        return res.render$(
          'layout-react',
          { markup, title }
        );
      })
      .doOnNext(markup => res.send(markup))
      .subscribe(
        () => log('html rendered and ready to send'),
        next
      );
  }
}
