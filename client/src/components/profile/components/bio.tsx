import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { AvatarRenderer, FullWidthRow, Spacer } from '../../helpers';
import { parseDate } from './utils';
import SocialIcons from './social-icons';
import { type CamperProps } from './camper';

const Bio = ({
  joinDate,
  location,
  username,
  name,
  about,
  githubProfile,
  linkedin,
  twitter,
  website,
  isDonating,
  yearsTopContributor,
  picture
}: CamperProps) => {
  const { t } = useTranslation();

  const isTopContributor =
    yearsTopContributor && yearsTopContributor.length > 0;

  return (
    <FullWidthRow>
      <div className='avatar-camper'>
        <AvatarRenderer
          isDonating={isDonating}
          isTopContributor={isTopContributor}
          picture={picture}
        />
      </div>
      <h1>@{username}</h1>
      {name && <h2>{name}</h2>}
      <Spacer size={'small'} />
      {about && <p>{about}</p>}
      <div className='profile-meta-container'>
        {joinDate && (
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{parseDate(joinDate, t)}</span>
          </div>
        )}
        {location && (
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{t('profile.from', { location })}</span>
          </div>
        )}
      </div>
      <SocialIcons
        githubProfile={githubProfile}
        linkedin={linkedin}
        twitter={twitter}
        username={username}
        website={website}
      />
      <hr />
    </FullWidthRow>
  );
};
export default Bio;
