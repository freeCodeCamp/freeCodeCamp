import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faLocationDot,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';
import { connect } from 'react-redux';
import { AvatarRenderer, FullWidthRow } from '../../helpers';
import {
  isDonatingSelector,
  userPrivacySelector,
  userSocialSelector,
  userTopContributorSelector
} from '../../../redux/selectors';
import { ProfileUI } from '../../../redux/prop-types';
import { parseDate } from './utils';
import SocialIcons from './social-icons';

export type SocialProps = {
  githubProfile: string;
  website: string;
  location: string;
  username: string;
  name: string;
  picture: string;
  joinDate: string;
  about: string;
};

type BioProps = {
  yearsTopContributor: string[];
  isDonating: boolean;
  socials: SocialProps;
  isSessionUser: boolean;
  privacy: ProfileUI;
  setIsEditing: (isEditing: boolean) => void;
};

const mapStateToProps = (state: unknown, props: { username: string }) => ({
  yearsTopContributor: userTopContributorSelector(state) as string[],
  privacy: userPrivacySelector(props.username) as unknown as ProfileUI,
  socail: userSocialSelector(props.username) as unknown as SocialProps,
  isDonating: isDonatingSelector(state) as boolean
});

const Bio = ({
  yearsTopContributor,
  isDonating,
  socials,
  isSessionUser,
  setIsEditing,
  privacy
}: BioProps) => {
  const { t } = useTranslation();

  const handlePrivacy = (socials: SocialProps) => {
    const { showAbout, showLocation } = privacy;

    const { about, joinDate, location, name, ...localPrivacy } = socials;

    return {
      about: showAbout ? about : '',
      joinDate: showAbout ? joinDate : '',
      location: showLocation ? location : '',
      name: showAbout ? name : '',
      ...localPrivacy
    };
  };

  const { picture, username, name, about, joinDate, location } =
    handlePrivacy(socials);

  const isTopContributor =
    yearsTopContributor && yearsTopContributor.length > 0;

  return (
    <FullWidthRow>
      <Spacer size={'xl'} />
      <section className='card card-header'>
        <div className='avatar-camper'>
          <AvatarRenderer
            isDonating={isDonating}
            isTopContributor={isTopContributor}
            picture={picture}
          />
        </div>
        <div className='profile-edit-container'>
          <h1>@{username}</h1>
          {isSessionUser && (
            <Button
              onClick={() => {
                setIsEditing(true);
              }}
              size='small'
              className='button-fit'
              aria-label={t('aria.edit-my-profile')}
            >
              <FontAwesomeIcon icon={faPen} />
            </Button>
          )}
        </div>
        {name && <h2>{name}</h2>}
        <Spacer size={'s'} />
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
        <SocialIcons username={username} />
      </section>
    </FullWidthRow>
  );
};
export default connect(mapStateToProps)(Bio);
