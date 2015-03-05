var React = require('react');

var TestFire = React.createClass({

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
      <div style={{ background: '#ccc' }}>
      {[1,2,3].map(elem => elem * elem)};
        I am a dropdown!
      </div>
    );
  },

  _renderHover: function() {
    return (
      <div style={{ background: '#aca' }}>
        I'm a hover!
      </div>
    );
  },

  render: function() {
    var dropdown = this.state.dropDownIsOpen ? this._renderDropdown() : null;
    var hover = this.state.hoverIsShown ? this._renderHover() : null;

    return (
      <div
        onClick={this._handleClick}
        onMouseEnter={this._handleHover}
        onMouseLeave={this._handleHover}>
        Click me!
        {dropdown}
        {hover}
      </div>
    );
  }
});

module.exports = TestFire;
