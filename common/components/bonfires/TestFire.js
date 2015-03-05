var React = require('react');

var TestFire = React.createClass({displayName: "TestFire",

  getInitialState: function() {
    return {
      dropDownIsOpen : false,
      hoverIsShown: false
    };
  },

  _handleClick: function() {
    this.setState({
      dropDownIsOpen : !this.state.dropDownIsOpen
    });
  },

  _handleHover: function() {
    this.setState({
      hoverIsShown: !this.state.hoverIsShown
    });
  },

  _renderDropdown: function () {
    return (
      React.createElement("div", {style: { background: '#ccc'}}, 
      [1,2,3].map(function(elem)  {return elem * elem;}), ";" + ' ' +
        "I am a dropdown!"
      )
    );
  },

  _renderHover: function() {
    return (
      React.createElement("div", {style: { background: '#aca'}}, 
        "I'm a hover!"
      )
    );
  },

  render: function() {
    var dropdown = this.state.dropDownIsOpen ? this._renderDropdown() : null;
    var hover = this.state.hoverIsShown ? this._renderHover() : null;

    return (
      React.createElement("div", {
        onClick: this._handleClick, 
        onMouseEnter: this._handleHover, 
        onMouseLeave: this._handleHover}, 
        "Click me!", 
        dropdown, 
        hover
      )
    );
  }
});

module.exports = TestFire;
