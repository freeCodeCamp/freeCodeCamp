import React from 'react';
import { useTranslation } from 'react-i18next';
import type { User } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';
import './camper.css';
import SupporterBadgeEmblem from '../../../assets/icons/supporter-badge-emblem';
import TopContibutorBadgeEmblem from '../../../assets/icons/top-contributor-badge-emblem';
import Bio from './bio';

export type CamperProps = Pick<
  User,
  | 'about'
  | 'githubProfile'
  | 'isDonating'
  | 'linkedin'
  | 'username'
  | 'twitter'
  | 'yearsTopContributor'
  | 'location'
  | 'website'
  | 'picture'
  | 'name'
  | 'joinDate'
>;

function Camper({ yearsTopContributor, isDonating }: CamperProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Bio />
      <FullWidthRow>
        <h2 className='text-center'>{t('profile.badges')}</h2>
        <div className='badge-card-container'>
          {console.log(isDonating)}
          {isDonating && (
            <div className='badge-card'>
              <div className='badge'>
                <SupporterBadgeEmblem />
              </div>
              <div className='badge-card-description'>
                <h3>{t('profile.supporter')}</h3>
                <p>{t('profile.donated')}</p>
              </div>
            </div>
          )}
          {yearsTopContributor.filter(Boolean).length > 0 && (
            <div className='badge-card'>
              <div className='badge'>
                <TopContibutorBadgeEmblem />
              </div>
              <div className='badge-card-description'>
                <h3>{t('profile.contributor')}</h3>
                <p>
                  {t('profile.contributor-prolific', {
                    year: yearsTopContributor
                  })}
                </p>
              </div>
            </div>
          )}

          <br />
        </div>
      </FullWidthRow>
    </>
  );
}

Camper.displayName = 'Camper';

export default Camper;
