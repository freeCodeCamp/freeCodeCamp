import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { AvatarRenderer, FullWidthRow } from '../../helpers';
import { User } from '../../../redux/prop-types';
import { parseDate } from './utils';
import { WidgetHeader } from './widget-header';

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
    profileUI: { showAbout, showLocation, showDonation }
  } = user;

  const { t } = useTranslation();

  const isTopContributor =
    yearsTopContributor && yearsTopContributor.length > 0;

  const shouldShowName = isSessionUser || showAbout;
  const shouldShowAbout = isSessionUser || showAbout;
  const shouldShowLocation = isSessionUser || showLocation;

  return (
    <FullWidthRow>
      <section className='card card-header bio-card'>
        {isSessionUser && (
          <WidgetHeader
            title={t('settings.headings.personal-info')}
            isSessionUser={isSessionUser}
          />
        )}
        <div className='bio-content'>
          <div className='avatar-camper'>
            <AvatarRenderer
              isDonating={isDonating && showDonation}
              isTopContributor={isTopContributor}
              picture={picture}
            />
          </div>
          <div>
            <div className='profile-edit-container'>
              <h1>@{username}</h1>
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
            {isSessionUser && onEditBio && (
              <div className='profile-add-action-row'>
                <button
                  className='profile-add-action'
                  onClick={onEditBio}
                  type='button'
                >
                  {t('profile.edit-personal-info')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </FullWidthRow>
  );
};
export default Bio;
