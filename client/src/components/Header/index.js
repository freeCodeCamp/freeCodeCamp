import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Media from 'react-media';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    });
  }

  render() {
    const { disableSettings } = this.props;
    return (
      <header className={this.state.isMenuOpened ? 'opened' : null}>
        <nav id='top-nav'>

          <Media query='(min-width: 735px)'>
            <Fragment>
              <Link className='home-link' to='/'>
                <NavLogo />
              </Link>
              {disableSettings
                ? null
                : <div className="header-search">
                  <FCCSearch />
                </div>
              }
            </Fragment>
          </Media>

          <ul id='top-right-nav'>
            <li>
              <Link to='/learn'>Curriculum</Link>
            </li>
            <li>
              <a
              href='/forum'
              rel='noopener noreferrer'
              target='_blank'
              >
                Forum
              </a>
            </li>
            <li>
              <a
              href='/news'
              rel='noopener noreferrer'
              target='_blank'
              >
                News
              </a>
            </li>
            <li className='user-state-link'>
              <UserState disableSettings={disableSettings} />
            </li>
          </ul>
        </nav>

        <Media query='(max-width: 734px)'>
          <div className="mobile-menu">
            <Link className='home-link' to='/'>
              <NavLogo />
            </Link>
            {disableSettings
              ? null
              : <div className="header-search">
                  <FCCSearch />
                </div>
            }
            <span className="menu-button" onClick={this.toggleClass}>
              Menu
            </span>
          </div>
        </Media>

      </header>
    );
  }
}

Header.propTypes = {
  disableSettings: PropTypes.bool
};
export default Header;
