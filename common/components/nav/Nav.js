var React = require('react'),
    bootStrap = require('react-bootstrap'),
    Navbar = bootStrap.Navbar,
    Nav = bootStrap.Nav,
    NavItem = bootStrap.NavItem,
    NavItemFCC = require('./NavItem');

var NavBarComp = React.createClass({displayName: "NavBarComp",

  propTypes: { signedIn: React.PropTypes.bool },

  getDefaultProps: function() {
    return { signedIn: false };
  },

  _renderBrand: function() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      React.createElement("a", {href: "/"}, 
        React.createElement("img", {
          src:  fCClogo, 
          alt: "learn to code javascript at Free Code Camp logo", 
          className: "img-responsive nav-logo"})
      )
    );
  },

  _renderSignin: function() {
    if (this.props.signedIn) {
      return (
        React.createElement(NavItem, {
          eventKey:  2 }, 
          "Show Picture"
        )
      );
    } else {
      return (
        React.createElement(NavItemFCC, {
          eventKey:  2, 
          href: "/login", 
          aClassName: "btn signup-btn signup-btn-nav"}, 
            "Sign In"
        )
      );
    }
  },

  render: function() {

    return (
      React.createElement(Navbar, {
        brand:  this._renderBrand(), 
        fixedTop:  true, 
        toggleNavKey:  0, 
        className: "nav-height"}, 
        React.createElement(Nav, {
          right:  true, 
          eventKey:  0, 
          className: "hamburger-dropdown"}, 
          React.createElement(NavItem, {
            eventKey:  1, 
            href: "/Challenges"}, 
            "Challenges"
          ), 
          React.createElement(NavItem, {
            eventKey:  1, 
            href: "Chat"}, 
            "Chat"
          ), 
          React.createElement(NavItem, {
            eventKey:  2, 
            href: "/bonfires"}, 
            "Bonfires"
          ), 
           this._renderSignin() 
        )
      )
    );
  }
});
module.exports = NavBarComp;
