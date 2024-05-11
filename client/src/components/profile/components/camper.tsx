import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { User } from '../../../redux/prop-types';
import Link from '../../helpers/link';
import { formatYears } from './utils';
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
  website
}: CamperProps): JSX.Element {
  const { t } = useTranslation();

  return (
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
      />
      {yearsTopContributor.filter(Boolean).length > 0 && (
        <div>
          <br />
          <p className='text-center yearsTopContributor'>
            <FontAwesomeIcon icon={faAward} />{' '}
            <Link to={t('links:top-contributors')}>
              {t('profile.contributor')}
            </Link>
          </p>
          <p className='text-center'>{formatYears(yearsTopContributor, t)}</p>
        </div>
      )}
      <br />
    </div>
  );
}

Camper.displayName = 'Camper';

export default Camper;
