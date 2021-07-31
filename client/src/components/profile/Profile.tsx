import React from 'react';
import { Grid, Row } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { TFunction, useTranslation } from 'react-i18next';

import { CurrentChallengeLink, FullWidthRow, Link, Spacer } from '../helpers';
import Camper from './components/Camper';
import HeatMap from './components/HeatMap';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Timeline from './components/TimeLine';

interface IProfileProps {
  isSessionUser: boolean;
  user: {
    profileUI: {
      isLocked: boolean;
      showAbout: boolean;
      showCerts: boolean;
      showDonation: boolean;
      showHeatMap: boolean;
      showLocation: boolean;
      showName: boolean;
      showPoints: boolean;
      showPortfolio: boolean;
      showTimeLine: boolean;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    calendar: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    completedChallenges: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    portfolio: any[];
    about: string;
    githubProfile: string;
    isGithub: boolean;
    isLinkedIn: boolean;
    isTwitter: boolean;
    isWebsite: boolean;
    joinDate: string;
    linkedin: string;
    location: string;
    name: string;
    picture: string;
    points: number;
    twitter: string;
    username: string;
    website: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    yearsTopContributor: any[];
    isDonating: boolean;
  };
}

function renderMessage(
  isSessionUser: boolean,
  username: string,
  t: TFunction
): JSX.Element {
  return isSessionUser ? (
    <>
      <FullWidthRow>
        <h2 className='text-center'>{t('profile.you-not-public')}</h2>
      </FullWidthRow>
      <FullWidthRow>
        <p className='alert alert-info'>{t('profile.you-change-privacy')}</p>
      </FullWidthRow>
      <Spacer />
    </>
  ) : (
    <>
      <FullWidthRow>
        <h2 className='text-center' style={{ overflowWrap: 'break-word' }}>
          {t('profile.username-not-public', { username: username })}
        </h2>
      </FullWidthRow>
      <FullWidthRow>
        <p className='alert alert-info'>
          {t('profile.username-change-privacy', { username: username })}
        </p>
      </FullWidthRow>
      <Spacer />
      <FullWidthRow>
        <CurrentChallengeLink>{t('buttons.take-me')}</CurrentChallengeLink>
      </FullWidthRow>
      <Spacer />
    </>
  );
}

function renderProfile(user: IProfileProps['user']): JSX.Element {
  const {
    profileUI: {
      showAbout = false,
      showCerts = false,
      showDonation = false,
      showHeatMap = false,
      showLocation = false,
      showName = false,
      showPoints = false,
      showPortfolio = false,
      showTimeLine = false
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    calendar,
    completedChallenges,
    githubProfile,
    isLinkedIn,
    isGithub,
    isTwitter,
    isWebsite,
    linkedin,
    twitter,
    website,
    name,
    username,
    joinDate,
    location,
    points,
    picture,
    portfolio,
    about,
    yearsTopContributor,
    isDonating
  } = user;
  return (
    <>
      <Camper
        about={showAbout ? about : ''}
        githubProfile={githubProfile}
        isDonating={showDonation ? isDonating : false}
        isGithub={isGithub}
        isLinkedIn={isLinkedIn}
        isTwitter={isTwitter}
        isWebsite={isWebsite}
        joinDate={showAbout ? joinDate : ''}
        linkedin={linkedin}
        location={showLocation ? location : ''}
        name={showName ? name : ''}
        picture={picture}
        points={showPoints ? points : null}
        twitter={twitter}
        username={username}
        website={website}
        yearsTopContributor={yearsTopContributor}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {showHeatMap ? <HeatMap calendar={calendar} /> : null}
      {showCerts ? <Certifications username={username} /> : null}
      {showPortfolio ? <Portfolio portfolio={portfolio} /> : null}
      {showTimeLine ? (
        <Timeline completedMap={completedChallenges} username={username} />
      ) : null}
      <Spacer />
    </>
  );
}

function Profile({ user, isSessionUser }: IProfileProps): JSX.Element {
  const { t } = useTranslation();
  const {
    profileUI: { isLocked = true },
    username
  } = user;

  return (
    <>
      <Helmet>
        <title>{t('buttons.profile')} | freeCodeCamp.org</title>
      </Helmet>
      <Spacer />
      <Grid>
        <Spacer />
        {isLocked ? renderMessage(isSessionUser, username, t) : null}
        {!isLocked || isSessionUser ? renderProfile(user) : null}
        {isSessionUser ? null : (
          <Row className='text-center'>
            <Link to={`/user/${username}/report-user`}>
              {t('buttons.flag-user')}
            </Link>
          </Row>
        )}
        <Spacer />
      </Grid>
    </>
  );
}

Profile.displayName = 'Profile';

export default Profile;
