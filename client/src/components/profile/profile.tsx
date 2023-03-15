import { Grid, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
import { TFunction, useTranslation } from 'react-i18next';

import { FullWidthRow, Link, Spacer } from '../helpers';
import { User } from './../../redux/prop-types';
import Timeline from './components/time-line';
import Camper from './components/camper';
import Certifications from './components/certifications';
import HeatMap from './components/heat-map';
import Portfolio from './components/portfolio';

interface ProfileProps {
  isSessionUser: boolean;
  user: User;
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
      <Spacer size='medium' />
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
      <Spacer size='medium' />
    </>
  );
}

function renderProfile(user: ProfileProps['user']): JSX.Element {
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
      <Spacer size='medium' />
    </>
  );
}

function Profile({ user, isSessionUser }: ProfileProps): JSX.Element {
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
      <Spacer size='medium' />
      <Grid>
        <Spacer size='medium' />
        {isLocked ? renderMessage(isSessionUser, username, t) : null}
        {!isLocked || isSessionUser ? renderProfile(user) : null}
        {isSessionUser ? null : (
          <Row className='text-center'>
            <Link to={`/user/${username}/report-user`}>
              {t('buttons.flag-user')}
            </Link>
          </Row>
        )}
        <Spacer size='medium' />
      </Grid>
    </>
  );
}

Profile.displayName = 'Profile';

export default Profile;
