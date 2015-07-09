import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import debugFactory from 'debug';
import { app$ } from '../../common/app';
import { Cat } from 'thundercats';

const debug = debugFactory('freecc:servereact');

// add routes here as they slowly get reactified
// remove their individual controllers
const routes = [
  '/Hikes',
  '/Hikes/:id',
  '/jobs'
];

export default function reactSubRouter(app) {
  var router = app.loopback.Router();

  routes.forEach(function(route) {
    router.get(route, serveReactApp);
  });

  app.use(router);

  function serveReactApp(req, res, next) {
    const fcc = new Cat();
    const location = new Location(req.path, req.query);

    // returns a router wrapped app
    app$(location)
      // if react-router does not find a route send down the chain
      .filter(function([ initialState ]) {
        if (!initialState) {
          debug('tried to find %s but got 404', location.pathname);
          return next();
        }
        return !!initialState;
      })
      .flatMap(function([ initialState ]) {
        // call thundercats renderToString
        // prefetches data and sets up it up for current state
        return fcc.renderToString(
          React.createElement(Router, initialState)
        );
      })
      // makes sure we only get one onNext and closes subscription
      .flatMap(function({ data, markup }) {
        debug('react rendered');
        res.expose(data, 'data');
        // now render jade file with markup injected from react
        return res.render$('layout-react', { markup: markup });
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
