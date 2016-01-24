import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Col,
  Nav,
  NavbarBrand,
  Navbar,
  NavItem
} from 'react-bootstrap';

import navLinks from './links.json';
import FCCNavItem from './NavItem.jsx';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

const logoElement = (
  <a href='/'>
    <img
      alt='learn to code javascript at Free Code Camp logo'
      className='img-responsive nav-logo'
      src={ fCClogo } />
  </a>
);

const toggleButtonChild = (
    <Col xs={ 12 }>
      <span className='hamburger-text'>Menu</span>
    </Col>
);

export default React.createClass({
  displayName: 'Nav',

  propTypes: {
    points: PropTypes.number,
    picture: PropTypes.string,
    signedIn: PropTypes.bool,
    username: PropTypes.string
  },

  renderLinks() {
    return navLinks.map(({ content, link, react, target }, index) => {
      if (react) {
        return (
          <LinkContainer
            eventKey={ index + 1 }
            key={ content }
            to={ link }>
            <NavItem
              target={ target || null }>
              { content }
            </NavItem>
          </LinkContainer>
        );
      }
      return (
        <NavItem
          eventKey={ index + 1 }
          href={ link }
          key={ content }
          target={ target || null }>
          { content }
        </NavItem>
      );
    });
  },

  renderPoints(username, points) {
    if (!username) {
      return null;
    }
    return (
      <FCCNavItem
        className='brownie-points-nav'
        href={ '/' + username }>
        [ { points } ]
      </FCCNavItem>
    );
  },

  renderSignin(username, picture) {
    if (username) {
      return (
        <li
          className='hidden-xs hidden-sm avatar'
          eventKey={ 2 }>
          <a href={ '/' + username }>
            <img
              className='profile-picture float-right'
              src={ picture } />
          </a>
        </li>
      );
    } else {
      return (
        <NavItem
          eventKey={ 2 }
          href='/login'>
          Sign In
        </NavItem>
      );
    }
  },

  render() {
    const { username, points, picture } = this.props;

    return (
      <Navbar
        className='nav-height'
        fixedTop={ true }>
        <NavbarBrand>{ logoElement }</NavbarBrand>
        <Navbar.Toggle children={ toggleButtonChild } />
        <Navbar.Collapse eventKey={ 0 }>
          <Nav
            className='hamburger-dropdown'
            navbar={ true }
            pullRight={ true }>
            { this.renderLinks() }
            { this.renderPoints(username, points) }
            { this.renderSignin(username, picture) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});
