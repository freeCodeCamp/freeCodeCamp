import React, { useState } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { Callout, Container, Row, Spacer } from '@freecodecamp/ui';
import { FullWidthRow, Link } from '../helpers';
import Portfolio from './components/portfolio';
import Experience from './components/experience';

import About from './components/about';
import { User, ProfileUI } from './../../redux/prop-types';
import { submitProfileUI } from './../../redux/settings/actions';
import Timeline from './components/time-line';
import Camper from './components/camper';
import Certifications from './components/certifications';
import Stats from './components/stats';
import HeatMap from './components/heat-map';
import './profile.css';
import { PortfolioProjects } from './components/portfolio-projects';
import { ExperienceDisplay } from './components/experience-display';
import { ProfileCompleteness } from './components/profile-completeness';
import { WidgetHeader } from './components/widget-header';

interface ProfileProps {
  isSessionUser: boolean;
  user: User;
}

interface ProfileWithDispatchProps extends ProfileProps {
  submitProfileUI: (profileUI: ProfileUI) => void;
}

interface MessageProps {
  isSessionUser: boolean;
  t: TFunction;
  username: string;
}

type ActiveModal = 'personalInfo' | 'portfolio' | 'experience' | null;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ submitProfileUI }, dispatch);

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

function UserProfile({
  user,
  isSessionUser,
  submitProfileUI
}: ProfileWithDispatchProps): JSX.Element {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const { t } = useTranslation();

  const {
    profileUI,
    calendar,
    completedChallenges,
    username,
    points,
    portfolio,
    experience,
    githubProfile,
    linkedin,
    twitter,
    bluesky,
    website
  } = user;

  const {
    showCerts,
    showHeatMap,
    showPoints,
    showPortfolio,
    showExperience,
    showTimeLine
  } = profileUI;

  const toggleFlag = (flag: keyof ProfileUI) => {
    submitProfileUI({
      ...profileUI,
      [flag]: !profileUI[flag]
    });
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Per-widget modals */}
      {isSessionUser && (
        <>
          <About
            user={user}
            open={activeModal === 'personalInfo'}
            onClose={closeModal}
          />
          <Portfolio
            portfolio={portfolio}
            open={activeModal === 'portfolio'}
            onClose={closeModal}
          />
          <Experience
            experience={experience || []}
            open={activeModal === 'experience'}
            onClose={closeModal}
          />
        </>
      )}

      {isSessionUser && (
        <ProfileCompleteness
          name={user.name}
          about={user.about}
          picture={user.picture}
          location={user.location}
          githubProfile={githubProfile}
          linkedin={linkedin}
          twitter={twitter}
          bluesky={bluesky}
          website={website}
          portfolio={portfolio}
          experience={experience || []}
        />
      )}

      <Camper
        user={user}
        isSessionUser={isSessionUser}
        onEditBio={() => setActiveModal('personalInfo')}
        onToggleDonation={() => toggleFlag('showDonation')}
      />

      {/* Stats widget */}
      {(isSessionUser || showPoints) && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showPoints ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.stats')}
              isSessionUser={isSessionUser}
              isPrivate={isSessionUser && !showPoints}
              onToggle={
                isSessionUser ? () => toggleFlag('showPoints') : undefined
              }
            />
            <Stats points={points} calendar={calendar} />
          </section>
        </FullWidthRow>
      )}

      {/* HeatMap widget */}
      {(isSessionUser || showHeatMap) && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showHeatMap ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.activity')}
              isSessionUser={isSessionUser}
              isPrivate={isSessionUser && !showHeatMap}
              onToggle={
                isSessionUser ? () => toggleFlag('showHeatMap') : undefined
              }
            />
            <HeatMap calendar={calendar} />
          </section>
        </FullWidthRow>
      )}

      {/* Portfolio widget */}
      {(isSessionUser || (showPortfolio && portfolio.length > 0)) && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showPortfolio ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.projects')}
              isSessionUser={isSessionUser}
              isPrivate={isSessionUser && !showPortfolio}
              onToggle={
                isSessionUser ? () => toggleFlag('showPortfolio') : undefined
              }
            />
            {portfolio.length > 0 ? (
              <PortfolioProjects portfolioProjects={portfolio} />
            ) : (
              isSessionUser && (
                <p className='text-center'>{t('profile.no-portfolio')}</p>
              )
            )}
            {isSessionUser && (
              <div className='profile-add-action-row'>
                <button
                  className='profile-add-action'
                  onClick={() => setActiveModal('portfolio')}
                  type='button'
                >
                  {t('profile.add-new-project')}
                </button>
              </div>
            )}
          </section>
        </FullWidthRow>
      )}

      {/* Experience widget */}
      {(isSessionUser || (showExperience && (experience || []).length > 0)) && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showExperience ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.experience.heading')}
              isSessionUser={isSessionUser}
              isPrivate={isSessionUser && !showExperience}
              onToggle={
                isSessionUser ? () => toggleFlag('showExperience') : undefined
              }
            />
            {(experience || []).length > 0 ? (
              <ExperienceDisplay experience={experience || []} />
            ) : (
              isSessionUser && (
                <p className='text-center'>{t('profile.no-experience')}</p>
              )
            )}
            {isSessionUser && (
              <div className='profile-add-action-row'>
                <button
                  className='profile-add-action'
                  onClick={() => setActiveModal('experience')}
                  type='button'
                >
                  {t('profile.add-new-experience')}
                </button>
              </div>
            )}
          </section>
        </FullWidthRow>
      )}

      {/* Certifications widget */}
      {(isSessionUser || showCerts) && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showCerts ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.fcc-certs')}
              isSessionUser={isSessionUser}
              isPrivate={isSessionUser && !showCerts}
              onToggle={
                isSessionUser ? () => toggleFlag('showCerts') : undefined
              }
            />
            <Certifications user={user} />
          </section>
        </FullWidthRow>
      )}

      {/* Timeline widget */}
      {(isSessionUser || showTimeLine) && (
        <FullWidthRow>
          <section
            className={`card${isSessionUser && !showTimeLine ? ' card--private' : ''}`}
          >
            <WidgetHeader
              title={t('profile.timeline')}
              isSessionUser={isSessionUser}
              isPrivate={isSessionUser && !showTimeLine}
              onToggle={
                isSessionUser ? () => toggleFlag('showTimeLine') : undefined
              }
            />
            <Timeline completedMap={completedChallenges} username={username} />
          </section>
        </FullWidthRow>
      )}

      <Spacer size='m' />
    </>
  );
}

const ConnectedUserProfile = connect(null, mapDispatchToProps)(UserProfile);

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
          <ConnectedUserProfile user={user} isSessionUser={isSessionUser} />
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
