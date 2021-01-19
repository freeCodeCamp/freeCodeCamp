import React from 'react';
import { Link, SkeletonSprite } from '../../helpers';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import {
  forumLocation,
  radioLocation,
  newsLocation,
  homeLocation,
  chineseHome
} from '../../../../../config/env.json';
import { useTranslation } from 'react-i18next';

const {
  availableLangs,
  i18nextCodes,
  langDisplayNames
} = require('../../../../i18n/allLangs');

const locales = availableLangs.client;

const propTypes = {
  displayMenu: PropTypes.bool,
  fetchState: PropTypes.shape({ pending: PropTypes.bool }),
  user: PropTypes.object
};

export function LinkyLink({ user, pending }) {
  const { i18n, t } = useTranslation();
  const isUserDonating = user && user.isDonating;
  const isUserSignedIn = user && user.username;

  const changeLanguage = lang => {
    const path = window.location.pathname;
    switch (lang) {
      case 'espanol':
        return `${homeLocation}/espanol${path}`;
      case 'english':
        return `${homeLocation}${path}`;
      case '中文':
        return chineseHome;
      default:
        return `${homeLocation}`;
    }
  };

  const NavigationLinks = (
    <>
      <li>
        {isUserDonating ? (
          <Link
            className='nav-link'
            external={true}
            sameTab={false}
            to='/donate'
          >
            {t('buttons.donate')}
          </Link>
        ) : (
          <span className='nav-link'>{t('donate.thanks')}</span>
        )}
      </li>
      <li>
        <Link
          className='nav-link'
          external={true}
          sameTab={true}
          to={forumLocation}
        >
          {t('buttons.forum')}
        </Link>
      </li>
      <li>
        <Link
          className='nav-link'
          external={true}
          sameTab={false}
          to={newsLocation}
        >
          {t('buttons.news')}
        </Link>
      </li>
      <li>
        <Link className='nav-link' to='/learn'>
          {t('buttons.curriculum')}
        </Link>
      </li>
      <li>
        <Link className='nav-link' to={`/${user.username}`}>
          {t('buttons.profile')}
        </Link>
      </li>
      <li>
        <Link
          className='nav-link'
          external={true}
          sameTab={false}
          to={radioLocation}
        >
          {t('buttons.radio')}
        </Link>
      </li>
      <li>
        <Link
          className='nav-link'
          external={true}
          sameTab={false}
          to={radioLocation}
        >
          {t('settings.labels.night-mode')}
        </Link>
      </li>
      <li>
        <span className='nav-link'>{t('footer.language')}</span>
      </li>
      {locales.map(lang => {
        return (
          <li>
            <Link className='nav-link sub-link' to={changeLanguage(lang)}>
              {langDisplayNames[lang]}
              {i18n.language === i18nextCodes[lang] ? ' ✓' : ''}
            </Link>
          </li>
        );
      })}
    </>
  );

  if (pending) {
    return (
      <div className='nav-skeleton'>
        <SkeletonSprite />
      </div>
    );
  } else if (!isUserSignedIn) {
    return (
      <>
        <Login data-test-label='landing-small-cta'>
          {t('buttons.sign-in')}
        </Login>
      </>
    );
  } else {
    return <>{NavigationLinks}</>;
  }
}

export function NavLinks({ displayMenu, user, fetchState }) {
  const { pending } = fetchState;
  return (
    <div className='main-nav-group'>
      <ul className={'nav-list' + (displayMenu ? ' display-menu' : '')}>
        <LinkyLink pending={pending} user={user} />
      </ul>
    </div>
  );
}

NavLinks.propTypes = propTypes;
NavLinks.displayName = 'NavLinks';
export default NavLinks;
