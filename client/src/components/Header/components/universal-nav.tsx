import Loadable from '@loadable/component';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { isLanding } from '../../../utils/path-parsers';
import { Link, SkeletonSprite } from '../../helpers';
import { SEARCH_EXPOSED_WIDTH } from '../../../../config/misc';
import FreeCodeCampLogo from '../../../assets/icons/freecodecamp-logo';
import MenuButton from './menu-button';
import NavLinks from './nav-links';
import AuthOrProfile from './auth-or-profile';
import LanguageList from './language-list';

import './universal-nav.css';

const SearchBar = Loadable(() => import('../../search/searchBar/search-bar'));
const SearchBarOptimized = Loadable(
  () => import('../../search/searchBar/search-bar-optimized')
);

type UniversalNavProps = {
  displayMenu: boolean;
  showMenu: () => void;
  hideMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  user: {
    isDonating: boolean;
    username: string;
    picture: string;
    yearsTopContributor: string[];
  };
  fetchState: { pending: boolean };
  searchBarRef: React.RefObject<HTMLDivElement>;
  pathname: string;
};
const UniversalNav = ({
  displayMenu,
  showMenu,
  hideMenu,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState,
  pathname
}: UniversalNavProps): JSX.Element => {
  const { pending } = fetchState;
  const { t } = useTranslation();
  const isSearchExposedWidth = useMediaQuery({
    query: `(min-width: ${SEARCH_EXPOSED_WIDTH}px)`
  });

  const search = isLanding(pathname) ? (
    <SearchBarOptimized innerRef={searchBarRef} />
  ) : (
    <SearchBar innerRef={searchBarRef} />
  );
  return (
    <nav
      aria-label={t('aria.primary-nav')}
      className='universal-nav'
      id='universal-nav'
      data-playwright-test-label='header-universal-nav'
    >
      {isSearchExposedWidth && (
        <div className='universal-nav-left'>{search}</div>
      )}
      <Link
        className='universal-nav-logo'
        id='universal-nav-logo'
        to='/learn'
        data-playwright-test-label='header-universal-nav-logo'
      >
        <FreeCodeCampLogo
          aria-label={t('aria.fcc-curriculum')}
          data-playwright-test-label='header-logo'
        />
      </Link>
      <div className='universal-nav-right main-nav'>
        {pending ? (
          <div className='nav-skeleton'>
            <SkeletonSprite />
          </div>
        ) : (
          <>
            <LanguageList />
            <MenuButton
              displayMenu={displayMenu}
              hideMenu={hideMenu}
              innerRef={menuButtonRef}
              showMenu={showMenu}
            />
            {!isSearchExposedWidth && search}
            <NavLinks
              displayMenu={displayMenu}
              hideMenu={hideMenu}
              menuButtonRef={menuButtonRef}
              showMenu={showMenu}
              user={user}
            />
            <AuthOrProfile user={user} />
          </>
        )}
      </div>
    </nav>
  );
};

UniversalNav.displayName = 'UniversalNav';
export default UniversalNav;
