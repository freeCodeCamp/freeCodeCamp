/* eslint no-unused-vars: 0 */
var React = require('react'),

    // react router
    Router = require('react-router'),
    Route = Router.Route,
    NotFound = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,

    // # Components
    App = require('./App'),
    Bonfire = require('./bonfire'),
    Nav = require('./nav');

var routes = (
  <Route
    name='app'
    path='/'
    handler={ App }>

    <DefaultRoute
      name='bonfire'
      handler={ Bonfire } />
  </Route>
);

module.exports = function(Location) {
  return Router.create({
    routes: routes,
    location: Location
  });
};
