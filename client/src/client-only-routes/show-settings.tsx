import React, { useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Spacer } from '@freecodecamp/ui';
import store from 'store';
import { scroller, Element as ScrollElement } from 'react-scroll';
import envData from '../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader } from '../components/helpers';
import Certification from '../components/settings/certification';
import Account from '../components/settings/account';
import DangerZone from '../components/settings/danger-zone';
import Email from '../components/settings/email';
import Honesty from '../components/settings/honesty';
import Privacy from '../components/settings/privacy';
import UserToken from '../components/settings/user-token';
import ExamToken from '../components/settings/exam-token';
import SettingsSidebarNav from '../components/settings/settings-sidebar-nav';
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

import './show-settings.css';

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

  const {
    completedChallenges,
    email,
    is2018DataVisCert,
    isA2EnglishCert,
    isApisMicroservicesCert,
    isJavascriptCertV9,
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
    isRespWebDesignCertV9,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8,
    isFoundationalCSharpCertV8,
    isJsAlgoDataStructCertV8,
    isEmailVerified,
    isHonest,
    sendQuincyEmail,
    username,
    keyboardShortcuts
  } = user;

  const sound = (store.get('fcc-sound') as boolean) ?? false;
  const editorLayout = (store.get('challenge-layout') as boolean) ?? false;
  return (
    <>
      <Helmet title={`${t('buttons.settings')} | freeCodeCamp.org`} />
      <div className='settings-container' id='settings-container'>
        <SettingsSidebarNav userToken={userToken} />
        <main className='settings-main'>
          <Spacer size='l' />
          <ScrollElement name='username'>
            <h1
              id='content-start'
              className='text-center'
              style={{ overflowWrap: 'break-word' }}
              data-playwright-test-label='settings-heading'
            >
              {t('settings.for', { username: username })}
            </h1>
          </ScrollElement>
          <Spacer size='m' />
          <ScrollElement name='account'>
            <Account
              keyboardShortcuts={keyboardShortcuts}
              sound={sound}
              editorLayout={editorLayout}
              resetEditorLayout={resetEditorLayout}
              toggleKeyboardShortcuts={toggleKeyboardShortcuts}
              toggleSoundMode={toggleSoundMode}
            />
          </ScrollElement>
          <Spacer size='m' />
          <ScrollElement name='privacy'>
            <Privacy />
          </ScrollElement>
          <Spacer size='m' />
          <ScrollElement name='email'>
            <Email
              email={email}
              isEmailVerified={isEmailVerified}
              sendQuincyEmail={sendQuincyEmail}
              updateQuincyEmail={updateQuincyEmail}
            />
          </ScrollElement>
          <Spacer size='m' />
          <ScrollElement name='honesty'>
            <Honesty isHonest={isHonest} updateIsHonest={updateIsHonest} />
          </ScrollElement>
          <Spacer size='m' />
          <ScrollElement name='exam-token'>
            <ExamToken email={email} />
          </ScrollElement>
          <Spacer size='m' />
          <ScrollElement name='certifications'>
            <Certification
              completedChallenges={completedChallenges}
              createFlashMessage={createFlashMessage}
              is2018DataVisCert={is2018DataVisCert}
              isA2EnglishCert={isA2EnglishCert}
              isApisMicroservicesCert={isApisMicroservicesCert}
              isBackEndCert={isBackEndCert}
              isDataAnalysisPyCertV7={isDataAnalysisPyCertV7}
              isDataVisCert={isDataVisCert}
              isCollegeAlgebraPyCertV8={isCollegeAlgebraPyCertV8}
              isFoundationalCSharpCertV8={isFoundationalCSharpCertV8}
              isFrontEndCert={isFrontEndCert}
              isFrontEndLibsCert={isFrontEndLibsCert}
              isFullStackCert={isFullStackCert}
              isJavascriptCertV9={isJavascriptCertV9}
              isHonest={isHonest}
              isInfosecCertV7={isInfosecCertV7}
              isInfosecQaCert={isInfosecQaCert}
              isJsAlgoDataStructCert={isJsAlgoDataStructCert}
              isMachineLearningPyCertV7={isMachineLearningPyCertV7}
              isQaCertV7={isQaCertV7}
              isRelationalDatabaseCertV8={isRelationalDatabaseCertV8}
              isRespWebDesignCert={isRespWebDesignCert}
              isRespWebDesignCertV9={isRespWebDesignCertV9}
              isSciCompPyCertV7={isSciCompPyCertV7}
              isJsAlgoDataStructCertV8={isJsAlgoDataStructCertV8}
              username={username}
              verifyCert={verifyCert}
              isEmailVerified={isEmailVerified}
            />
            <Spacer size='m' />
          </ScrollElement>
          {userToken && (
            <>
              <ScrollElement name='user-token'>
                <UserToken />
              </ScrollElement>
              <Spacer size='m' />
            </>
          )}
          <ScrollElement name='danger-zone'>
            <DangerZone />
          </ScrollElement>
        </main>
      </div>
    </>
  );
}

ShowSettings.displayName = 'ShowSettings';

export default connect(mapStateToProps, mapDispatchToProps)(ShowSettings);
