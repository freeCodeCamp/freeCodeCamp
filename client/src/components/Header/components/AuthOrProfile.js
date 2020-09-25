/* eslint-disable react/sort-prop-types */
import React from 'react';
import {
  Link,
  borderColorPicker,
  SkeletonSprite,
  AvatarRenderer
} from '../../helpers';
import PropTypes from 'prop-types';

import Login from '../components/Login';

const propTypes = {
  pending: PropTypes.bool,
  pathName: PropTypes.string.isRequired,
  user: PropTypes.object
};

export function AuthOrProfile({ user, pathName, pending }) {
  const isUserDonating = user && user.isDonating;
  const isUserSignedIn = user && user.username;
  const isTopContributor =
    user && user.yearsTopContributor && user.yearsTopContributor.length > 0;

  const badgeColorClass = borderColorPicker(isUserDonating, isTopContributor);

  if (pending && pathName !== '/') {
    return (
      <div className='nav-skeleton'>
        <SkeletonSprite />
      </div>
    );
  } else if (pathName === '/' || !isUserSignedIn) {
    return <Login data-test-label='landing-small-cta'>Sign In</Login>;
  } else {
    return (
      <>
        <li>
          <Link className='nav-link' to='/learn'>
            Curriculum
          </Link>
        </li>
        <li>
          <Link className='nav-link' to={`/${user.username}`}>
            Profile
          </Link>
          <Link
            className={`avatar-nav-link ${badgeColorClass}`}
            to={`/${user.username}`}
          >
            <AvatarRenderer
              picture={user.picture}
              size='sm'
              userName={user.username}
            />
          </Link>
        </li>
      </>
    );
  }
}

AuthOrProfile.propTypes = propTypes;
AuthOrProfile.displayName = 'AuthOrProfile';
export default AuthOrProfile;
