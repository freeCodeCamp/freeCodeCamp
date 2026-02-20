import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import type { User } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';
import './camper.css';
import SupporterBadgeEmblem from '../../../assets/icons/supporter-badge-emblem';
import TopContributorBadgeEmblem from '../../../assets/icons/top-contributor-badge-emblem';
import Bio from './bio';
import { WidgetHeader } from './widget-header';

export type CamperProps = {
  user: User;
  isSessionUser: boolean;
  onEditBio: () => void;
  onToggleDonation?: () => void;
};

function Camper({
  user,
  isSessionUser,
  onEditBio,
  onToggleDonation
}: CamperProps): JSX.Element {
  const {
    isDonating,
    yearsTopContributor,
    profileUI: { showDonation }
  } = user;

  const { t } = useTranslation();
  const isTopContributor = yearsTopContributor.filter(Boolean).length > 0;
  const showBadges =
    isSessionUser || (isDonating && showDonation) || isTopContributor;

  return (
    <>
      <div className='bio-container'>
        <Spacer size={'m'} />
        <Bio user={user} isSessionUser={isSessionUser} onEditBio={onEditBio} />
      </div>
      {showBadges && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showDonation ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.badges')}
              isSessionUser={isSessionUser}
              isPrivate={!showDonation}
              onToggle={onToggleDonation}
            />
            <div className='badge-card-container'>
              {isDonating && (isSessionUser || showDonation) && (
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
