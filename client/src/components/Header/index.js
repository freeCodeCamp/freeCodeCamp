import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import FCCSearch from 'react-freecodecamp-search';

import MenuButton from './components/MenuButton';
import MenuLinks from './components/MenuLinks';
import NavLogo from './components/NavLogo';
import { Link } from '../helpers';

import './header.css';

import {
  toggleDisplayMenu as toggleGuideMenu,
  displayMenuSelector
} from '../layouts/components/guide/redux';

const mapStateToProps = createSelector(
  displayMenuSelector,
  displayGuideMenu => ({
    displayGuideMenu
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleGuideMenu }, dispatch);

const propTypes = {
  disableMenuButtonBehavior: PropTypes.bool,
  disableSettings: PropTypes.bool,
  displayGuideMenu: PropTypes.bool,
  toggleGuideMenu: PropTypes.func.isRequired
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuButtonRef = React.createRef();
    this.state = {
      displayTopMenu: false
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.state.displayTopMenu &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target)
    ) {
      this.toggleTopMenu();
    }
  };

  toggleTopMenu = () => {
    this.setState(state => ({ displayTopMenu: !state.displayTopMenu }));
  };

  render() {
    const {
      disableMenuButtonBehavior,
      disableSettings,
      displayGuideMenu,
      toggleGuideMenu
    } = this.props;
    // On the guide, the menu button behaves differently from the rest of the
    // site. disableMenuButtonBehavior=true is used for guide pages to make sure
    // that only menu button clicks toggle between side nav and article.
    const displayMenu = disableMenuButtonBehavior
      ? displayGuideMenu
      : this.state.displayTopMenu;

    const toggleDisplayMenu = disableMenuButtonBehavior
      ? toggleGuideMenu
      : this.toggleTopMenu;
    return (
      <header>
        <nav id='top-nav'>
          <Link className='home-link' to='/'>
            <NavLogo />
          </Link>
          {disableSettings ? null : <FCCSearch />}
          <MenuButton
            disableMenuButtonBehavior={disableMenuButtonBehavior}
            displayMenu={displayMenu}
            menuButtonRef={this.menuButtonRef}
            toggleDisplayMenu={toggleDisplayMenu}
          />
          <MenuLinks
            disableMenuButtonBehavior={disableMenuButtonBehavior}
            disableSettings={disableSettings}
            displayMenu={displayMenu}
          />
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
