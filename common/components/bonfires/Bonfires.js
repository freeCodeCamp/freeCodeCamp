var React = require('react');
var TestFire = require('./TestFire');

var Bonfire = React.createClass({displayName: "Bonfire",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello Bonfire"), 
        React.createElement(TestFire, null)
      )
    );
  }
});

module.exports = Bonfire;
