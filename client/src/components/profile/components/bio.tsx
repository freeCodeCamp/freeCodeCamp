import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faLocationDot,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';
import { AvatarRenderer, FullWidthRow } from '../../helpers';
import { User } from '../../../redux/prop-types';
import { parseDate } from './utils';
import SocialIcons from './social-icons';

type BioProps = {
  user: User;
  isSessionUser: boolean;
  onEditBio?: () => void;
};

const Bio = ({ user, isSessionUser, onEditBio }: BioProps) => {
  const {
    joinDate,
    location,
    username,
    name,
    about,
    isDonating,
    yearsTopContributor,
    picture,
    githubProfile,
    linkedin,
    twitter,
    bluesky,
    website,
    profileUI: { showAbout, showLocation, showDonation }
  } = user;

  const { t } = useTranslation();

  const isTopContributor =
    yearsTopContributor && yearsTopContributor.length > 0;

  const shouldShowName = isSessionUser || showAbout;
  const shouldShowAbout = isSessionUser || showAbout;
  const shouldShowLocation = isSessionUser || showLocation;
  const hasSocialLinks =
    githubProfile || linkedin || twitter || bluesky || website;

  return (
    <FullWidthRow>
      <section className='card card-header bio-card'>
        <div className='bio-content'>
          <div className='avatar-camper'>
            <AvatarRenderer
              isDonating={isDonating && showDonation}
              isTopContributor={isTopContributor}
              picture={picture}
            />
          </div>
          <div className='bio-main'>
            <div className='profile-title-row'>
              <div className='profile-edit-container'>
                <h1>@{username}</h1>
              </div>
              {isSessionUser && (
                <div className='bio-header-actions'>
                  {onEditBio && (
                    <Button
                      className='widget-edit-btn'
                      aria-label={t('profile.edit-personal-info')}
                      onClick={onEditBio}
                      size='small'
                      type='button'
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </Button>
                  )}
                </div>
              )}
            </div>
            {name && shouldShowName && <h2>{name}</h2>}
            {shouldShowAbout && <p>{about}</p>}
            <div className='profile-meta-container'>
              {joinDate && shouldShowAbout && (
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{parseDate(joinDate, t)}</span>
                </div>
              )}
              {location && shouldShowLocation && (
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{t('profile.from', { location })}</span>
                </div>
              )}
            </div>
            {(isSessionUser || hasSocialLinks) && (
              <div className='bio-internet-section'>
                {hasSocialLinks ? (
                  <SocialIcons
                    githubProfile={githubProfile}
                    linkedin={linkedin}
                    twitter={twitter}
                    bluesky={bluesky}
                    username={username}
                    website={website}
                  />
                ) : (
                  isSessionUser && <p>{t('profile.no-social-links')}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </FullWidthRow>
  );
};
export default Bio;
