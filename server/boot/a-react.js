import React from 'react';
import { RoutingContext } from 'react-router';
import Fetchr from 'fetchr';
import { createLocation } from 'history';
import debugFactory from 'debug';
import { app$ } from '../../common/app';
import { RenderToString } from 'thundercats-react';

const debug = debugFactory('freecc:react-server');

// add routes here as they slowly get reactified
// remove their individual controllers
const routes = [
  '/hikes',
  '/hikes/*',
  '/jobs',
  '/jobs/*'
];

export default function reactSubRouter(app) {
  var router = app.loopback.Router();

  if (process.env.NODE_ENV === 'development') {
    routes.forEach(function(route) {
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
      .filter(function({ props}) {
        if (!props) {
          debug('react tried to find %s but got 404', location.pathname);
          return next();
        }
        return !!props;
      })
      .flatMap(function({ props, AppCat }) {
        // call thundercats renderToString
        // prefetches data and sets up it up for current state
        debug('rendering to string');
        return RenderToString(
          AppCat(null, services),
          React.createElement(RoutingContext, props)
        );
      })
      // makes sure we only get one onNext and closes subscription
      .flatMap(function({ data, markup }) {
        debug('react rendered');
        const { title } = data.AppStore;
        res.expose(data, 'data');
        // now render jade file with markup injected from react
        return res.render$(
          'layout-react',
          { markup, title }
        );
      })
      .subscribe(
        function(markup) {
          debug('jade rendered');
          res.send(markup);
        },
        next
      );
  }
}
