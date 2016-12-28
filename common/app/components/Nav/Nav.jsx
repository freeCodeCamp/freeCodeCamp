import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Col,
  Nav,
  NavbarBrand,
  Navbar,
  NavItem
} from 'react-bootstrap';

import navLinks from './links.json';
import AvatarPointsNavItem from './Avatar-Points-Nav-Item.jsx';
import NoPropsPassthrough from '../../utils/No-Props-Passthrough.jsx';

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
  points: PropTypes.number,
  picture: PropTypes.string,
  signedIn: PropTypes.bool,
  username: PropTypes.string,
  isOnMap: PropTypes.bool,
  updateNavHeight: PropTypes.func,
  toggleMapDrawer: PropTypes.func,
  toggleMainChat: PropTypes.func,
  showLoading: PropTypes.bool,
  trackEvent: PropTypes.func.isRequired,
  loadCurrentChallenge: PropTypes.func.isRequired
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

  componentDidMount() {
    const navBar = ReactDOM.findDOMNode(this);
    this.props.updateNavHeight(navBar.clientHeight);
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

  renderMapLink(isOnMap, toggleMapDrawer) {
    if (isOnMap) {
      return (
        <NoPropsPassthrough>
          <li role='presentation'>
            <a
              href='#'
              onClick={ this.handleMapClickOnMap }
              >
              Map
            </a>
          </li>
        </NoPropsPassthrough>
      );
    }
    return (
      <LinkContainer
        eventKey={ 1 }
        to='/map'
        >
        <NavItem
          onClick={ e => {
            if (!(e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              toggleMapDrawer();
            }
          }}
          target='/map'
          >
          Map
        </NavItem>
      </LinkContainer>
    );
  }

  renderChat(toggleMainChat) {
    return (
      <NavItem
        eventKey={ 2 }
        href='//gitter.im/freecodecamp/freecodecamp'
        onClick={ e => {
          if (!(e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            toggleMainChat();
          }
        }}
        target='_blank'
        >
        Chat
      </NavItem>
    );
  }

  renderLinks() {
    return navLinks.map(({ content, link, react, target }, index) => {
      if (react) {
        return (
          <LinkContainer
            eventKey={ index + 2 }
            key={ content }
            onClick={ this[`handle${content}Click`] }
            to={ link }
            >
            <NavItem
              target={ target || null }
              >
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
          onClick={ this[`handle${content}Click`] }
          target={ target || null }
          >
          { content }
        </NavItem>
      );
    });
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
          eventKey={ 2 }
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
      isOnMap,
      toggleMapDrawer,
      toggleMainChat,
      showLoading
    } = this.props;

    return (
      <Navbar
        className='nav-height'
        fixedTop={ true }
        >
        <Navbar.Header>
          <Navbar.Toggle children={ toggleButtonChild } />
          <NavbarBrand>
            <a
              href='/challenges/current-challenge'
              onClick={ this.handleLogoClick }
              >
              <img
                alt='learn to code javascript at Free Code Camp logo'
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
            { this.renderMapLink(isOnMap, toggleMapDrawer) }
            { this.renderChat(toggleMainChat) }
            { this.renderLinks() }
            { this.renderSignIn(username, points, picture, showLoading) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

FCCNav.displayName = 'Nav';
FCCNav.propTypes = propTypes;
