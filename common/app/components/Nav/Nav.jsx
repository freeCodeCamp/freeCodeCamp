import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import FCCNavItem from './NavItem.jsx';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'Nav'
  static propTypes = {
    signedIn: React.PropTypes.bool
  }

  renderBrand() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      <a href='/'>
        <img
          alt='learn to code javascript at Free Code Camp logo'
          className='img-responsive nav-logo'
          src={ fCClogo } />
      </a>
    );
  }

  renderSignin() {
    if (this.props.signedIn) {
      return (
        <NavItem
          eventKey={ 2 }>
          Show Picture
        </NavItem>
      );
    } else {
      return (
        <FCCNavItem
          className='btn signup-btn signup-btn-nav'
          eventKey={ 2 }
          href='/login'>
          Sign In
        </FCCNavItem>
      );
    }
  }

  render() {
    return (
      <Navbar
        brand={ this.renderBrand() }
        className='nav-height'
        fixedTop={ true }
        toggleNavKey={ 0 }>
        <Nav
          className='hamburger-dropdown'
          eventKey={ 0 }
          right={ true }>
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
          { this.renderSignin() }
        </Nav>
      </Navbar>
    );
  }
}
