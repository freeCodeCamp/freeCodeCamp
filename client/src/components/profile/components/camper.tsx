import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FullWidthRow } from '../../helpers';
import './camper.css';
import SupporterBadgeEmblem from '../../../assets/icons/supporter-badge-emblem';
import TopContibutorBadgeEmblem from '../../../assets/icons/top-contributor-badge-emblem';
import { ProfileUI } from '../../../redux/prop-types';
import {
  isDonatingSelector,
  userPrivacySelector,
  userTopContributorSelector
} from '../../../redux/selectors';
import Bio from './bio';

type CamperProps = {
  yearsTopContributor: string[];
  isDonating: boolean;
  isSessionUser: boolean;
  username: string;
  setIsEditing: (isEditing: boolean) => void;
  privacy: ProfileUI;
};

const mapStateToProps = (state: unknown, props: { username: string }) => ({
  yearsTopContributor: userTopContributorSelector(state) as string[],
  privacy: userPrivacySelector(props.username) as unknown as ProfileUI,
  isDonating: isDonatingSelector(state) as boolean
});

function Camper({
  yearsTopContributor,
  isDonating,
  isSessionUser,
  setIsEditing,
  privacy
}: CamperProps): JSX.Element {
  const { t } = useTranslation();

  isDonating = isDonating && privacy.showDonation;

  const isTopContributor = yearsTopContributor.filter(Boolean).length > 0;
  return (
    <>
      <div className='bio-container'>
        <Bio isSessionUser={isSessionUser} setIsEditing={setIsEditing} />
      </div>
      {(isDonating || isTopContributor) && (
        <FullWidthRow>
          <section className='card'>
            <h2>{t('profile.badges')}</h2>
            <div className='badge-card-container'>
              {isDonating && (
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
                    <TopContibutorBadgeEmblem />
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

export default connect(mapStateToProps)(Camper);
