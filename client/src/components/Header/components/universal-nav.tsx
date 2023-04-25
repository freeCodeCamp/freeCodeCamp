import Loadable from '@loadable/component';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import { useFeature } from '@growthbook/growthbook-react';
import { isLanding } from '../../../utils/path-parsers';
import { Link, SkeletonSprite } from '../../helpers';
import {
  SEARCH_EXPOSED_WIDTH,
  DONATE_NAV_EXPOSED_WIDTH
} from '../../../../../config/misc';
import MenuButton from './menu-button';
import NavLinks, { type NavLinksProps } from './nav-links';
import NavLogo from './nav-logo';
import './universal-nav.css';
import AuthOrProfile from './auth-or-profile';
import { LanguageList } from './language-list';

const SearchBar = Loadable(() => import('../../search/searchBar/search-bar'));
const SearchBarOptimized = Loadable(
  () => import('../../search/searchBar/search-bar-optimized')
);

type UniversalNavProps = Omit<
  NavLinksProps,
  'toggleNightMode' | 'openSignoutModal'
> & {
  fetchState: { pending: boolean };
  searchBarRef?: React.RefObject<HTMLDivElement>;
};
export const UniversalNav = ({
  displayMenu,
  showMenu,
  hideMenu,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState
}: UniversalNavProps): JSX.Element => {
  const { pending } = fetchState;
  const { t } = useTranslation();

  const exposeDonateButton = useFeature('expose_donate_button').on;

  const search =
    typeof window !== `undefined` && isLanding(window.location.pathname) ? (
      <SearchBarOptimized innerRef={searchBarRef} />
    ) : (
      <SearchBar innerRef={searchBarRef} />
    );

  return (
    <nav
      aria-label={t('aria.primary-nav')}
      className={`universal-nav${displayMenu ? ' expand-nav' : ''}`}
      id='universal-nav'
    >
      <Media minWidth={SEARCH_EXPOSED_WIDTH + 1}>
        <div
          className={`universal-nav-left${
            displayMenu ? ' display-search' : ''
          }`}
        >
          {search}
        </div>
      </Media>
      <Link id='universal-nav-logo' to='/learn'>
        <NavLogo />
      </Link>
      <div className='universal-nav-right main-nav'>
        {pending ? (
          <div className='nav-skeleton'>
            <SkeletonSprite />
          </div>
        ) : (
          <>
            {!user?.isDonating && exposeDonateButton && (
              <Media minWidth={DONATE_NAV_EXPOSED_WIDTH + 1}>
                <Link
                  sameTab={false}
                  to='/donate'
                  data-test-label='nav-donate-button'
                  className='exposed-button-nav'
                >
                  {t('buttons.donate')}
                </Link>
              </Media>
            )}
            <LanguageList t={t} />
            <MenuButton
              displayMenu={displayMenu}
              hideMenu={hideMenu}
              innerRef={menuButtonRef}
              showMenu={showMenu}
              user={user}
            />
            <Media maxWidth={SEARCH_EXPOSED_WIDTH}>{search}</Media>
            <NavLinks
              displayMenu={displayMenu}
              hideMenu={hideMenu}
              menuButtonRef={menuButtonRef}
              showMenu={showMenu}
              user={user}
            />
            <div className='navatar'>
              <AuthOrProfile user={user} />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

UniversalNav.displayName = 'UniversalNav';
export default UniversalNav;
