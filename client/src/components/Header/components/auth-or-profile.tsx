import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, AvatarRenderer } from '../../helpers';
import FreeCodeCampFlame from '../../../assets/icons/freecodecamp-flame';
import type { ActivityStreak } from '../../../redux/prop-types';
import Login from './login';

interface AuthOrProfileProps {
  user?: {
    isDonating: boolean;
    username: string;
    picture: string;
    yearsTopContributor: string[];
    activityStreak?: ActivityStreak;
  };
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
    const activityStreakLabel = t('profile.activity-streak-label');

    return (
      <Link className='avatar-nav-link' to={`/${user.username}`}>
        <AvatarRenderer
          isDonating={isUserDonating}
          isTopContributor={isTopContributor}
          picture={user.picture}
        />
        {user.activityStreak?.activeSession && (
          <span
            aria-label={activityStreakLabel}
            className='header-activity-streak-badge'
            title={activityStreakLabel}
          >
            <FreeCodeCampFlame />
          </span>
        )}
      </Link>
    );
  }
};

AuthOrProfile.displayName = 'AuthOrProfile';
export default AuthOrProfile;
