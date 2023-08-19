import { Certification } from '../../../config/certification-settings';
import { ns as MainApp } from './action-types';

export const savedChallengesSelector = state =>
  userSelector(state).savedChallenges || [];
export const completedChallengesSelector = state =>
  userSelector(state).completedChallenges || [];
export const partiallyCompletedChallengesSelector = state =>
  userSelector(state).partiallyCompletedChallenges || [];
export const currentChallengeIdSelector = state =>
  state[MainApp].currentChallengeId;
export const completionCountSelector = state => state[MainApp].completionCount;
export const showMultipleProgressModalsSelector = state =>
  state[MainApp].showMultipleProgressModals;
export const completionCountWhenShownProgressModalSelector = state =>
  state[MainApp].completionCountWhenShownProgressModal;
export const progressDonationModalShownSelector = state =>
  state[MainApp].progressDonationModalShown;
export const isDonatingSelector = state => userSelector(state).isDonating;
export const isOnlineSelector = state => state[MainApp].isOnline;
export const isServerOnlineSelector = state => state[MainApp].isServerOnline;
export const isSignedInSelector = state => !!state[MainApp].appUsername;
export const isDonationModalOpenSelector = state =>
  state[MainApp].showDonationModal;
export const isSignoutModalOpenSelector = state =>
  state[MainApp].showSignoutModal;
export const recentlyClaimedBlockSelector = state =>
  state[MainApp].recentlyClaimedBlock;
export const donationFormStateSelector = state =>
  state[MainApp].donationFormState;
export const signInLoadingSelector = state =>
  userFetchStateSelector(state).pending;
export const showCertSelector = state => state[MainApp].showCert;
export const showCertFetchStateSelector = state =>
  state[MainApp].showCertFetchState;
export const shouldRequestDonationSelector = state => {
  const completedChallengesLength = completedChallengesSelector(state).length;
  const completionCount = completionCountSelector(state);
  const lastCompletionCount =
    completionCountWhenShownProgressModalSelector(state);
  const progressDonationModalShown = progressDonationModalShownSelector(state);
  const isDonating = isDonatingSelector(state);
  const recentlyClaimedBlock = recentlyClaimedBlockSelector(state);
  const showMultipleProgressModals = showMultipleProgressModalsSelector(state);

  // don't request donation if already donating
  if (isDonating) return false;

  // a block has been completed
  if (recentlyClaimedBlock) return true;

  /*
  When AB testing for showing multiple progress modals is active,
  show a donation modal every 30 challenges after the first 50
   */
  if (
    showMultipleProgressModals &&
    progressDonationModalShown &&
    completedChallengesLength > 50 &&
    completionCount - lastCompletionCount >= 30
  )
    return true;

  // a donation has already been requested
  if (progressDonationModalShown) return false;

  // donations only appear after the user has completed ten challenges (i.e.
  // not before the 11th challenge has mounted)
  if (completedChallengesLength < 10) return false;

  // this will mean we have completed 3 or more challenges this browser session
  // and enough challenges overall to not be new
  return completionCount >= 3;
};

export const userTokenSelector = state => {
  return userSelector(state).userToken;
};

export const showCodeAllySelector = state => {
  return state[MainApp].showCodeAlly;
};

export const examInProgressSelector = state => {
  return state[MainApp].examInProgress;
};

export const examResultsSelector = state => userSelector(state).examResults;

export const userByNameSelector = username => state => {
  const { user } = state[MainApp];
  // return initial state empty user empty object instead of empty
  // object litteral to prevent components from re-rendering unnecessarily
  // TODO: confirm if "initialState" can be moved here or action-types.js
  return user[username] ?? {};
};

export const currentCertsSelector = state =>
  certificatesByNameSelector(state[MainApp]?.appUsername)(state)?.currentCerts;

