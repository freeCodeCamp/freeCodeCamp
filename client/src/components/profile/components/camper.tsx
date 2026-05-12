import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import type { User } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';
import './camper.css';
import SupporterBadgeEmblem from '../../../assets/icons/supporter-badge-emblem';
import TopContributorBadgeEmblem from '../../../assets/icons/top-contributor-badge-emblem';
import Bio from './bio';

export type CamperProps = {
  user: User;
  setIsEditing: (value: boolean) => void;
  isSessionUser: boolean;
};

function Camper({
  user,
  isSessionUser,
  setIsEditing
}: CamperProps): JSX.Element {
  const {
    isDonating,
    yearsTopContributor,
    profileUI: { showDonation, isLocked }
  } = user;

  const { t } = useTranslation();
  const isTopContributor = yearsTopContributor.filter(Boolean).length > 0;
  const hasBadges = isDonating || isTopContributor;

  // Visible to non-session visitors (isLocked is already handled at the
  // profile level — if locked, visitors never reach this component)
  const sectionVisibleToVisitors =
    (isDonating && showDonation) || isTopContributor;

  const showBadgesSection = isSessionUser
    ? hasBadges
    : sectionVisibleToVisitors;
  const badgesSectionIsPrivate =
    isSessionUser && hasBadges && (isLocked || !sectionVisibleToVisitors);

  return (
    <>
      <div className='bio-container'>
        <Spacer size={'m'} />
        <Bio
          user={user}
          setIsEditing={setIsEditing}
          isSessionUser={isSessionUser}
        />
      </div>
      {showBadgesSection && (
        <FullWidthRow>
          <section className='card'>
            <div className='profile-section-heading'>
              <h2>{t('profile.badges')}</h2>
              {badgesSectionIsPrivate && (
                <span className='profile-private-badge'>
                  {t('buttons.private')}
                </span>
              )}
            </div>
            <div className='badge-card-container'>
              {isDonating && (showDonation || isSessionUser) && (
                <div className='badge-card'>
                  <div className='camper-badge'>
                    <SupporterBadgeEmblem />
                  </div>
                  <div className='badge-card-description'>
                    <h3>{t('profile.supporter')}</h3>
                    <p>{t('profile.donated')}</p>
                  </div>
                </div>
              )}
              {isTopContributor && (
                <div className='badge-card'>
                  <div className='camper-badge'>
                    <TopContributorBadgeEmblem />
                  </div>
                  <div className='badge-card-description'>
                    <h3>{t('profile.contributor')}</h3>
                    <p>
                      {t('profile.contributor-prolific', {
                        year: yearsTopContributor.join(', ')
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </FullWidthRow>
      )}
    </>
  );
}

Camper.displayName = 'Camper';

export default Camper;
