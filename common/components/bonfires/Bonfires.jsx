var React = require('react');
var TestFire = require('./TestFire');

var Bonfire = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello Bonfire</h1>
        <TestFire />
      </div>
    );
  }
});

module.exports = Bonfire;
