import React from 'react';
import { useTranslation } from 'react-i18next';
import type { User } from '../../../redux/prop-types';
import { Link, AvatarRenderer } from '../../helpers';
import Login from './login';

interface AuthOrProfileProps {
  user?: User;
}
const AuthOrProfile = ({ user }: AuthOrProfileProps): JSX.Element => {
  const { t } = useTranslation();
  const isUserDonating = user && user.isDonating;
  const isUserSignedIn = user && user.username;
  const isTopContributor =
    user && user.yearsTopContributor && user.yearsTopContributor.length > 0;

  if (!isUserSignedIn) {
    return (
      <Login data-test-label='landing-small-cta'>{t('buttons.sign-in')}</Login>
    );
  } else {
    return (
      <Link className='avatar-nav-link' to={`/${user.username}`}>
        <AvatarRenderer
          isDonating={isUserDonating}
          isTopContributor={isTopContributor}
          picture={user.picture}
          userName={user.username}
        />
      </Link>
    );
  }
};

AuthOrProfile.displayName = 'AuthOrProfile';
export default AuthOrProfile;
