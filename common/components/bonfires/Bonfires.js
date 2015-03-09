var React = require('react'),
    SidePanel = require('./SidePanel'),
    Editor = require('../editor'),
    $__0=
      
      
      
      require('react-bootstrap'),Grid=$__0.Grid,Row=$__0.Row,Col=$__0.Col;

var Bonfire = React.createClass({displayName: "Bonfire",

  render: function() {

    return (
      React.createElement(Grid, null, 
        React.createElement(Row, null, 
          React.createElement(SidePanel, null), 
          React.createElement(Col, {
            xs:  12, 
            md:  8 }, 
            React.createElement(Editor, {value: "This is code console.log(x)"})
          )
        )
      )
    );
  }
});

module.exports = Bonfire;
