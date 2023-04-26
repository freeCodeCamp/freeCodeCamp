/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import { User } from '../../redux/prop-types';

import UniversalNav from './components/universal-nav';

import './header.css';

interface HeaderProps {
  fetchState: { pending: boolean };
  user: User;
  skipButtonText: string;
}
export class Header extends React.Component<
  HeaderProps,
  { displayMenu: boolean }
> {
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  searchBarRef: React.RefObject<any>;
  static displayName: string;
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      displayMenu: false
    };
    this.menuButtonRef = React.createRef();
    this.searchBarRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  handleClickOutside(event: globalThis.MouseEvent): void {
    const eventTarget = event.target as HTMLElement;
    if (
      this.state.displayMenu &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(eventTarget) &&
      // since the search bar is part of the menu on small screens, clicks on
      // the search bar should not toggle the menu
      this.searchBarRef.current &&
      !this.searchBarRef.current.contains(eventTarget) &&
      // don't count clicks on searcn bar inputs reset button
      !eventTarget.closest('.ais-SearchBox-reset') &&
      // don't count clicks on disabled elements
      !eventTarget.closest('[aria-disabled="true"]')
    ) {
      this.hideMenu();
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