export const certificatesByNameSelector = username => state => {
  const {
    isRespWebDesignCert,
    is2018DataVisCert,
    isFrontEndLibsCert,
    isJsAlgoDataStructCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    isQaCertV7,
    isInfosecCertV7,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8
  } = userByNameSelector(username)(state);
  return {
    hasModernCert:
      isRespWebDesignCert ||
      is2018DataVisCert ||
      isFrontEndLibsCert ||
      isJsAlgoDataStructCert ||
      isApisMicroservicesCert ||
      isQaCertV7 ||
      isInfosecCertV7 ||
      isFullStackCert ||
      isSciCompPyCertV7 ||
      isDataAnalysisPyCertV7 ||
      isMachineLearningPyCertV7 ||
      isRelationalDatabaseCertV8 ||
      isCollegeAlgebraPyCertV8,
    hasLegacyCert:
      isFrontEndCert || isBackEndCert || isDataVisCert || isInfosecQaCert,
    isFullStackCert,
    currentCerts: [
      {
        show: isRespWebDesignCert,
        title: 'Responsive Web Design Certification',
        certSlug: Certification.RespWebDesign
      },
      {
        show: isJsAlgoDataStructCert,
        title: 'JavaScript Algorithms and Data Structures Certification',
        certSlug: Certification.JsAlgoDataStruct
      },
      {
        show: isFrontEndLibsCert,
        title: 'Front End Development Libraries Certification',
        certSlug: Certification.FrontEndDevLibs
      },
      {
        show: is2018DataVisCert,
        title: 'Data Visualization Certification',
        certSlug: Certification.DataVis
      },
      {
        show: isApisMicroservicesCert,
        title: 'Back End Development and APIs Certification',
        certSlug: Certification.BackEndDevApis
      },
      {
        show: isQaCertV7,
        title: ' Quality Assurance Certification',
        certSlug: Certification.QualityAssurance
      },
      {
        show: isInfosecCertV7,
        title: 'Information Security Certification',
        certSlug: Certification.InfoSec
      },
      {
        show: isSciCompPyCertV7,
        title: 'Scientific Computing with Python Certification',
        certSlug: Certification.SciCompPy
      },
      {
        show: isDataAnalysisPyCertV7,
        title: 'Data Analysis with Python Certification',
        certSlug: Certification.DataAnalysisPy
      },
      {
        show: isMachineLearningPyCertV7,
        title: 'Machine Learning with Python Certification',
        certSlug: Certification.MachineLearningPy
      },
      {
        show: isRelationalDatabaseCertV8,
        title: 'Relational Database Certification',
        certSlug: Certification.RelationalDb
      },
      {
        show: isCollegeAlgebraPyCertV8,
        title: 'College Algebra with Python Certification',
        certSlug: Certification.CollegeAlgebraPy
      }
    ],
    legacyCerts: [
      {
        show: isFrontEndCert,
        title: 'Front End Certification',
        certSlug: Certification.LegacyFrontEnd
      },
      {
        show: isBackEndCert,
        title: 'Back End Certification',
        certSlug: Certification.LegacyBackEnd
      },
      {
        show: isDataVisCert,
        title: 'Data Visualization Certification',
        certSlug: Certification.LegacyDataVis
      },
      {
        show: isInfosecQaCert,
        title: 'Information Security and Quality Assurance Certification',
        // Keep the current public profile cert slug
        certSlug: Certification.LegacyInfoSecQa
      },
      {
        show: isFullStackCert,
        title: 'Full Stack Certification',
        // Keep the current public profile cert slug
        certSlug: Certification.LegacyFullStack
      }
    ]
  };
};

export const userFetchStateSelector = state => state[MainApp].userFetchState;
export const allChallengesInfoSelector = state =>
  state[MainApp].allChallengesInfo;
export const userProfileFetchStateSelector = state =>
  state[MainApp].userProfileFetchState;
export const usernameSelector = state => state[MainApp].appUsername;
export const userSelector = state => {
  const username = usernameSelector(state);

  return state[MainApp].user[username] || {};
};

export const renderStartTimeSelector = state => state[MainApp].renderStartTime;
