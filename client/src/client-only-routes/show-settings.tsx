import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Spacer } from '@freecodecamp/ui';
import { useFeatureIsOn } from '@growthbook/growthbook-react';
import store from 'store';
import { Link as ScrollLink } from 'react-scroll';
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

import './show-settings.css';
import { currentCertifications } from '../../../shared-dist/config/certification-settings';

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
  const examTokenFlag = useFeatureIsOn('exam-token-widget');

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
      <div className='settings-container'>
        <aside className='settings-ledger'>
          <h2 data-playwright-test-label='settings-ledger-heading'>
            {t('settings.headings.ledger')}
          </h2>
          <ul>
            <li>
              <ScrollLink
                to='settings-account'
                className='ledger-anchor-btn'
                smooth={true}
                offset={-48}
                duration={300}
              >
                {t('settings.headings.account')}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='settings-privacy'
                className='ledger-anchor-btn'
                smooth={true}
                offset={-48}
                duration={300}
              >
                {t('settings.headings.privacy')}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='settings-email'
                className='ledger-anchor-btn'
                smooth={true}
                offset={-48}
                duration={300}
              >
                {t('settings.email.heading')}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='settings-honesty'
                className='ledger-anchor-btn'
                smooth={true}
                offset={-48}
                duration={300}
              >
                {t('settings.headings.honesty')}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to='settings-certifications'
                className='ledger-anchor-btn'
                smooth={true}
                offset={-48}
                duration={300}
              >
                {t('settings.headings.certs')}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='settings-legacy-certs'
                className='ledger-anchor-btn'
                smooth={true}
                offset={-48}
                duration={300}
              >
                {t('settings.headings.legacy-certs')}
              </ScrollLink>
            </li>
            <li>
              <hr />
            </li>
          </ul>
          <h2>{t('settings.headings.certs')}</h2>
          <ul>
            {currentCertifications.map(slug => (
              <li key={slug}>
                <ScrollLink
                  to={`cert-${slug}`}
                  className={'ledger-anchor-btn'}
                  smooth={true}
                  offset={-48}
                  duration={300}
                >
                  {t(`certification.title.${slug}`, slug)}
                </ScrollLink>
                <br />
              </li>
            ))}
          </ul>
        </aside>
        <main className='settings-main'>
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
            keyboardShortcuts={keyboardShortcuts}
            sound={sound}
            editorLayout={editorLayout}
            resetEditorLayout={resetEditorLayout}
            toggleKeyboardShortcuts={toggleKeyboardShortcuts}
            toggleSoundMode={toggleSoundMode}
          />
          <Spacer size='m' />
          <Privacy />
          <Spacer size='m' />
          <Email
            email={email}
            isEmailVerified={isEmailVerified}
            sendQuincyEmail={sendQuincyEmail}
            updateQuincyEmail={updateQuincyEmail}
          />
          <Spacer size='m' />
          <Honesty isHonest={isHonest} updateIsHonest={updateIsHonest} />
          <Spacer size='m' />
          {examTokenFlag && <ExamToken />}
          <Certification
            completedChallenges={completedChallenges}
            createFlashMessage={createFlashMessage}
            is2018DataVisCert={is2018DataVisCert}
            isApisMicroservicesCert={isApisMicroservicesCert}
            isBackEndCert={isBackEndCert}
            isDataAnalysisPyCertV7={isDataAnalysisPyCertV7}
            isDataVisCert={isDataVisCert}
            isCollegeAlgebraPyCertV8={isCollegeAlgebraPyCertV8}
            isFoundationalCSharpCertV8={isFoundationalCSharpCertV8}
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
            isJsAlgoDataStructCertV8={isJsAlgoDataStructCertV8}
            username={username}
            verifyCert={verifyCert}
            isEmailVerified={isEmailVerified}
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
      </div>
    </>
  );
}

ShowSettings.displayName = 'ShowSettings';

export default connect(mapStateToProps, mapDispatchToProps)(ShowSettings);
