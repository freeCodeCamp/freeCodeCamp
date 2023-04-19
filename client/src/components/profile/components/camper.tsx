import {
  type IconDefinition,
  faAward,
  faCalendar,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import type { User } from '../../../redux/prop-types';

import envData from '../../../../../config/env.json';
import { getLangCode } from '../../../../../config/i18n';
import { AvatarRenderer } from '../../helpers';
import Link from '../../helpers/link';
import SocialIcons from './social-icons';

import './camper.css';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);


interface BadgeProps {
  title: React.ReactNode;
  details: string;
  icon: IconDefinition;
}

export type CamperProps = Pick<
  User,
  | 'about'
  | 'githubProfile'
  | 'isDonating'
  | 'linkedin'
  | 'points'
  | 'username'
  | 'twitter'
  | 'yearsTopContributor'
  | 'location'
  | 'website'
  | 'picture'
  | 'name'
  | 'joinDate'
  | 'twitter'
>;


function parseDate(joinDate: string, t: TFunction): string {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date: date });
}

const Badge = ({ title, details, icon }: BadgeProps) => {
  return (
    <section className='badge'>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <dt>{title}</dt>
      <dd>{details}</dd>
    </section>
  );
};

function Camper({
  name,
  username,
  location,
  points,
  picture,
  about,
  yearsTopContributor,
  githubProfile,
  isDonating,
  joinDate,
  linkedin,
  twitter,
  website
}: CamperProps): JSX.Element {
  const { t } = useTranslation();
  const isTopContributor = yearsTopContributor.filter(Boolean).length > 0;
  const hasBadge = isDonating || isTopContributor;
  return (
    <div>
      <Row>
        <Col className='avatar-camper' xs={12}>
          <AvatarRenderer
            isDonating={isDonating}
            isTopContributor={yearsTopContributor.length > 0}
            picture={picture}
            userName={username}
          />
        </Col>
      </Row>
      <SocialIcons
        githubProfile={githubProfile}
        linkedin={linkedin}
        twitter={twitter}
        username={username}
        website={website}
      />
      <br />
      <h2 className='text-center username'>@{username}</h2>
      {name && <p className='text-center name'>{name}</p>}
      {location && <p className='text-center location'>{location}</p>}
      {about && <p className='bio text-center'>{about}</p>}
      {joinDate && (
        <p className='bio text-center'>
          <FontAwesomeIcon icon={faCalendar} /> {parseDate(joinDate, t)}
        </p>
      )}
      {hasBadge && (
        <dl className='badges'>
          {isDonating && (
            <Badge
              icon={faHeart}
              title={t('profile.supporter')}
              details={t('donate.supporter')}
            />
          )}
          {isTopContributor && (
            <Badge
              icon={faAward}
              title={
                <Link to={t('links:top-contributors')}>
                  {t('profile.contributor')}
                </Link>
              }
              details={t('donate.top-contributor')}
            />
          )}
        </dl>
      )}
      <p className='text-center points'>
        {t('profile.total-points', { count: points })}
      </p>
    </div>
  );
}

Camper.displayName = 'Camper';

export default Camper;
