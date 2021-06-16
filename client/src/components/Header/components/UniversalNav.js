import React from 'react';
import PropTypes from 'prop-types';

import { Link, SkeletonSprite } from '../../helpers';
import NavLogo from './NavLogo';
import MenuButton from './MenuButton';
import NavLinks from './NavLinks';
import './universalNav.css';
import { isLanding } from '../../../utils/path-parsers';

import Loadable from '@loadable/component';

const SearchBar = Loadable(() => import('../../search/searchBar/SearchBar'));
const SearchBarOptimized = Loadable(() =>
  import('../../search/searchBar/search-bar-optimized')
);

export const UniversalNav = ({
  displayMenu,
  toggleDisplayMenu,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState
}) => {
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

UniversalNav.propTypes = {
  displayMenu: PropTypes.bool,
  fetchState: PropTypes.shape({ pending: PropTypes.bool }),
  menuButtonRef: PropTypes.object,
  searchBarRef: PropTypes.object,
  toggleDisplayMenu: PropTypes.func,
  user: PropTypes.object
};
