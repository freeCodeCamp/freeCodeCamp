import React from 'react';
import { RoutingContext } from 'react-router';
import Fetchr from 'fetchr';
import { createLocation } from 'history';
import debugFactory from 'debug';
import { dehydrate } from 'thundercats';
import { renderToString$ } from 'thundercats-react';

import app$ from '../../common/app';

const debug = debugFactory('freecc:react-server');

// add routes here as they slowly get reactified
// remove their individual controllers
const routes = [
  '/jobs',
  '/jobs/*',
  '/hikes',
  '/hikes/*'
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
    const services = new Fetchr({ req });
    const location = createLocation(req.path);

    // returns a router wrapped app
    app$({ location })
      // if react-router does not find a route send down the chain
      .filter(function({ props }) {
        if (!props) {
          debug('react tried to find %s but got 404', location.pathname);
          return next();
        }
        return !!props;
      })
      .flatMap(function({ props, AppCat }) {
        const cat = AppCat(null, services);
        debug('render react markup and pre-fetch data');
        const store = cat.getStore('appStore');

        // primes store to observe action changes
        // cleaned up by cat.dispose further down
        store.subscribe(() => {});

        return renderToString$(
          cat,
          React.createElement(RoutingContext, props)
        )
          .flatMap(
            dehydrate(cat),
            ({ markup }, data) => ({ markup, data, cat })
          );
      })
      .flatMap(function({ data, markup, cat }) {
        debug('react markup rendered, data fetched');
        cat.dispose();
        const { title } = data.AppStore;
        res.expose(data, 'data');
        return res.render$(
          'layout-react',
          { markup, title }
        );
      })
      .subscribe(
        function(markup) {
          debug('html rendered and ready to send');
          res.send(markup);
        },
        next
      );
  }
}
