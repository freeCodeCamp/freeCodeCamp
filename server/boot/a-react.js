import React from 'react';
import { RoutingContext } from 'react-router';
import { createLocation } from 'history';
import debug from 'debug';

import renderToString from '../../common/app/utils/render-to-string';
import provideStore from '../../common/app/provide-store';

import app$ from '../../common/app';

const log = debug('fcc:react-server');

// add routes here as they slowly get reactified
// remove their individual controllers
const routes = [
  '/jobs',
  '/jobs/*',
  '/videos',
  '/videos/*'
];

const devRoutes = [];

export default function reactSubRouter(app) {
  var router = app.loopback.Router();

  // These routes are in production
  routes.forEach((route) => {
    router.get(route, serveReactApp);
  });

  if (process.env.NODE_ENV === 'development') {
    devRoutes.forEach(function(route) {
      router.get(route, serveReactApp);
    });
  }

  app.use(router);

  function serveReactApp(req, res, next) {
    const serviceOptions = { req };
    const location = createLocation(req.path);

    // returns a router wrapped app
    app$({
      location,
      serviceOptions
    })
      // if react-router does not find a route send down the chain
      .filter(({ props }) => {
        if (!props) {
          log(`react tried to find ${location.pathname} but got 404`);
          return next();
        }
        return !!props;
      })
      .flatMap(({ props, store }) => {
        log('render react markup and pre-fetch data');

        return renderToString(
          provideStore(React.createElement(RoutingContext, props), store)
        )
          .map(({ markup }) => ({ markup, store }));
      })
      .flatMap(function({ markup, store }) {
        log('react markup rendered, data fetched');
        const state = store.getState();
        const { title } = state.app.title;
        res.expose(state, 'data');
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
