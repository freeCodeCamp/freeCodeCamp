import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { MenuItem, NavDropdown, NavItem, Nav } from 'react-bootstrap';

import navLinks from '../links.json';
import SignUp from './Sign-Up.jsx';
import NoPropsPassThrough from '../../utils/No-Props-Passthrough.jsx';
import { Link } from '../../Router';

import { onRouteCurrentChallenge } from '../../routes/Challenges/redux';
import {
  openDropdown,
  closeDropdown,
  dropdownSelector,
  createNavLinkActionCreator
} from '../redux';
import { isSignedInSelector, signInLoadingSelector } from '../../redux';

const mapStateToProps = createSelector(
  isSignedInSelector,
  dropdownSelector,
  signInLoadingSelector,
  (isSignedIn, isDropdownOpen, showLoading) => ({
    isDropdownOpen,
    isSignedIn,
    navLinks,
    showLoading
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...navLinks.reduce(
        (mdtp, { content }) => {
          const handler = `handle${capitalize(content)}Click`;
          mdtp[handler] = createNavLinkActionCreator(content);
          return mdtp;
        }),
      closeDropdown,
      openDropdown
    },
    dispatch
  );
}

const navLinkPropType = PropTypes.shape({
  content: PropTypes.string,
  link: PropTypes.string,
  isDropdown: PropTypes.bool,
  target: PropTypes.string,
  links: PropTypes.array
});

const propTypes = {
  children: PropTypes.any,
  clickOnMap: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  isDropdownOpen: PropTypes.bool,
  isInNav: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  navLinks: PropTypes.arrayOf(navLinkPropType),
  openDropdown: PropTypes.func.isRequired,
  shouldShowMapButton: PropTypes.bool,
  showLoading: PropTypes.bool
};

class NavLinks extends PureComponent {

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
          onToggle={ isDropdownOpen ? closeDropdown : openDropdown }
          open={ isDropdownOpen }
          title={ content }
          >
          { links.map(this.renderLink.bind(this, false)) }
        </NavDropdown>
      );
    }
    if (isReact) {
      return (
        <Link
          key={ content }
          onClick={ this.props[`handle${content}Click`] }
          to={ link }
          >
          <Component
            target={ target || null }
            >
            { content }
          </Component>
        </Link>
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
      shouldShowMapButton,
      clickOnMap,
      showLoading,
      isSignedIn,
      navLinks,
      isInNav = true,
      children
    } = this.props;
    return (
      <Nav id='nav-links' navbar={ true } pullRight={ true }>
        { children }
        {
          shouldShowMapButton ?
            <NoPropsPassThrough>
              <li>
                <Link
                  onClick={ clickOnMap }
                  to={ onRouteCurrentChallenge() }
                  >
                  Map
                </Link>
              </li>
            </NoPropsPassThrough> :
            null
        }
        {
          navLinks.map(
            this.renderLink.bind(this, isInNav)
          )
        }
        <SignUp
          isInDropDown={ !isInNav }
          showLoading={ showLoading }
          showSignUp={ !isSignedIn }
        />
      </Nav>
    );
  }
}

NavLinks.displayName = 'NavLinks';
NavLinks.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
