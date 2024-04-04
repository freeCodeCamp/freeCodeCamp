import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocation } from '@fortawesome/free-solid-svg-icons';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getLangCode } from '../../../../../../../shared/config/i18n';
import envData from '../../../../../../config/env.json';
import { userSelector } from '../../../../../redux/selectors';
import { User } from '../../../../../redux/prop-types';
import './bio.css';
import SocialIcons from '../../social-icons';
const { clientLocale } = envData;
const localeCode = getLangCode(clientLocale);
function parseDate(joinDate: string, t: TFunction): string {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date });
}
const Bio = () => {
  const { t } = useTranslation();
  const {
    joinDate,
    location,
    username,
    name,
    about,
    githubProfile,
    linkedin,
    twitter,
    website
  } = useSelector(userSelector) as User; //using redux selectors
  return (
    <section className='flex-col padding-vertical-3 border-b'>
      <h2 className='username'>@{username}</h2>
      {name && <p className='name gray-color'>{name}</p>}
      {about && <p className='bio'>{about}</p>}
      <div className='flex gap-2 location-and-date'>
        {joinDate && (
          <div>
            <FontAwesomeIcon icon={faCalendar} className='light-gray-color' />
            <span className='gray-color'>{parseDate(joinDate, t)}</span>
          </div>
        )}
        {location && (
          <div>
            <FontAwesomeIcon icon={faLocation} className='light-gray-color' />
            <span className='gray-color'>From: {location}</span>
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
    </section>
  );
};
export default Bio;
