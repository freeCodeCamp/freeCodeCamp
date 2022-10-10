import {
  faAward,
  faCalendar,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { TFunction, useTranslation } from 'react-i18next';

import envData from '../../../../../config/env.json';
import { getLangCode } from '../../../../../config/i18n/all-langs';
import { AvatarRenderer } from '../../helpers';
import Link from '../../helpers/link';
import SocialIcons from './social-icons';

import './camper.css';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);

interface CamperProps {
  about: string;
  githubProfile: string;
  isDonating: boolean;
  joinDate: string;
  linkedin: string;
  location: string;
  name: string;
  picture: string;
  points: number | null;
  twitter: string;
  username: string;
  website: string;
  yearsTopContributor: string[];
}

function joinArray(array: string[], t: TFunction): string {
  return array.reduce((string, item, index, array) => {
    if (string.length > 0) {
      if (index === array.length - 1) {
        return `${string} ${t('misc.and')} ${item}`;
      } else {
        return `${string}, ${item}`;
      }
    } else {
      return item;
    }
  });
}

function parseDate(joinDate: string, t: TFunction): string {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date: date });
}

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
      <Row>
        <h2 className='text-center username'>@{username}</h2>
      </Row>
      <Row>
        <Col lg={5} lgOffset={4}>
          {name && (
            <>
              <Col lg={4} xs={6}>
                <p className='text-right name'>
                  <strong>{t('settings.labels.name')}:</strong>
                </p>
              </Col>
              <Col lg={8} xs={6}>
                <p className='text-left name'>{name}</p>
              </Col>
            </>
          )}
          {location && (
            <>
              <Col lg={4} xs={6}>
                <p className='text-right location'>
                  <strong>{t('settings.labels.location')}:</strong>
                </p>
              </Col>
              <Col lg={8} xs={6}>
                <p className='text-left location'>{location}</p>
              </Col>
            </>
          )}
          {isDonating && (
            <Col>
              <p className='text-center supporter'>
                <FontAwesomeIcon icon={faHeart} /> {t('profile.supporter')}
              </p>
            </Col>
          )}
          {about && (
            <>
              <Col lg={4} xs={6}>
                <p className='text-right bio'>
                  <strong>{t('settings.labels.about')}:</strong>
                </p>
              </Col>
              <Col lg={8} xs={6}>
                <p className='text-left bio'>{about}</p>
              </Col>
            </>
          )}
        </Col>
      </Row>
      <Row>
        {joinDate && (
          <Col>
            <p className='bio text-center'>
              <FontAwesomeIcon icon={faCalendar} /> {parseDate(joinDate, t)}
            </p>
          </Col>
        )}
        {yearsTopContributor.filter(Boolean).length > 0 && (
          <div>
            <br />
            <p className='text-center yearsTopContributor'>
              <FontAwesomeIcon icon={faAward} />{' '}
              <Link to={t('links:top-contributors')}>
                {t('profile.contributor')}
              </Link>
            </p>
            <p className='text-center'>{joinArray(yearsTopContributor, t)}</p>
          </div>
        )}
        <br />
        {typeof points === 'number' ? (
          <Col>
            <p className='text-center points'>
              {t('profile.total-points', { count: points })}
            </p>
          </Col>
        ) : null}
      </Row>
    </div>
  );
}

Camper.displayName = 'Camper';

export default Camper;
