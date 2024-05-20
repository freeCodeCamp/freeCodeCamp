import React from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Alert, Container, Row } from '@freecodecamp/ui';
import { FullWidthRow, Link, Spacer } from '../helpers';
import { User } from './../../redux/prop-types';
import Timeline from './components/time-line';
import Camper from './components/camper';
import Certifications from './components/certifications';
import Stats from './components/stats';
import HeatMap from './components/heat-map';
import { PortfolioProjects } from './components/portfolio-projects';

interface ProfileProps {
  isSessionUser: boolean;
  user: User;
}
interface MessageProps {
  isSessionUser: boolean;
  t: TFunction;
  username: string;
}

const UserMessage = ({ t }: Pick<MessageProps, 't'>) => {
  return (
    <FullWidthRow>
      <Alert variant='info'>{t('profile.you-change-privacy')}</Alert>
      <Spacer size='medium' />
    </FullWidthRow>
  );
};

const VisitorMessage = ({
  t,
  username
}: Omit<MessageProps, 'isSessionUser'>) => {
  return (
    <FullWidthRow>
      <Alert variant='info'>
        {t('profile.username-change-privacy', { username })}
      </Alert>
      <Spacer size='medium' />
    </FullWidthRow>
  );
};

const Message = ({ isSessionUser, t, username }: MessageProps) => {
  if (isSessionUser) {
    return <UserMessage t={t} />;
  }
  return <VisitorMessage t={t} username={username} />;
};

function UserProfile({ user }: { user: ProfileProps['user'] }): JSX.Element {
  const {
    profileUI: {
      showAbout,
      showCerts,
      showDonation,
      showHeatMap,
      showLocation,
      showName,
      showPoints,
      showPortfolio,
      showTimeLine
    },
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
        twitter={twitter}
        username={username}
        website={website}
        yearsTopContributor={yearsTopContributor}
      />
      {showPoints ? <Stats points={points} calendar={calendar} /> : null}
      {showHeatMap ? <HeatMap calendar={calendar} /> : null}
      {showCerts ? <Certifications username={username} /> : null}
      {showPortfolio ? (
        <PortfolioProjects portfolioProjects={portfolio} />
      ) : null}
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
    profileUI: { isLocked },
    username
  } = user;

  const showUserProfile = !isLocked || isSessionUser;

  return (
    <>
      <Helmet>
        <title>{t('buttons.profile')} | freeCodeCamp.org</title>
      </Helmet>
      <Spacer size='medium' />
      <Container>
        <Spacer size='medium' />
        {isLocked && (
          <Message username={username} isSessionUser={isSessionUser} t={t} />
        )}
        {showUserProfile && <UserProfile user={user} />}
        {!isSessionUser && (
          <Row className='text-center'>
            <Link to={`/user/${username}/report-user`}>
              {t('buttons.flag-user')}
            </Link>
          </Row>
        )}
        <Spacer size='medium' />
      </Container>
    </>
  );
}

Profile.displayName = 'Profile';

export default Profile;
