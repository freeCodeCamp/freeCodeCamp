/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { Ref } from 'react';
import { Link, SkeletonSprite } from '../../helpers';
import NavLogo from './nav-logo';
import MenuButton from './menu-button';
import NavLinks from './nav-links';
import './universal-nav.css';
import { isLanding } from '../../../utils/path-parsers';
import Loadable from '@loadable/component';

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
  user?: Record<string, unknown>;
}
export const UniversalNav = ({
  displayMenu,
  toggleDisplayMenu,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState
}: UniversalNavProps): JSX.Element => {
  const { pending } = fetchState;

  const search =
    typeof window !== `undefined` && isLanding(window.location.pathname) ? (
      <SearchBarOptimized />
    ) : (
      <SearchBar innerRef={searchBarRef} />
    );

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
export default UniversalNav;
