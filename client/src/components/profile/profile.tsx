import React, { useState } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Callout, Container, Modal, Row, Spacer } from '@freecodecamp/ui';
import { FullWidthRow, Link } from '../helpers';
import Portfolio from './components/portfolio';
import Experience from './components/experience';

import UsernameSettings from './components/username';
import About from './components/about';
import Internet from './components/internet';
import { User } from './../../redux/prop-types';
import Timeline from './components/time-line';
import Camper from './components/camper';
import Certifications from './components/certifications';
import Stats from './components/stats';
import HeatMap from './components/heat-map';
import './profile.css';
import { PortfolioProjects } from './components/portfolio-projects';
import { ExperienceDisplay } from './components/experience-display';

interface ProfileProps {
  isSessionUser: boolean;
  user: User;
}

interface EditModalProps {
  user: User;
  isEditing: boolean;
  isSessionUser: boolean;
  setIsEditing: (isEditing: boolean) => void;
}
interface MessageProps {
  isSessionUser: boolean;
  t: TFunction;
  username: string;
}

const UserMessage = ({ t }: Pick<MessageProps, 't'>) => {
  return (
    <FullWidthRow>
      <Callout variant='note' label={t('misc.note')}>
        {t('profile.you-change-privacy')}
      </Callout>
      <Spacer size='xl' />
    </FullWidthRow>
  );
};

const EditModal = ({ user, isEditing, setIsEditing }: EditModalProps) => {
  const { portfolio, experience, username } = user;
  const { t } = useTranslation();
  return (
    <Modal onClose={() => setIsEditing(false)} open={isEditing} size='large'>
      <Modal.Header>{t('profile.edit-my-profile')}</Modal.Header>
      <Modal.Body alignment='left'>
        <UsernameSettings username={username} setIsEditing={setIsEditing} />
        <Spacer size='m' />
        <About user={user} setIsEditing={setIsEditing} />
        <Spacer size='m' />
        <Internet user={user} setIsEditing={setIsEditing} />
        <Spacer size='m' />
        <Portfolio portfolio={portfolio} />
        <Spacer size='m' />
        <Experience experience={experience || []} />
      </Modal.Body>
    </Modal>
  );
};

const VisitorMessage = ({
  t,
  username
}: Omit<MessageProps, 'isSessionUser'>) => {
  return (
    <FullWidthRow>
      <Callout variant='note' label={t('misc.note')}>
        {t('profile.username-change-privacy', { username })}
      </Callout>
      <Spacer size='m' />
    </FullWidthRow>
  );
};

const Message = ({ isSessionUser, t, username }: MessageProps) => {
  if (isSessionUser) {
    return <UserMessage t={t} />;
  }
  return <VisitorMessage t={t} username={username} />;
};

function UserProfile({ user, isSessionUser }: ProfileProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);

  const {
    profileUI: {
      showCerts,
      showHeatMap,
      showPoints,
      showPortfolio,
      showExperience,
      showTimeLine
    },
    calendar,
    completedChallenges,
    username,
    points,
    portfolio,
    experience
  } = user;

  return (
    <>
      {isSessionUser && (
        <EditModal
          user={user}
          isEditing={isEditing}
          isSessionUser={isSessionUser}
          setIsEditing={setIsEditing}
        />
      )}
      <Camper
        user={user}
        isSessionUser={isSessionUser}
        setIsEditing={setIsEditing}
      />
      {showPoints ? <Stats points={points} calendar={calendar} /> : null}
      {showHeatMap ? <HeatMap calendar={calendar} /> : null}
      {showPortfolio ? (
        <PortfolioProjects portfolioProjects={portfolio} />
      ) : null}
      {showExperience ? (
        <ExperienceDisplay experience={experience || []} />
      ) : null}
      {showCerts ? <Certifications user={user} /> : null}
      {showTimeLine ? (
        <Timeline completedMap={completedChallenges} username={username} />
      ) : null}
      <Spacer size='m' />
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
      <Spacer size='m' />
      <Container>
        <Spacer size='m' />
        {isLocked && (
          <Message username={username} isSessionUser={isSessionUser} t={t} />
        )}
        {showUserProfile && (
          <UserProfile user={user} isSessionUser={isSessionUser} />
        )}
        {!isSessionUser && (
          <Row className='text-center'>
            <Link to={`/user/${username}/report-user`}>
              {t('buttons.flag-user')}
            </Link>
          </Row>
        )}
        <Spacer size='m' />
      </Container>
    </>
  );
}

Profile.displayName = 'Profile';

export default Profile;
