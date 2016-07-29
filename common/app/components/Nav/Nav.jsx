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
import FCCNavItem from './NavItem.jsx';
import AvatarNavItem from './Avatar-Nav-Item.jsx';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

const logoElement = (
  <a href='/'>
    <img
      alt='learn to code javascript at Free Code Camp logo'
      className='img-responsive nav-logo'
      src={ fCClogo }
    />
  </a>
);

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

export default class extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleMapClickOnMap = this.handleMapClickOnMap.bind(this);
    navLinks.forEach(({ content }) => {
      this[`handle${content}Click`] = handleNavLinkEvent.bind(this, content);
    });
  }
  static displayName = 'Nav';
  static propTypes = {
    points: PropTypes.number,
    picture: PropTypes.string,
    signedIn: PropTypes.bool,
    username: PropTypes.string,
    isOnMap: PropTypes.bool,
    updateNavHeight: PropTypes.func,
    toggleMapDrawer: PropTypes.func,
    toggleMainChat: PropTypes.func,
    shouldShowSignIn: PropTypes.bool,
    trackEvent: PropTypes.func.isRequired
  };

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

  renderMapLink(isOnMap, toggleMapDrawer) {
    if (isOnMap) {
      return (
        <li role='presentation'>
          <a
            href='#'
            onClick={ this.handleMapClickOnMap }
            >
            Map
          </a>
        </li>
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

  renderPoints(username, points, shouldShowSignIn) {
    if (!username || !shouldShowSignIn) {
      return null;
    }
    return (
      <LinkContainer
        eventKey={ navLinks.length + 1 }
        key='points'
        to='/settings'
        >
        <FCCNavItem className='brownie-points-nav'>
          [ { points } ]
        </FCCNavItem>
      </LinkContainer>
    );
  }

  renderSignIn(username, picture, shouldShowSignIn) {
    if (!shouldShowSignIn) {
      return null;
    }
    if (username) {
      return <AvatarNavItem picture={ picture } />;
    } else {
      return (
        <NavItem
          eventKey={ 2 }
          href='/signin'
          key='signin'
          >
          Sign In
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
      shouldShowSignIn
    } = this.props;

    return (
      <Navbar
        className='nav-height'
        fixedTop={ true }
        >
        <NavbarBrand>{ logoElement }</NavbarBrand>
        <Navbar.Toggle children={ toggleButtonChild } />
        <Navbar.Collapse>
          <Nav
            className='hamburger-dropdown'
            navbar={ true }
            pullRight={ true }
            >
            { this.renderMapLink(isOnMap, toggleMapDrawer) }
            { this.renderChat(toggleMainChat) }
            { this.renderLinks() }
            { this.renderPoints(username, points, shouldShowSignIn) }
            { this.renderSignIn(username, picture, shouldShowSignIn) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
