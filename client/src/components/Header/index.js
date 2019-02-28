import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import Media from 'react-media';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';
import { Link } from '../helpers';

import './header.css';

import {
  toggleDisplaySideNav,
  toggleDisplayMenu,
  displayMenuSelector
} from '../layouts/components/guide/redux';

const mapStateToProps = createSelector(
  displayMenuSelector,
  displayMenu => ({
    displayMenu
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleDisplaySideNav, toggleDisplayMenu }, dispatch);

const propTypes = {
  disableSettings: PropTypes.bool,
  displayMenu: PropTypes.bool,
  onGuide: PropTypes.bool,
  toggleDisplayMenu: PropTypes.func,
  toggleDisplaySideNav: PropTypes.func
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuButtonRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  toggleDisplayMenuLogic = () => {
    if (this.props.onGuide) {
      this.props.toggleDisplaySideNav();
    } else {
      this.props.toggleDisplayMenu();
    }
  };

  handleClickOutside = event => {
    if (
      this.props.displayMenu &&
      !this.menuButtonRef.current.contains(event.target) &&
      !this.props.onGuide
    ) {
      this.toggleDisplayMenuLogic();
    }
  };

  handleMediaChange = matches => {
    if (!matches && this.props.displayMenu) {
      this.toggleDisplayMenuLogic();
    }
  };

  renderClassNames = (displayMenu, onGuide) => {
    if (displayMenu && onGuide) {
      return 'opened onGuide';
    } else if (displayMenu) {
      return 'opened';
    } else if (onGuide) {
      return 'onGuide';
    }
    return '';
  };

  render() {
    const {
      disableSettings,
      onGuide,
      displayMenu,
      toggleDisplayMenu
    } = this.props;
    return (
      <header className={this.renderClassNames(displayMenu, onGuide)}>
        <nav id='top-nav'>
          <Link className='home-link' to='/'>
            <NavLogo />
          </Link>
          {disableSettings ? null : <FCCSearch />}
          <Media query='(max-width: 991px)'>
            {matches =>
              matches && onGuide && displayMenu ? null : (
                <ul id='top-right-nav'>
                  <li onClick={toggleDisplayMenu}>
                    <Link to='/learn'>Learn</Link>
                  </li>
                  <li onClick={toggleDisplayMenu}>
                    <Link external={true} to='/forum'>
                      Forum
                    </Link>
                  </li>
                  <li onClick={toggleDisplayMenu}>
                    <Link external={true} to='/news'>
                      News
                    </Link>
                  </li>
                  <li className='user-state-link' onClick={toggleDisplayMenu}>
                    <UserState disableSettings={disableSettings} />
                  </li>
                </ul>
              )
            }
          </Media>
          <span
            className='menu-button'
            onClick={this.toggleDisplayMenuLogic}
            ref={this.menuButtonRef}
          >
            Menu
          </span>
          {onGuide ? (
            <Media
              onChange={this.handleMediaChange}
              query='(max-width: 991px)'
            />
          ) : (
            <Media
              onChange={this.handleMediaChange}
              query='(max-width: 734px)'
            />
          )}
        </nav>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
