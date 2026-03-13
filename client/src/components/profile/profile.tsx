import React, { useEffect, useState } from 'react';
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
import ToggleRadioSetting from '../settings/toggle-radio-setting';
import BlockSaveButton from '../helpers/form/block-save-button';

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
  explainKey?: string;
}> = [
  { flag: 'isLocked', labelKey: 'settings.labels.my-profile' },
  {
    flag: 'showName',
    labelKey: 'settings.labels.my-name',
    explainKey: 'settings.private-name'
  },
  {
    flag: 'showLocation',
    labelKey: 'settings.labels.my-location'
  },
  {
    flag: 'showAbout',
    labelKey: 'settings.labels.my-about'
  },
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
  const [isMyProfileExpanded, setIsMyProfileExpanded] = useState(true);
  const [privacyDraft, setPrivacyDraft] = useState(user.profileUI);
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

  useEffect(() => {
    setPrivacyDraft(profileUI);
  }, [profileUI]);

  const togglePrivacyFlag = (flag: keyof ProfileUI) => () => {
    setPrivacyDraft(prev => ({
      ...prev,
      [flag]: !prev[flag]
    }));
  };

  const isPrivacyChanged = profileVisibilityToggles.some(
    ({ flag }) => privacyDraft[flag] !== profileUI[flag]
  );

  const handlePrivacySave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPrivacyChanged) return;
    submitProfileUI(privacyDraft);
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
              title={t('profile.privacy-title')}
              isSessionUser={isSessionUser}
              isPrivate={profileUI.isLocked}
              onCollapseToggle={() => setIsMyProfileExpanded(prev => !prev)}
              isExpanded={isMyProfileExpanded}
              collapseLabel={t('profile.edit-privacy-settings')}
            />
            {isMyProfileExpanded && (
              <form onSubmit={handlePrivacySave}>
                <div className='profile-toggle-list'>
                  {profileVisibilityToggles.map(
                    ({ flag, labelKey, explainKey }) => {
                      const label = t(labelKey);
                      const isPrivate =
                        flag === 'isLocked'
                          ? privacyDraft.isLocked
                          : !privacyDraft[flag];

                      return (
                        <ToggleRadioSetting
                          key={flag}
                          action={label}
                          explain={explainKey ? t(explainKey) : undefined}
                          flag={isPrivate}
                          flagName={flag}
                          offLabel={t('buttons.public')}
                          onLabel={t('buttons.private')}
                          toggleFlag={togglePrivacyFlag(flag)}
                        />
                      );
                    }
                  )}
                </div>
                <div className='profile-privacy-save-btn'>
                  <BlockSaveButton
                    disabled={!isPrivacyChanged}
                    bgSize='large'
                    {...(!isPrivacyChanged && { tabIndex: -1 })}
                  >
                    {t('buttons.save')}
                  </BlockSaveButton>
                </div>
              </form>
            )}
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
              onAdd={() => {
                setActivePortfolioItemId(null);
                setActiveModal('portfolio');
              }}
              addLabel={t('profile.add-new-project')}
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
              onAdd={() => {
                setActiveExperienceItemId(null);
                setActiveModal('experience');
              }}
              addLabel={t('profile.add-new-experience')}
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
