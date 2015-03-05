var React = require('react');
var SidePanel = require('./SidePanel');

// structure of components
// SidePanel
// -codemirror console
// -testOutput
// CodeMirror

var Bonfire = React.createClass({displayName: "Bonfire",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(SidePanel, null)
      )
    );
  }
});

module.exports = Bonfire;
