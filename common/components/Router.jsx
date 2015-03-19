var React = require('react'),

    // react router
    Router = require('react-router'),
    Route = Router.Route,
    // NotFound = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,

    // # Components
    App = require('./App.jsx'),
    Bonfires = require('./bonfires');

var routes = (
  <Route
    name='app'
    path='/'
    handler={ App }>

    <Route
      name='bonfires'
      path='/bonfires/?:bonfireName?'
      handler={ Bonfires } />

    <DefaultRoute
      handler={ Bonfires } />
  </Route>
);

module.exports = function(Location) {
  return Router.create({
    routes: routes,
    location: Location
  });
};
