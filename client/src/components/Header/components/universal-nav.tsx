/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
// @ts-nocheck
import Loadable from '@loadable/component';
import React, { Ref } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { isLanding } from '../../../utils/path-parsers';
import { Link, SkeletonSprite } from '../../helpers';
import MenuButton from './menu-button';
import NavLinks from './nav-links';
import NavLogo from './nav-logo';
import './universal-nav.css';
import { updateUserFlag } from '../../../redux/settings';

const SearchBar = Loadable(() => import('../../search/searchBar/search-bar'));
const SearchBarOptimized = Loadable(
  () => import('../../search/searchBar/search-bar-optimized')
);

export interface UniversalNavProps {
  displayMenu?: boolean;
  fetchState?: { pending: boolean };
  menuButtonRef?: Ref<HTMLButtonElement> | undefined;
  searchBarRef?: unknown;
  toggleDisplayMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  toggleNightMode: (x: any) => any;
  user?: Record<string, unknown>;
}

const mapDispatchToProps = {
  toggleNightMode: (theme: unknown) => updateUserFlag({ theme })
};

export const UniversalNav = ({
  displayMenu,
  toggleDisplayMenu,
  toggleNightMode,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState
}: UniversalNavProps): JSX.Element => {
  const { pending } = fetchState;

  const search =
    typeof window !== `undefined` && isLanding(window.location.pathname) ? (
      <SearchBarOptimized innerRef={searchBarRef} />
    ) : (
      <SearchBar innerRef={searchBarRef} />
    );

  function toggleTheme(currentTheme = 'default', toggleNightMode: any) {
    toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
  }

  return (
    <nav
      className={'universal-nav' + (displayMenu ? ' expand-nav' : '')}
      id='universal-nav'
    >
      <div
        className={
          'universal-nav-left' + (displayMenu ? ' display-search' : '')
        }
      >
        {search}
      </div>
      <div className='universal-nav-middle'>
        <Link id='universal-nav-logo' to='/learn'>
          <NavLogo />
          <span className='sr-only'>freeCodeCamp.org</span>
        </Link>
      </div>
      <div className='universal-nav-right main-nav'>
        <div
          className={`theme-mode-changer ${user.theme}`}
          onClick={() => toggleTheme(String(user.theme), toggleNightMode)}
        >
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </div>
        {pending ? (
          <div className='nav-skeleton'>
            <SkeletonSprite />
          </div>
        ) : (
          <MenuButton
            displayMenu={displayMenu}
            innerRef={menuButtonRef}
            onClick={toggleDisplayMenu}
            user={user}
          />
        )}
      </div>

      <NavLinks
        displayMenu={displayMenu}
        fetchState={fetchState}
        toggleDisplayMenu={toggleDisplayMenu}
        user={user}
      />
    </nav>
  );
};

UniversalNav.displayName = 'UniversalNav';
export default connect(null, mapDispatchToProps)(UniversalNav);
