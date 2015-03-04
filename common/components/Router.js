/* eslint no-unused-vars: 0 */
var React = require('react'),

    // react router
    Router = require('react-router'),
    Route = Router.Route,
    NotFound = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,

    // # Components
    App = require('./App'),
    Bonfires = require('./bonfires');

var routes = (
  React.createElement(Route, {
    name: "app", 
    path: "/", 
    handler:  App }, 

    React.createElement(Route, {
      name: "bonfires", 
      path: "/bonfires/?:bonfires?", 
      handler:  Bonfires }), 

    React.createElement(DefaultRoute, {
      handler:  Bonfires })
  )
);

module.exports = function(Location) {
  return Router.create({
    routes: routes,
    location: Location
  });
};
