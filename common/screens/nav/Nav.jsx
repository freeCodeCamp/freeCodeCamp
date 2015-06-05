var React = require('react'),
    bootStrap = require('react-bootstrap'),
    Navbar = bootStrap.Navbar,
    Nav = bootStrap.Nav,
    NavItem = bootStrap.NavItem,
    NavItemFCC = require('./NavItem.jsx');

var NavBarComp = React.createClass({

  propTypes: { signedIn: React.PropTypes.bool },

  getDefaultProps: function() {
    return { signedIn: false };
  },

  _renderBrand: function() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      <a href='/'>
        <img
          src={ fCClogo }
          alt='learn to code javascript at Free Code Camp logo'
          className='img-responsive nav-logo' />
      </a>
    );
  },

  _renderSignin: function() {
    if (this.props.signedIn) {
      return (
        <NavItem
          eventKey={ 2 }>
          Show Picture
        </NavItem>
      );
    } else {
      return (
        <NavItemFCC
          eventKey={ 2 }
          href='/login'
          aClassName='btn signup-btn signup-btn-nav'>
            Sign In
        </NavItemFCC>
      );
    }
  },

  render: function() {

    return (
      <Navbar
        brand={ this._renderBrand() }
        fixedTop={ true }
        toggleNavKey={ 0 }
        className='nav-height'>
        <Nav
          right={ true }
          eventKey={ 0 }
          className='hamburger-dropdown'>
          <NavItem
            eventKey={ 1 }
            href='/Challenges'>
            Challenges
          </NavItem>
          <NavItem
            eventKey={ 1 }
            href='Chat'>
            Chat
          </NavItem>
          <NavItem
            eventKey={ 2 }
            href='/bonfires'>
            Bonfires
          </NavItem>
          { this._renderSignin() }
        </Nav>
      </Navbar>
    );
  }
});
module.exports = NavBarComp;
