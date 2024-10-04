import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Callout, Container } from '@freecodecamp/ui';

import store from 'store';
import envData from '../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { FullWidthRow, Loader, Spacer } from '../components/helpers';
import Certification from '../components/settings/certification';
import MiscSettings from '../components/settings/misc-settings';
import DangerZone from '../components/settings/danger-zone';
import Email from '../components/settings/email';
import Honesty from '../components/settings/honesty';
import Privacy from '../components/settings/privacy';
import { type ThemeProps, Themes } from '../components/settings/theme';
import UserToken from '../components/settings/user-token';
import { hardGoTo as navigate } from '../redux/actions';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  userTokenSelector
} from '../redux/selectors';
import { User } from '../redux/prop-types';
import {
  submitNewAbout,
  updateMyHonesty,
  updateMyQuincyEmail,
  updateMySound,
  updateMyTheme,
  updateMyKeyboardShortcuts,
  verifyCert
} from '../redux/settings/actions';
const { apiLocation } = envData;

// TODO: update types for actions
type ShowSettingsProps = Pick<ThemeProps, 'toggleNightMode'> & {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  toggleSoundMode: (sound: boolean) => void;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  updateIsHonest: () => void;
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  user: User;
  verifyCert: typeof verifyCert;
  path?: string;
  userToken: string | null;
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  userTokenSelector,
  (showLoading: boolean, user: User, isSignedIn, userToken: string | null) => ({
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
  toggleNightMode: (theme: Themes) => updateMyTheme({ theme }),
  toggleSoundMode: (sound: boolean) => updateMySound({ sound }),
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) =>
    updateMyKeyboardShortcuts({ keyboardShortcuts }),
  updateIsHonest: updateMyHonesty,
  updateQuincyEmail: (sendQuincyEmail: boolean) =>
    updateMyQuincyEmail({ sendQuincyEmail }),
  verifyCert
};

export function ShowSettings(props: ShowSettingsProps): JSX.Element {
  const { t } = useTranslation();
  const {
    createFlashMessage,
    isSignedIn,
    toggleNightMode,
    toggleSoundMode,
    toggleKeyboardShortcuts,
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
      isCollegeAlgebraPyCertV8,
      isFoundationalCSharpCertV8,
      isJsAlgoDataStructCertV8,
      isEmailVerified,
      isHonest,
      sendQuincyEmail,
      username,
      theme,
      keyboardShortcuts
    },
    navigate,
    showLoading,
    updateQuincyEmail,
    updateIsHonest,
    verifyCert,
    userToken
  } = props;
  const isSignedInRef = useRef(isSignedIn);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedInRef.current) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }
  const sound = (store.get('fcc-sound') as boolean) ?? false;
  return (
    <>
      <Helmet title={`${t('buttons.settings')} | freeCodeCamp.org`} />
      <Container>
        <main>
          <Spacer size='large' />
          <FullWidthRow>
            <Callout variant='info'>{t('settings.profile-note')}</Callout>
          </FullWidthRow>
          <h1
            id='content-start'
            className='text-center'
            style={{ overflowWrap: 'break-word' }}
            data-playwright-test-label='settings-heading'
          >
            {t('settings.for', { username: username })}
          </h1>
          <MiscSettings
            currentTheme={theme}
            keyboardShortcuts={keyboardShortcuts}
            sound={sound}
            toggleKeyboardShortcuts={toggleKeyboardShortcuts}
            toggleNightMode={toggleNightMode}
            toggleSoundMode={toggleSoundMode}
          />
          <Spacer size='medium' />
          <Privacy />
          <Spacer size='medium' />
          <Email
            email={email}
            isEmailVerified={isEmailVerified}
            sendQuincyEmail={sendQuincyEmail}
            updateQuincyEmail={updateQuincyEmail}
          />
          <Spacer size='medium' />
          <Honesty isHonest={isHonest} updateIsHonest={updateIsHonest} />
          <Spacer size='medium' />
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
              <Spacer size='medium' />
              <UserToken />
            </>
          )}
          <Spacer size='medium' />
          <DangerZone />
        </main>
      </Container>
    </>
  );
}

ShowSettings.displayName = 'ShowSettings';

export default connect(mapStateToProps, mapDispatchToProps)(ShowSettings);
