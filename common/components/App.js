var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,

    // ## components
    Nav = require('./nav'),
    Footer = require('./footer');

var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Nav, null), 
        React.createElement(RouteHandler, null), 
        React.createElement(Footer, null)
      )
    );
  }
});
module.exports = App;
