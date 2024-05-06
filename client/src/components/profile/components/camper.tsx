import React from 'react';
import { useTranslation } from 'react-i18next';
import type { User } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';
import './camper.css';
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
        <h2 className='header'>{t('profile.badges')}</h2>
        <div className='badge-card-container'>
          {console.log(isDonating)}
          {isDonating && (
            <div className='badge-card'>
              <div className='badge'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100'
                  height='100'
                >
                  <circle cx='50' cy='50' r='50' fill='#D9D9D9' />
                </svg>
              </div>
              <div className='badge-card-description'>
                <h2>{t('profile.supporter')}</h2>
                <p>{t('profile.donated')}</p>
              </div>
            </div>
          )}
          {yearsTopContributor.filter(Boolean).length > 0 && (
            <div className='badge-card'>
              <div className='badge'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100'
                  height='100'
                >
                  <circle cx='50' cy='50' r='50' fill='#D9D9D9' />
                </svg>
              </div>
              <div className='badge-card-description'>
                <h2>{t('profile.contributor')}</h2>
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
