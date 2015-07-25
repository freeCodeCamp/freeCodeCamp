import React, { PropTypes } from 'react';
import {
  Col,
  CollapsibleNav,
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
    points: PropTypes.number,
    picture: PropTypes.string,
    signedIn: PropTypes.bool,
    username: PropTypes.string
  }

  renderPoints(username, points) {
    if (!username) {
      return null;
    }
    return (
      <NavItem
        href={ '/' + username }>
        [ { points } ]
      </NavItem>
    );
  }

  renderSignin(username, picture) {
    if (username) {
      return (
        <div
          className='hidden-xs hidden-sm'
          eventKey={ 2 }>
          <a href={ '/' + username }>
            <img src={ picture } />
          </a>
        </div>
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
    const { username, points, picture } = this.props;
    return (
      <Navbar
        brand={ logoElement }
        className='nav-height'
        fixedTop={ true }
        toggleButton={ toggleButton }
        toggleNavKey={ 0 }>
        <CollapsibleNav eventKey={ 0 }>
          <Nav
            className='hamburger-dropdown'
            navbar={ true }
            right={ true }>
            { navElements }
            { this.renderPoints(username, points)}
            { this.renderSignin(username, picture) }
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}
