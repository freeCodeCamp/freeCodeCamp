var React = require('react');

var Bonfire = React.createClass({displayName: "Bonfire",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello Bonfire")
      )
    );
  }
});

module.exports = Bonfire;
