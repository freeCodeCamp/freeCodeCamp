import React from 'react';
import {
  Col,
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';

import navLinks from './links.json';
import FCCNavItem from './NavItem.jsx';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
const navElements = navLinks.map((navItem, index) => {
  return (
    <NavItem
      eventKey={ index + 1 }
      href={ navItem.link }
      key={ index }>
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

const toggleButton = (
  <button className='hamburger'>
    <Col xs={ 12 }>
      <span className='hamburger-text'>Menu</span>
    </Col>
  </button>
);

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'Nav'
  static propTypes = {
    signedIn: React.PropTypes.bool
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
        toggleButton={ toggleButton }
        toggleNavKey={ 0 }>
        <Nav
          eventKey={ 0 }
          right={ true }>
          { navElements }
          { this.renderSignin() }
        </Nav>
      </Navbar>
    );
  }
}
