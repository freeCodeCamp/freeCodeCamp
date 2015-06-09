var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,

    // ## components
    Nav = require('./nav'),
    Footer = require('./footer');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});
module.exports = App;
