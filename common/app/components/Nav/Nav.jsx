import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import navLinks from './links.json';
import FCCNavItem from './NavItem.jsx';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
const navElements = navLinks.map((navItem, index) => {
  return (
    <NavItem
      key={ index }
      eventKey={ index + 1 }
      href={ navItem.link }>
      { navItem.content }
    </NavItem>
  );
});

const logoElement = (
  <a href='/'>
    <img
      alt='learn to code javascript at Free Code Camp logo'
      className='img-responsive nav-logo'
      src={ fCClogo } />
  </a>
);

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'Nav'
  static propTypes = {
    signedIn: React.PropTypes.bool
  }

  renderBrand() {
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
        brand={ logoElement }
        className='nav-height'
        fixedTop={ true }
        toggleNavKey={ 0 }>
        <Nav
          className='hamburger-dropdown'
          eventKey={ 0 }
          right={ true }>
          { navElements }
          { this.renderSignin() }
        </Nav>
      </Navbar>
    );
  }
}
