import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuButton from './MenuButton';
import MenuLinks from './MenuLinks';

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };
    this.menuButtonRef = React.createRef();

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDisplayMenu = this.toggleDisplayMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.state.displayMenu &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target)
    ) {
      this.toggleDisplayMenu();
    }
  }

  toggleDisplayMenu() {
    this.setState(({ displayMenu }) => ({ displayMenu: !displayMenu }));
  }

  render() {
    const { disableSettings } = this.props;
    const { displayMenu } = this.state;
    return (
      <>
        <MenuButton
          displayMenu={displayMenu}
          onClick={this.toggleDisplayMenu}
          ref={this.menuButtonRef}
        />
        <MenuLinks
          className={'top-nav' + (displayMenu ? ' top-nav-expanded' : '')}
          disableSettings={disableSettings}
        />
      </>
    );
  }
}

NavigationMenu.displayName = 'NavigationMenu';
NavigationMenu.propTypes = {
  disableSettings: PropTypes.bool
};

export default NavigationMenu;
