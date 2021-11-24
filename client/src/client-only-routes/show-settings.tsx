import { Grid } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
import Certification from '../components/settings/certification';
import About from '../components/settings/about';
import DangerZone from '../components/settings/danger-zone';
import Email from '../components/settings/email';
import Honesty from '../components/settings/honesty';
import Internet from '../components/settings/internet';
import Portfolio from '../components/settings/portfolio';
import Privacy from '../components/settings/privacy';
import { Themes } from '../components/settings/theme';
import WebhookToken from '../components/settings/webhook-token';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';
import { User } from '../redux/prop-types';
import { submitNewAbout, updateUserFlag, verifyCert } from '../redux/settings';

const { apiLocation, deploymentEnv } = envData;

// TODO: update types for actions
interface ShowSettingsProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  submitNewAbout: () => void;
  toggleNightMode: (theme: Themes) => void;
  toggleSoundMode: (sound: boolean) => void;
  updateInternetSettings: () => void;
  updateIsHonest: () => void;
  updatePortfolio: () => void;
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  user: User;
  verifyCert: () => void;
  path?: string;
}

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate,
  submitNewAbout,
  toggleNightMode: (theme: Themes) => updateUserFlag({ theme }),
  toggleSoundMode: (sound: boolean) => updateUserFlag({ sound }),
  updateInternetSettings: updateUserFlag,
  updateIsHonest: updateUserFlag,
  updatePortfolio: updateUserFlag,
  updateQuincyEmail: (sendQuincyEmail: boolean) =>
    updateUserFlag({ sendQuincyEmail }),
  verifyCert
};

export function ShowSettings(props: ShowSettingsProps): JSX.Element {
  const { t } = useTranslation();
  const {
    createFlashMessage,
    isSignedIn,
    submitNewAbout,
    toggleNightMode,
    toggleSoundMode,
    user: {
      completedChallenges,
      email,
      is2018DataVisCert,
      isApisMicroservicesCert,
      isJsAlgoDataStructCert,
      isBackEndCert,
      isDataVisCert,
      isFrontEndCert,
      isInfosecQaCert,
      isQaCertV7,
      isInfosecCertV7,
      isFrontEndLibsCert,
      isFullStackCert,
      isRespWebDesignCert,
      isSciCompPyCertV7,
      isDataAnalysisPyCertV7,
      isMachineLearningPyCertV7,
      isRelationalDatabaseCertV8,
      isEmailVerified,
      isHonest,
      sendQuincyEmail,
      username,
      about,
      picture,
      points,
      theme,
      sound,
      location,
      name,
      githubProfile,
      linkedin,
      twitter,
      website,
      portfolio
    },
    navigate,
    showLoading,
    updateQuincyEmail,
    updateInternetSettings,
    updatePortfolio,
    updateIsHonest,
    verifyCert
  } = props;

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet title={`${t('buttons.settings')} | freeCodeCamp.org`} />
      <Grid>
        <main>
          <Spacer size={2} />
          <h1 className='text-center' style={{ overflowWrap: 'break-word' }}>
            {t('settings.for', { username: username })}
          </h1>
          <About
            about={about}
            currentTheme={theme}
            location={location}
            name={name}
            picture={picture}
            points={points}
            sound={sound}
            submitNewAbout={submitNewAbout}
            toggleNightMode={toggleNightMode}
            toggleSoundMode={toggleSoundMode}
            username={username}
          />
          <Spacer />
          <Privacy />
          <Spacer />
          <Email
            email={email}
            isEmailVerified={isEmailVerified}
            sendQuincyEmail={sendQuincyEmail}
            updateQuincyEmail={updateQuincyEmail}
          />
          <Spacer />
          <Internet
            githubProfile={githubProfile}
            linkedin={linkedin}
            twitter={twitter}
            updateInternetSettings={updateInternetSettings}
            website={website}
          />
          <Spacer />
          {/* @ts-expect-error Portfolio types mismatch */}
          <Portfolio portfolio={portfolio} updatePortfolio={updatePortfolio} />
          <Spacer />
          <Honesty isHonest={isHonest} updateIsHonest={updateIsHonest} />
          <Spacer />
          <Certification
            completedChallenges={completedChallenges}
            createFlashMessage={createFlashMessage}
            is2018DataVisCert={is2018DataVisCert}
            isApisMicroservicesCert={isApisMicroservicesCert}
            isBackEndCert={isBackEndCert}
            isDataAnalysisPyCertV7={isDataAnalysisPyCertV7}
            isDataVisCert={isDataVisCert}
            isFrontEndCert={isFrontEndCert}
            isFrontEndLibsCert={isFrontEndLibsCert}
            isFullStackCert={isFullStackCert}
            isHonest={isHonest}
            isInfosecCertV7={isInfosecCertV7}
            isInfosecQaCert={isInfosecQaCert}
            isJsAlgoDataStructCert={isJsAlgoDataStructCert}
            isMachineLearningPyCertV7={isMachineLearningPyCertV7}
            isQaCertV7={isQaCertV7}
            isRelationalDatabaseCertV8={isRelationalDatabaseCertV8}
            isRespWebDesignCert={isRespWebDesignCert}
            isSciCompPyCertV7={isSciCompPyCertV7}
            username={username}
            verifyCert={verifyCert}
          />
          {deploymentEnv == 'staging' && <Spacer />}
          {deploymentEnv == 'staging' && <WebhookToken />}
          <Spacer />
          <DangerZone />
        </main>
      </Grid>
    </>
  );
}

ShowSettings.displayName = 'ShowSettings';

export default connect(mapStateToProps, mapDispatchToProps)(ShowSettings);
