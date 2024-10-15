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
> & {
  setIsEditing: (value: boolean) => void;
  isSessionUser: boolean;
};

function Camper({
  name,
  username,
  location,
  picture,
  about,
  yearsTopContributor,
  githubProfile,
  isDonating,
  joinDate,
  linkedin,
  twitter,
  website,
  isSessionUser,
  setIsEditing
}: CamperProps): JSX.Element {
  const { t } = useTranslation();
  const isTopContributor = yearsTopContributor.filter(Boolean).length > 0;
  return (
    <>
      <div className='bio-container'>
        <Bio
          joinDate={joinDate}
          location={location}
          username={username}
          name={name}
          about={about}
          githubProfile={githubProfile}
          linkedin={linkedin}
          twitter={twitter}
          website={website}
          isDonating={isDonating}
          yearsTopContributor={yearsTopContributor}
          picture={picture}
          setIsEditing={setIsEditing}
          isSessionUser={isSessionUser}
        />
      </div>
      {(isDonating || isTopContributor) && (
        <FullWidthRow>
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
          <hr />
        </FullWidthRow>
      )}
    </>
  );
}

Camper.displayName = 'Camper';

export default Camper;
