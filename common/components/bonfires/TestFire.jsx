var React = require('react');

var TestFire = React.createClass({
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
      <div style={{ background: "#ccc" }}>
      {[1,2,3].map(elem => elem * elem)};
        I am a dropdown!
      </div>
    );
  },
  renderHover: function() {
    return (
      <div style={{ background: "#aca"}}>
        I'm a hover!
      </div>
    );
  },
  render : function() {
    var dropdown = this.state.dropDownIsOpen ? this.renderDropdown() : null;
    var hover = this.state.hoverIsShown ? this.renderHover() : null;

    return (
      <div onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        Click me!
                        {dropdown}
                        {hover}
      </div>

    );
  }
});

module.exports = TestFire;
