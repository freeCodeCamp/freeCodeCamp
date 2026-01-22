/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { createSelector } from 'reselect';
import { examInProgressSelector } from '../../redux/selectors';

import UniversalNav from './components/universal-nav';
import ExamNav from './components/exam-nav';

import './header.css';

const mapStateToProps = createSelector(
  examInProgressSelector,
  (examInProgress: boolean) => ({
    examInProgress
  })
);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  fetchState: { pending: boolean };
  user: {
    isDonating: boolean;
    username: string;
    picture: string;
    yearsTopContributor: string[];
  };
  skipButtonText: string;
  pathname: string;
};

class Header extends React.Component<Props, { displayMenu: boolean }> {
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  searchBarRef: React.RefObject<any>;
  static displayName: string;
  constructor(props: Props) {
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
    const { examInProgress, fetchState, user, skipButtonText, pathname } =
      this.props;
    return (
      <header className='site-header'>
        <a
          href='#content-start'
          className='skip-to-content-button'
          data-playwright-test-label='header-skip-content'
        >
          {skipButtonText}
        </a>
        {examInProgress ? (
          <ExamNav />
        ) : (
          <UniversalNav
            displayMenu={displayMenu}
            fetchState={fetchState}
            hideMenu={this.hideMenu}
            pathname={pathname}
            menuButtonRef={this.menuButtonRef}
            searchBarRef={this.searchBarRef}
            showMenu={this.showMenu}
            user={user}
          />
        )}
      </header>
    );
  }
}

Header.displayName = 'Header';

export default connector(Header);
