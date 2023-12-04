import {
  faAward,
  faCalendar,
  faHeart,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { differenceInYears, endOfYear } from 'date-fns';

import envData from '../../../../config/env.json';
import { getLangCode } from '../../../../../shared/config/i18n';
import type { User } from '../../../redux/prop-types';
import { AvatarRenderer } from '../../helpers';
import Link from '../../helpers/link';
import SocialIcons from './social-icons';

import './camper.css';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);

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
  className?: string;
};

function parseDate(joinDate: string, t: TFunction): string {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date: date });
}

/**
 * if user is a current or past top contributor, we get the color of the
 * award based on how recent and how many years the user contributed.
 * at a minimum, a user will receive a bronze colored award
 */
function getAwardInfo(yearsTopContributor: string[]): {
  title: string;
  awardColor: string;
} {
  let info = {
    title: '',
    awardColor: ''
  };

  const lastAwardYear =
    yearsTopContributor.length > 0 ? yearsTopContributor[0] : null;

  if (lastAwardYear) {
    info = {
      title: 'Bronze Award for being a Top Contributor in the past',
      awardColor: '#cd7f32' // bronze
    };
    let lastYear = endOfYear(new Date(lastAwardYear));
    const yearsElapsedSinceLastAward = differenceInYears(
      endOfYear(new Date()),
      lastYear
    );

    // only award silver and up to people who consistently contributes recently in the past years
    if (yearsElapsedSinceLastAward <= 1) {
      let consecutiveYearsCount = 1;

      for (const yearString of yearsTopContributor) {
        const year = endOfYear(new Date(yearString));
        const difference = differenceInYears(lastYear, year);

        if (difference === 1) {
          lastYear = year;
          consecutiveYearsCount++;
        }
      }

      switch (true) {
        case consecutiveYearsCount > 2:
          info.awardColor = 'var(--yellow-gold)';
          info.title =
            'Gold Award for being a Top Contributor for the past 3 years consecutively';
          break;
        case consecutiveYearsCount > 1:
          info.awardColor = 'silver';
          info.title =
            'Silver Award for being a Top Contributor for the past 2 years consecutively';
          break;
        default:
          info.title = `Bronze Award for being a Top Contributor ${
            yearsElapsedSinceLastAward === 0 ? 'this' : 'last'
          } year`;
      }
    }
  }

  return info;
}

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
  className
}: CamperProps): JSX.Element {
  const { t } = useTranslation();
  const isTopContributor = yearsTopContributor.length > 0;
  const awardInfo = getAwardInfo(yearsTopContributor);

  return (
    <div className={`camper-grid ${className}`}>
      <div className='avatar-camper'>
        <div className='top-contrib-stack'>
          <AvatarRenderer
            isDonating={isDonating}
            isTopContributor={isTopContributor}
            picture={picture}
            userName={username}
          />
          {isTopContributor && (
            <FontAwesomeIcon
              icon={faAward}
              className='top-contrib-award'
              style={{ color: awardInfo.awardColor }}
              title={awardInfo.title}
            />
          )}
        </div>
        {isTopContributor && (
          <div className='text-center'>
            <Link to={t('links:top-contributors')}>
              {t('profile.contributor')}
            </Link>{' '}
            <span>{yearsTopContributor[0]}</span>
          </div>
        )}
        <SocialIcons
          className='avatar-socials'
          githubProfile={githubProfile}
          linkedin={linkedin}
          twitter={twitter}
          username={username}
          website={website}
        />
      </div>
      <div className='user-details'>
        <h2>@{username}</h2>
        {name && <p>{name}</p>}
        {location && (
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className='user-details-icon'
            />
            {location}
          </p>
        )}
        {(joinDate || isDonating) && (
          <p className='profile-meta'>
            {joinDate && (
              <span>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className='user-details-icon'
                />
                {parseDate(joinDate, t)}
              </span>
            )}
            {true && (
              <span>
                <FontAwesomeIcon icon={faHeart} className='user-details-icon' />
                {t('profile.supporter')}
              </span>
            )}
          </p>
        )}
        <SocialIcons
          className='profile-socials'
          githubProfile={githubProfile}
          linkedin={linkedin}
          twitter={twitter}
          username={username}
          website={website}
        />
      </div>
      {about && <p className='bio'>{about}</p>}
    </div>
  );
}

Camper.displayName = 'Camper';
Camper.defaultProps = {
  className: ''
};

export default Camper;
