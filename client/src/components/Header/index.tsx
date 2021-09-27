/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import Helmet from 'react-helmet';

import UniversalNav from './components/universal-nav';

import './header.css';

export interface HeaderProps {
  fetchState: { pending: boolean };
  user: Record<string, any>;
}
export class Header extends React.Component<
  HeaderProps,
  { displayMenu: boolean }
> {
  menuButtonRef: React.RefObject<any>;
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
    this.toggleDisplayMenu = this.toggleDisplayMenu.bind(this);
  }

  componentDidMount(): void {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event: globalThis.MouseEvent): void {
    if (
      this.state.displayMenu &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target) &&
      // here we are making this check
      // to know if the user is using the search bar or not
      // and if he does we won't invoke the function
      // becasue if we don't do this check
      // clicking on the search bar will close the menu bar in small screens
      // including the search bar itself as it was moved to the menu bar in small screens
      this.searchBarRef.current &&
      !this.searchBarRef.current.contains(event.target)
    ) {
      this.toggleDisplayMenu();
    }
  }

  toggleDisplayMenu(): void {
    this.setState(({ displayMenu }: { displayMenu: boolean }) => ({
      displayMenu: !displayMenu
    }));
  }
  render(): JSX.Element {
    const { displayMenu } = this.state;
    const { fetchState, user } = this.props;
    return (
      <>
        <Helmet>
          <style>{':root{--header-height: 38px}'}</style>
        </Helmet>
        <header>
          <UniversalNav
            displayMenu={displayMenu}
            fetchState={fetchState}
            menuButtonRef={this.menuButtonRef}
            searchBarRef={this.searchBarRef}
            toggleDisplayMenu={this.toggleDisplayMenu}
            user={user}
          />
        </header>
      </>
    );
  }
}

Header.displayName = 'Header';

export default Header;
