import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Media from 'react-media';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';
import { Link } from '../helpers';

import './header.css';

import { toggleDisplaySideNav } from '../layouts/redux';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleDisplaySideNav }, dispatch);

const propTypes = {
  disableSettings: PropTypes.bool,
  showMobileSidenav: PropTypes.bool,
  toggleDisplaySideNav: PropTypes.func
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false
    };
    this.menuButtonRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  toggleClass = () => {
    if (this.props.showMobileSidenav) {
      this.props.toggleDisplaySideNav();
    }
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    });
  };

  handleClickOutside = event => {
    if (
      this.state.isMenuOpened &&
      !this.menuButtonRef.current.contains(event.target) &&
      !this.props.showMobileSidenav
    ) {
      this.toggleClass();
    }
  };

  handleMediaChange = matches => {
    if (!matches && this.state.isMenuOpened) {
      this.toggleClass();
    }
  };

  render() {
    const { disableSettings, showMobileSidenav } = this.props;
    if (this.state.isMenuOpened && showMobileSidenav) {
      return (
        <header className={this.state.isMenuOpened ? 'opened' : null}>
          <nav id='top-nav'>
            <Link className='home-link' to='/'>
              <NavLogo />
            </Link>
            {disableSettings ? null : <FCCSearch />}

            <span
              className='menu-button'
              onClick={this.toggleClass}
              ref={this.menuButtonRef}
            >
              Menu
            </span>
          </nav>
        </header>
      );
    }
    return (
      <header className={this.state.isMenuOpened ? 'opened' : null}>
        <nav id='top-nav'>
          <Link className='home-link' to='/'>
            <NavLogo />
          </Link>
          {disableSettings ? null : <FCCSearch />}
          <ul id='top-right-nav'>
            <li>
              <Link to='/learn'>Learn</Link>
            </li>
            <li>
              <Link external={true} to='/forum'>
                Forum
              </Link>
            </li>
            <li>
              <Link external={true} to='/news'>
                News
              </Link>
            </li>
            <li className='user-state-link'>
              <UserState disableSettings={disableSettings} />
            </li>
          </ul>
          <span
            className='menu-button'
            onClick={this.toggleClass}
            ref={this.menuButtonRef}
          >
            Menu
          </span>
          <Media onChange={this.handleMediaChange} query='(max-width: 734px)' />
        </nav>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(Header);
