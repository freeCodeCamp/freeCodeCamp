var React = require('react');
var SidePanel = require('./SidePanel');

// structure of components
// SidePanel
// -codemirror console
// -testOutput
// CodeMirror

var Bonfire = React.createClass({
  render: function() {
    return (
      <div>
        <SidePanel />
      </div>
    );
  }
});

module.exports = Bonfire;
