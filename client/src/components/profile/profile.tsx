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

const profileVisibilityToggles: ReadonlyArray<{
  flag: keyof ProfileUI;
  labelKey: string;
}> = [
  { flag: 'isLocked', labelKey: 'settings.labels.my-profile' },
  { flag: 'showDonation', labelKey: 'settings.labels.my-donations' },
  { flag: 'showPoints', labelKey: 'settings.labels.my-points' },
  { flag: 'showHeatMap', labelKey: 'settings.labels.my-heatmap' },
  { flag: 'showPortfolio', labelKey: 'settings.labels.my-portfolio' },
  { flag: 'showExperience', labelKey: 'settings.labels.my-experience' },
  { flag: 'showCerts', labelKey: 'settings.labels.my-certs' },
  { flag: 'showTimeLine', labelKey: 'settings.labels.my-timeline' }
];

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
  const [activePortfolioItemId, setActivePortfolioItemId] = useState<
    string | null
  >(null);
  const [activeExperienceItemId, setActiveExperienceItemId] = useState<
    string | null
  >(null);
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

  const closeModal = () => {
    setActiveModal(null);
    setActivePortfolioItemId(null);
    setActiveExperienceItemId(null);
  };

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
            editingItemId={activePortfolioItemId}
            onClose={closeModal}
          />
          <Experience
            experience={experience || []}
            open={activeModal === 'experience'}
            editingItemId={activeExperienceItemId}
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
          isProfilePublic={!profileUI.isLocked}
          githubProfile={githubProfile}
          linkedin={linkedin}
          twitter={twitter}
          bluesky={bluesky}
          website={website}
          portfolio={portfolio}
          experience={experience || []}
        />
      )}

      {isSessionUser && (
        <FullWidthRow>
          <section className='card'>
            <WidgetHeader
              title={t('settings.labels.my-profile')}
              isSessionUser={isSessionUser}
              isPrivate={profileUI.isLocked}
            />
            <div className='profile-toggle-list'>
              {profileVisibilityToggles.map(({ flag, labelKey }) => {
                const label = t(labelKey);
                const isPrivate =
                  flag === 'isLocked' ? profileUI.isLocked : !profileUI[flag];

                return (
                  <div className='profile-toggle-row' key={flag}>
                    <span>{label}</span>
                    <label className='widget-toggle'>
                      <input
                        type='checkbox'
                        checked={!isPrivate}
                        onChange={() => toggleFlag(flag)}
                        aria-label={
                          isPrivate
                            ? t('aria.make-public', { section: label })
                            : t('aria.make-private', { section: label })
                        }
                      />
                      <span className='widget-toggle-slider' />
                    </label>
                  </div>
                );
              })}
            </div>
          </section>
        </FullWidthRow>
      )}

      <Camper
        user={user}
        isSessionUser={isSessionUser}
        onEditBio={() => setActiveModal('personalInfo')}
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
            />
            {portfolio.length > 0 ? (
              <PortfolioProjects
                portfolioProjects={portfolio}
                onEditProject={
                  isSessionUser
                    ? id => {
                        setActivePortfolioItemId(id);
                        setActiveModal('portfolio');
                      }
                    : undefined
                }
              />
            ) : (
              isSessionUser && (
                <p className='text-center'>{t('profile.no-portfolio')}</p>
              )
            )}
            {isSessionUser && (
              <div className='profile-add-action-row'>
                <button
                  className='profile-add-action'
                  onClick={() => {
                    setActivePortfolioItemId(null);
                    setActiveModal('portfolio');
                  }}
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
            />
            {(experience || []).length > 0 ? (
              <ExperienceDisplay
                experience={experience || []}
                onEditExperience={
                  isSessionUser
                    ? id => {
                        setActiveExperienceItemId(id);
                        setActiveModal('experience');
                      }
                    : undefined
                }
              />
            ) : (
              isSessionUser && (
                <p className='text-center'>{t('profile.no-experience')}</p>
              )
            )}
            {isSessionUser && (
              <div className='profile-add-action-row'>
                <button
                  className='profile-add-action'
                  onClick={() => {
                    setActiveExperienceItemId(null);
                    setActiveModal('experience');
                  }}
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
  const showPrivacyNudge = isLocked;

  return (
    <>
      <Helmet>
        <title>{t('buttons.profile')} | freeCodeCamp.org</title>
      </Helmet>
      <Spacer size='m' />
      <Container>
        <Spacer size='m' />
        {showPrivacyNudge && (
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
