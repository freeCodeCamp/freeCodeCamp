import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Col,
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  NavbarBrand
} from 'react-bootstrap';
import noop from 'lodash/noop';

import navLinks from './links.json';
import AvatarPointsNavItem from './Avatar-Points-Nav-Item.jsx';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

const toggleButtonChild = (
  <Col xs={ 12 }>
    <span className='hamburger-text'>Menu</span>
  </Col>
);

function handleNavLinkEvent(content) {
  this.props.trackEvent({
    category: 'Nav',
    action: 'clicked',
    label: `${content} link`
  });
}

const propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  isNavDropdownOpen: PropTypes.bool,
  loadCurrentChallenge: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  picture: PropTypes.string,
  points: PropTypes.number,
  showLoading: PropTypes.bool,
  signedIn: PropTypes.bool,
  trackEvent: PropTypes.func.isRequired,
  username: PropTypes.string
};

export default class FCCNav extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleMapClickOnMap = this.handleMapClickOnMap.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    navLinks.forEach(({ content }) => {
      this[`handle${content}Click`] = handleNavLinkEvent.bind(this, content);
    });
  }

  handleMapClickOnMap(e) {
    e.preventDefault();
    this.props.trackEvent({
      category: 'Nav',
      action: 'clicked',
      label: 'map clicked while on map'
    });
  }

  handleNavClick() {
    this.props.trackEvent({
      category: 'Nav',
      action: 'clicked',
      label: 'map clicked while on map'
    });
  }

  handleLogoClick(e) {
    e.preventDefault();
    this.props.loadCurrentChallenge();
  }

  renderLink(isNavItem, { isReact, isDropdown, content, link, links, target }) {
    const Component = isNavItem ? NavItem : MenuItem;
    const {
      isNavDropdownOpen,
      openDropdown,
      closeDropdown
    } = this.props;

    if (isDropdown) {
      // adding a noop to NavDropdown to disable false warning
      // about controlled component
      return (
        <NavDropdown
          id={ `nav-${content}-dropdown` }
          key={ content }
          noCaret={ true }
          onClick={ openDropdown }
          onClose={ closeDropdown }
          onMouseEnter={ openDropdown }
          onMouseLeave={ closeDropdown }
          onToggle={ noop }
          open={ isNavDropdownOpen }
          title={ content }
          >
          { links.map(this.renderLink.bind(this, false)) }
        </NavDropdown>
      );
    }
    if (isReact) {
      return (
        <LinkContainer
          key={ content }
          onClick={ this[`handle${content}Click`] }
          to={ link }
          >
          <Component
            target={ target || null }
            >
            { content }
          </Component>
        </LinkContainer>
      );
    }
    return (
      <Component
        href={ link }
        key={ content }
        onClick={ this[`handle${content}Click`] }
        target={ target || null }
        >
        { content }
      </Component>
    );
  }

  renderSignIn(username, points, picture, showLoading) {
    if (showLoading) {
      return null;
    }
    if (username) {
      return (
        <AvatarPointsNavItem
          picture={ picture }
          points={ points }
          username={ username }
        />
      );
    } else {
      return (
        <NavItem
          href='/signup'
          key='signup'
          >
          Sign Up
        </NavItem>
      );
    }
  }

  render() {
    const {
      username,
      points,
      picture,
      showLoading
    } = this.props;

    return (
      <Navbar
        className='nav-height'
        staticTop={ true }
        >
        <Navbar.Header>
          <Navbar.Toggle children={ toggleButtonChild } />
          <NavbarBrand>
            <a
              href='/challenges/current-challenge'
              onClick={ this.handleLogoClick }
              >
              <img
                alt='learn to code javascript at freeCodeCamp logo'
                className='img-responsive nav-logo'
                src={ fCClogo }
              />
            </a>
          </NavbarBrand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            className='hamburger-dropdown'
            navbar={ true }
            pullRight={ true }
            >
            {
              navLinks.map(
                this.renderLink.bind(this, true)
              )
            }
            { this.renderSignIn(username, points, picture, showLoading) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

FCCNav.displayName = 'FCCNav';
FCCNav.propTypes = propTypes;
