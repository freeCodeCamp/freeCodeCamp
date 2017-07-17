import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import noop from 'lodash/noop';
import capitalize from 'lodash/capitalize';
import { createSelector } from 'reselect';

import { LinkContainer } from 'react-router-bootstrap';
import {
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  NavbarBrand
} from 'react-bootstrap';

import navLinks from './links.json';
import SignUp from './Sign-Up.jsx';
import BinButton from './Bin-Button.jsx';
import {
  clickOnLogo,
  openDropdown,
  closeDropdown,
  createNavLinkActionCreator,

  dropdownSelector
} from './redux';
import {
  userSelector,
  signInLoadingSelector
} from '../redux';
import { nameToTypeSelector, panesSelector } from '../Panes/redux';


const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

const mapStateToProps = createSelector(
  userSelector,
  dropdownSelector,
  signInLoadingSelector,
  panesSelector,
  nameToTypeSelector,
  (
    { username, picture, points },
    isDropdownOpen,
    showLoading,
    panes,
    nameToType
  ) => {
    return {
      panes: panes.map(name => {
        return {
          content: name,
          action: nameToType[name]
        };
      }, {}),
      isDropdownOpen,
      isSignedIn: !!username,
      picture,
      points,
      showLoading,
      username
    };
  }
);

function mapDispatchToProps(dispatch) {
  const dispatchers = bindActionCreators(navLinks.reduce(
    (mdtp, { content }) => {
      const handler = `handle${capitalize(content)}Click`;
      mdtp[handler] = createNavLinkActionCreator(content);
      return mdtp;
    },
    {
      clickOnLogo: e => {
        e.preventDefault();
        return clickOnLogo();
      },
      closeDropdown: () => closeDropdown(),
      openDropdown: () => openDropdown()
    }
  ), dispatch);
  dispatchers.dispatch = dispatch;
  return () => dispatchers;
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const panes = stateProps.panes.map(pane => {
    return {
      ...pane,
      actionCreator: () => dispatchProps.dispatch({ type: pane.action })
    };
  });
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    panes
  };
}

const propTypes = navLinks.reduce(
  (pt, { content }) => {
    const handler = `handle${capitalize(content)}Click`;
    pt[handler] = PropTypes.func.isRequired;
    return pt;
  },
  {
    panes: PropTypes.array,
    clickOnLogo: PropTypes.func.isRequired,
    closeDropdown: PropTypes.func.isRequired,
    isDropdownOpen: PropTypes.bool,
    openDropdown: PropTypes.func.isRequired,
    picture: PropTypes.string,
    points: PropTypes.number,
    showLoading: PropTypes.bool,
    signedIn: PropTypes.bool,
    username: PropTypes.string
  }
);

export class FCCNav extends React.Component {
  renderLink(isNavItem, { isReact, isDropdown, content, link, links, target }) {
    const Component = isNavItem ? NavItem : MenuItem;
    const {
      isDropdownOpen,
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
          open={ isDropdownOpen }
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
          onClick={ this.props[`handle${content}Click`] }
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
        onClick={ this.props[`handle${content}Click`] }
        target={ target || null }
        >
        { content }
      </Component>
    );
  }

  render() {
    const {
      panes,
      clickOnLogo,
      username,
      points,
      picture,
      showLoading
    } = this.props;

    return (
      <Navbar
        className='nav-height'
        id='navbar'
        staticTop={ true }
        >
        <Navbar.Header>
          <Navbar.Toggle children={ 'Menu' } />
          <NavbarBrand>
            <a
              href='/challenges/current-challenge'
              onClick={ clickOnLogo }
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
            navbar={ true }
            pullRight={ true }
            >
            {
              panes.map(({ content, actionCreator }) => (
                <BinButton
                  content={ content }
                  handleClick={ actionCreator }
                  key={ content }
                />
              ))
            }
            {
              navLinks.map(
                this.renderLink.bind(this, true)
              )
            }
            <SignUp
              picture={ picture }
              points={ points }
              showLoading={ showLoading }
              username={ username }
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

FCCNav.displayName = 'FCCNav';
FCCNav.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FCCNav);
