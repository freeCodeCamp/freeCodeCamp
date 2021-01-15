import React from 'react';
import { Link, SkeletonSprite, AvatarRenderer } from '../../helpers';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import { forumLocation, radioLocation } from '../../../../../config/env.json';
import { useTranslation } from 'react-i18next';

const propTypes = {
  displayMenu: PropTypes.bool,
  fetchState: PropTypes.shape({ pending: PropTypes.bool }),
  user: PropTypes.object
};

export function AuthOrProfile({ user, pending }) {
  const { t } = useTranslation();
  const isUserDonating = user && user.isDonating;
  const isUserSignedIn = user && user.username;
  const isTopContributor =
    user && user.yearsTopContributor && user.yearsTopContributor.length > 0;

  const NavigationLinks = (
    <>
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
          sameTab={true}
          to={forumLocation}
        >
          {t('buttons.forum')}
        </Link>
      </li>
      <li>
        <Link className='nav-link' to='/learn'>
          {t('buttons.curriculum')}
        </Link>
      </li>
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
        {NavigationLinks}
        <Login data-test-label='landing-small-cta'>
          {t('buttons.sign-in')}
        </Login>
      </>
    );
  } else {
    return (
      <>
        {NavigationLinks}
        <li>
          <Link className='nav-link' to={`/${user.username}`}>
            {t('buttons.profile')}
            <AvatarRenderer
              isDonating={isUserDonating}
              isTopContributor={isTopContributor}
              picture={user.picture}
              userName={user.username}
            />
          </Link>
        </li>
      </>
    );
  }
}

export function NavLinks({ displayMenu, user, fetchState }) {
  const { pending } = fetchState;
  return (
    <div className='main-nav-group'>
      <ul className={'nav-list' + (displayMenu ? ' display-flex' : '')}>
        <AuthOrProfile pending={pending} user={user} />
      </ul>
    </div>
  );
}

NavLinks.propTypes = propTypes;
NavLinks.displayName = 'NavLinks';
export default NavLinks;
