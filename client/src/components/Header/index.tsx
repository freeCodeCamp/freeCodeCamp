import React from 'react';
import Helmet from 'react-helmet';

import Loadable from '@loadable/component';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import { useFeature } from '@growthbook/growthbook-react';
import { isLanding } from '../../utils/path-parsers';
import { Link, SkeletonSprite } from '../helpers';
import {
  SEARCH_EXPOSED_WIDTH,
  DONATE_NAV_EXPOSED_WIDTH
} from '../../../../config/misc';
import type { User } from '../../redux/prop-types';
import MenuButton from './components/menu-button';
import NavLinks from './components/nav-links';
import NavLogo from './components/nav-logo';
import AuthOrProfile from './components/auth-or-profile';

import './header.css';

const SearchBar = Loadable(() => import('../search/searchBar/search-bar'));
const SearchBarOptimized = Loadable(
  () => import('../search/searchBar/search-bar-optimized')
);

interface HeaderProps {
  fetchState: { pending: boolean };
  user: User;
}
export const Header = ({ fetchState, user }: HeaderProps): JSX.Element => {
  const { pending } = fetchState;
  const { t } = useTranslation();

  const exposeDonateButton = useFeature('expose_donate_button').on;

  const search =
    typeof window !== `undefined` && isLanding(window.location.pathname) ? (
      <SearchBarOptimized />
    ) : (
      <SearchBar />
    );
  return (
      <header>
        <a href='#content-start' className='skip-to-content-button'>
          {t('learn.skip-to-content')}
        </a>
        <nav
          aria-label={t('aria.primary-nav')}
          className={`universal-nav`}
          id='universal-nav'
        >
          <Media minWidth={SEARCH_EXPOSED_WIDTH + 1}><div className={`universal-nav-left`}>
            {search}
          </div></Media>
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
                <MenuButton user={user} />
                <Media maxWidth={SEARCH_EXPOSED_WIDTH}>{search}</Media>
                <NavLinks fetchState={fetchState} user={user} />
                <div className='navatar'>
                  <AuthOrProfile user={user} />
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    );
  }


Header.displayName = 'Header';

export default Header;
