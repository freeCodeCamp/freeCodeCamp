var React = require('react');

var TestFire = React.createClass({displayName: "TestFire",
  getInitialState : function() {
    return {
      dropDownIsOpen : false,
      hoverIsShown: false
    };
  },
  handleClick : function() {
    this.setState({
      dropDownIsOpen : !this.state.dropDownIsOpen
    });
  },
  handleHover: function() {
    this.setState({
      hoverIsShown: !this.state.hoverIsShown
    });
  },
  renderDropdown: function () {
    return (
      React.createElement("div", {style: { background: "#ccc"}}, 
      [1,2,3].map(function(elem)  {return elem * elem;}), ";" + ' ' +
        "I am a dropdown!"
      )
    );
  },
  renderHover: function() {
    return (
      React.createElement("div", {style: { background: "#aca"}}, 
        "I'm a hover!"
      )
    );
  },
  render : function() {
    var dropdown = this.state.dropDownIsOpen ? this.renderDropdown() : null;
    var hover = this.state.hoverIsShown ? this.renderHover() : null;

    return (
      React.createElement("div", {onClick: this.handleClick, onMouseEnter: this.handleHover, onMouseLeave: this.handleHover}, 
        "Click me!", 
                        dropdown, 
                        hover
      )

    );
  }
});

module.exports = TestFire;
