import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { User } from '../../redux/prop-types';

import UniversalNav from './components/universal-nav';

import './header.css';

interface HeaderProps {
  fetchState: { pending: boolean };
  user: User;
  skipButtonText: string;
}
export const Header = ({
  fetchState,
  user,
  skipButtonText
}: HeaderProps): JSX.Element => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const searchBarRef = React.useRef<HTMLDivElement>(null);

  const hideMenu = (): void => {
    setDisplayMenu(false);
    document.removeEventListener('click', handleClickOutside);
    hideLanguageMenu();
  };

  const showMenu = (): void => {
    setDisplayMenu(true);
    document.addEventListener('click', handleClickOutside);
  };

  const handleClickOutside = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const eventTarget = event.target;
    if (
      displayMenu &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(eventTarget) &&
      // since the search bar is part of the menu on small screens, clicks on
      // the search bar should not toggle the menu
      searchBarRef.current &&
      !searchBarRef.current.contains(eventTarget) &&
      // don't count clicks on searcn bar inputs reset button
      !eventTarget.closest('.ais-SearchBox-reset') &&
      // don't count clicks on disabled elements
      !eventTarget.closest('[aria-disabled="true"]')
    ) {
      hideMenu();
    }
  }

  showMenu(): void {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.handleClickOutside);
    });
  }

  hideMenu(): void {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.handleClickOutside);
    });
  }

  render(): JSX.Element {
    const { displayMenu } = this.state;
    const { fetchState, user, skipButtonText } = this.props;
    return (
      <header>
        <a href='#content-start' className='skip-to-content-button'>
          {skipButtonText}
        </a>
        <UniversalNav
          displayMenu={displayMenu}
          fetchState={fetchState}
          hideMenu={this.hideMenu}
          menuButtonRef={this.menuButtonRef}
          searchBarRef={this.searchBarRef}
          showMenu={this.showMenu}
          user={user}
        />
      </header>
    );
  }
}

Header.displayName = 'Header';

export default Header;
