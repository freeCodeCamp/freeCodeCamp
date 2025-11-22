import React, { useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { scroller } from 'react-scroll';

import { Container, Spacer } from '@freecodecamp/ui';

import store from 'store';
import envData from '../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader } from '../components/helpers';
import Certification from '../components/settings/certification';
import MiscSettings from '../components/settings/misc-settings';
import DangerZone from '../components/settings/danger-zone';
import Email from '../components/settings/email';
import Honesty from '../components/settings/honesty';
import Privacy from '../components/settings/privacy';
import UserToken from '../components/settings/user-token';
import ExamToken from '../components/settings/exam-token';
import { hardGoTo as navigate } from '../redux/actions';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  userTokenSelector
} from '../redux/selectors';
import type { User } from '../redux/prop-types';
import {
  submitNewAbout,
  updateMyHonesty,
  updateMyQuincyEmail,
  updateMySound,
  updateMyKeyboardShortcuts,
  verifyCert,
  resetMyEditorLayout
} from '../redux/settings/actions';
import type {
  CertificationFlags,
  UIPreferences,
  EmailSettings
} from './settings-types';

const { apiLocation } = envData;

// TODO: update types for actions
type ShowSettingsProps = {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  toggleSoundMode: (sound: boolean) => void;
  resetEditorLayout: () => void;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  updateIsHonest: () => void;
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  user: User | null;
  verifyCert: typeof verifyCert;
  path?: string;
  userToken: string | null;
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  userTokenSelector,
  (
    showLoading: boolean,
    user: User | null,
    isSignedIn,
    userToken: string | null
  ) => ({
    showLoading,
    user,
    isSignedIn,
    userToken
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate,
  submitNewAbout,
  toggleSoundMode: (sound: boolean) => updateMySound({ sound }),
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) =>
    updateMyKeyboardShortcuts({ keyboardShortcuts }),
  updateIsHonest: updateMyHonesty,
  updateQuincyEmail: (sendQuincyEmail: boolean) =>
    updateMyQuincyEmail({ sendQuincyEmail }),
  resetEditorLayout: () => resetMyEditorLayout(),
  verifyCert
};

export function ShowSettings(props: ShowSettingsProps): JSX.Element {
  const { t } = useTranslation();
  const {
    createFlashMessage,
    isSignedIn,
    toggleSoundMode,
    toggleKeyboardShortcuts,
    resetEditorLayout,
    user,
    navigate,
    showLoading,
    updateQuincyEmail,
    updateIsHonest,
    verifyCert,
    userToken
  } = props;

  const isSignedInRef = useRef(isSignedIn);

  // Extract certification flags to reduce component complexity
  const certificationFlags: CertificationFlags = user
    ? {
        is2018DataVisCert: user.is2018DataVisCert,
        isA2EnglishCert: user.isA2EnglishCert,
        isApisMicroservicesCert: user.isApisMicroservicesCert,
        isJavascriptCertV9: user.isJavascriptCertV9,
        isJsAlgoDataStructCert: user.isJsAlgoDataStructCert,
        isBackEndCert: user.isBackEndCert,
        isDataVisCert: user.isDataVisCert,
        isFrontEndCert: user.isFrontEndCert,
        isInfosecQaCert: user.isInfosecQaCert,
        isQaCertV7: user.isQaCertV7,
        isInfosecCertV7: user.isInfosecCertV7,
        isFrontEndLibsCert: user.isFrontEndLibsCert,
        isFullStackCert: user.isFullStackCert,
        isRespWebDesignCert: user.isRespWebDesignCert,
        isRespWebDesignCertV9: user.isRespWebDesignCertV9,
        isSciCompPyCertV7: user.isSciCompPyCertV7,
        isDataAnalysisPyCertV7: user.isDataAnalysisPyCertV7,
        isMachineLearningPyCertV7: user.isMachineLearningPyCertV7,
        isRelationalDatabaseCertV8: user.isRelationalDatabaseCertV8,
        isCollegeAlgebraPyCertV8: user.isCollegeAlgebraPyCertV8,
        isFoundationalCSharpCertV8: user.isFoundationalCSharpCertV8,
        isJsAlgoDataStructCertV8: user.isJsAlgoDataStructCertV8
      }
    : ({} as CertificationFlags);

  // Extract UI preferences
  const uiPreferences: UIPreferences = {
    keyboardShortcuts: user?.keyboardShortcuts ?? false,
    sound: (store.get('fcc-sound') as boolean) ?? false,
    editorLayout: (store.get('challenge-layout') as boolean) ?? false
  };

  // Extract email settings
  const emailSettings: EmailSettings = user
    ? {
        email: user.email,
        isEmailVerified: user.isEmailVerified,
        sendQuincyEmail: user.sendQuincyEmail
      }
    : ({} as EmailSettings);

  const handleHashChange = () => {
    const id = window.location.hash.replace('#', '');
    if (id) {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -100
      });
    }
  };

  useEffect(() => {
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showLoading || !user) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedInRef.current) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  const { completedChallenges, isHonest, username } = user;
  return (
    <>
      <Helmet title={`${t('buttons.settings')} | freeCodeCamp.org`} />
      <Container>
        <main>
          <Spacer size='l' />
          <h1
            id='content-start'
            className='text-center'
            style={{ overflowWrap: 'break-word' }}
            data-playwright-test-label='settings-heading'
          >
            {t('settings.for', { username: username })}
          </h1>
          <MiscSettings
            keyboardShortcuts={uiPreferences.keyboardShortcuts}
            sound={uiPreferences.sound}
            editorLayout={uiPreferences.editorLayout}
            resetEditorLayout={resetEditorLayout}
            toggleKeyboardShortcuts={toggleKeyboardShortcuts}
            toggleSoundMode={toggleSoundMode}
          />
          <Spacer size='m' />
          <Privacy />
          <Spacer size='m' />
          <Email
            email={emailSettings.email}
            isEmailVerified={emailSettings.isEmailVerified}
            sendQuincyEmail={emailSettings.sendQuincyEmail}
            updateQuincyEmail={updateQuincyEmail}
          />
          <Spacer size='m' />
          <Honesty isHonest={isHonest} updateIsHonest={updateIsHonest} />
          <Spacer size='m' />
          <ExamToken email={emailSettings.email} />
          <Certification
            completedChallenges={completedChallenges}
            createFlashMessage={createFlashMessage}
            {...certificationFlags}
            isHonest={isHonest}
            username={username}
            verifyCert={verifyCert}
            isEmailVerified={emailSettings.isEmailVerified}
          />
          {userToken && (
            <>
              <Spacer size='m' />
              <UserToken />
            </>
          )}
          <Spacer size='m' />
          <DangerZone />
        </main>
      </Container>
    </>
  );
}

ShowSettings.displayName = 'ShowSettings';

export default connect(mapStateToProps, mapDispatchToProps)(ShowSettings);
