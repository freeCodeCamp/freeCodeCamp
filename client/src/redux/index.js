import { uniqBy } from 'lodash-es';
import { createAction, handleActions } from 'redux-actions';
import store from 'store';

import { SuperBlocks } from '../../../config/certification-settings';
import { actionTypes as challengeTypes } from '../templates/Challenges/redux/action-types';
import { CURRENT_CHALLENGE_KEY } from '../templates/Challenges/redux/current-challenge-saga';
import { emailToABVariant } from '../utils/A-B-tester';
import { createAcceptTermsSaga } from './accept-terms-saga';
import { actionTypes } from './action-types';
import { createAppMountSaga } from './app-mount-saga';
import { createDonationSaga } from './donation-saga';
import failedUpdatesEpic from './failed-updates-epic';
import { createFetchUserSaga } from './fetch-user-saga';
import { createGaSaga } from './ga-saga';

import hardGoToEpic from './hard-go-to-epic';
import { createReportUserSaga } from './report-user-saga';
import { actionTypes as settingsTypes } from './settings/action-types';
import { createShowCertSaga } from './show-cert-saga';
import { createSoundModeSaga } from './sound-mode-saga';
import updateCompleteEpic from './update-complete-epic';
import { createWebhookSaga } from './webhook-saga';

export const MainApp = 'app';

export const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

export const defaultDonationFormState = {
  redirecting: false,
  processing: false,
  success: false,
  error: '',
  loading: {
    stripe: true,
    paypal: true
  }
};

const initialState = {
  appUsername: '',
  recentlyClaimedBlock: null,
  canRequestProgressDonation: true,
  completionCount: 0,
  currentChallengeId: store.get(CURRENT_CHALLENGE_KEY),
  showCert: {},
  showCertFetchState: {
    ...defaultFetchState
  },
  user: {},
  userFetchState: {
    ...defaultFetchState
  },
  userProfileFetchState: {
    ...defaultFetchState
  },
  sessionMeta: { activeDonations: 0 },
  showDonationModal: false,
  isOnline: true,
  isServerOnline: true,
  donationFormState: {
    ...defaultDonationFormState
  }
};

export const epics = [hardGoToEpic, failedUpdatesEpic, updateCompleteEpic];

export const sagas = [
  ...createAcceptTermsSaga(actionTypes),
  ...createAppMountSaga(actionTypes),
  ...createDonationSaga(actionTypes),
  ...createGaSaga(actionTypes),
  ...createFetchUserSaga(actionTypes),
  ...createShowCertSaga(actionTypes),
  ...createReportUserSaga(actionTypes),
  ...createSoundModeSaga({ ...actionTypes, ...settingsTypes }),
  ...createWebhookSaga(actionTypes)
];

export const appMount = createAction(actionTypes.appMount);

export const tryToShowDonationModal = createAction(
  actionTypes.tryToShowDonationModal
);

export const executeGA = createAction(actionTypes.executeGA);

export const allowBlockDonationRequests = createAction(
  actionTypes.allowBlockDonationRequests
);
export const closeDonationModal = createAction(actionTypes.closeDonationModal);
export const openDonationModal = createAction(actionTypes.openDonationModal);
export const preventBlockDonationRequests = createAction(
  actionTypes.preventBlockDonationRequests
);
export const preventProgressDonationRequests = createAction(
  actionTypes.preventProgressDonationRequests
);
export const updateDonationFormState = createAction(
  actionTypes.updateDonationFormState
);

export const onlineStatusChange = createAction(actionTypes.onlineStatusChange);
export const serverStatusChange = createAction(actionTypes.serverStatusChange);

// TODO: re-evaluate this since /internal is no longer used.
// `hardGoTo` is used to hit the API server directly
// without going through /internal
// used for things like /signin and /signout
export const hardGoTo = createAction(actionTypes.hardGoTo);

export const submitComplete = createAction(actionTypes.submitComplete);
export const updateComplete = createAction(actionTypes.updateComplete);
export const updateFailed = createAction(actionTypes.updateFailed);

export const acceptTerms = createAction(actionTypes.acceptTerms);
export const acceptTermsComplete = createAction(
  actionTypes.acceptTermsComplete
);
export const acceptTermsError = createAction(actionTypes.acceptTermsError);

export const fetchUser = createAction(actionTypes.fetchUser);
export const fetchUserComplete = createAction(actionTypes.fetchUserComplete);
export const fetchUserError = createAction(actionTypes.fetchUserError);

export const addDonation = createAction(actionTypes.addDonation);
export const addDonationComplete = createAction(
  actionTypes.addDonationComplete
);
export const addDonationError = createAction(actionTypes.addDonationError);

export const postChargeStripe = createAction(actionTypes.postChargeStripe);
export const postChargeStripeComplete = createAction(
  actionTypes.postChargeStripeComplete
);
export const postChargeStripeError = createAction(
  actionTypes.postChargeStripeError
);
export const postChargeStripeCard = createAction(
  actionTypes.postChargeStripeCard
);
export const postChargeStripeCardComplete = createAction(
  actionTypes.postChargeStripeCardComplete
);
export const postChargeStripeCardError = createAction(
  actionTypes.postChargeStripeCardError
);

export const fetchProfileForUser = createAction(
  actionTypes.fetchProfileForUser
);
export const fetchProfileForUserComplete = createAction(
  actionTypes.fetchProfileForUserComplete
);
export const fetchProfileForUserError = createAction(
  actionTypes.fetchProfileForUserError
);

export const reportUser = createAction(actionTypes.reportUser);
export const reportUserComplete = createAction(actionTypes.reportUserComplete);
export const reportUserError = createAction(actionTypes.reportUserError);

export const resetUserData = createAction(actionTypes.resetUserData);

export const showCert = createAction(actionTypes.showCert);
export const showCertComplete = createAction(actionTypes.showCertComplete);
export const showCertError = createAction(actionTypes.showCertError);

export const postWebhookToken = createAction(actionTypes.postWebhookToken);
export const postWebhookTokenComplete = createAction(
  actionTypes.postWebhookTokenComplete
);
export const deleteWebhookToken = createAction(actionTypes.deleteWebhookToken);
export const deleteWebhookTokenComplete = createAction(
  actionTypes.deleteWebhookTokenComplete
);

export const updateCurrentChallengeId = createAction(
  actionTypes.updateCurrentChallengeId
);

export const completedChallengesSelector = state =>
  userSelector(state).completedChallenges || [];
export const completionCountSelector = state => state[MainApp].completionCount;
export const currentChallengeIdSelector = state =>
  state[MainApp].currentChallengeId;
export const stepsToClaimSelector = state => {
  const user = userSelector(state);
  const currentCerts = certificatesByNameSelector(user.username)(
    state
  ).currentCerts;
  return {
    currentCerts: currentCerts,
    isHonest: user?.isHonest,
    isShowName: user?.profileUI?.showName,
    isShowCerts: user?.profileUI?.showCerts,
    isShowProfile: !user?.profileUI?.isLocked
  };
};
export const emailSelector = state => userSelector(state).email;
export const isAVariantSelector = state => {
  const email = emailSelector(state);
  // if the user is not signed in and the user info is not available.
  // always return A the control variant
  if (!email) return true;
  return emailToABVariant(email).isAVariant;
};
export const isDonatingSelector = state => userSelector(state).isDonating;
export const isOnlineSelector = state => state[MainApp].isOnline;
export const isServerOnlineSelector = state => state[MainApp].isServerOnline;
export const isSignedInSelector = state => !!state[MainApp].appUsername;
export const isDonationModalOpenSelector = state =>
  state[MainApp].showDonationModal;
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
  const completedChallenges = completedChallengesSelector(state);
  const completionCount = completionCountSelector(state);
  const canRequestProgressDonation = state[MainApp].canRequestProgressDonation;
  const isDonating = isDonatingSelector(state);
  const recentlyClaimedBlock = recentlyClaimedBlockSelector(state);

  // don't request donation if already donating
  if (isDonating) return false;

  // a block has been completed
  if (recentlyClaimedBlock) return true;

  // a donation has already been requested
  if (!canRequestProgressDonation) return false;

  // donations only appear after the user has completed ten challenges (i.e.
  // not before the 11th challenge has mounted)
  if (completedChallenges.length < 10) {
    return false;
  }
  // this will mean we have completed 3 or more challenges this browser session
  // and enough challenges overall to not be new
  return completionCount >= 3;
};

export const webhookTokenSelector = state => {
  return userSelector(state).webhookToken;
};

export const userByNameSelector = username => state => {
  const { user } = state[MainApp];
  // return initial state empty user empty object instead of empty
  // object litteral to prevent components from re-rendering unnecessarily
  return user[username] ?? initialState.user;
};

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
    isRelationalDatabasesCertV8
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
      isRelationalDatabasesCertV8,
    hasLegacyCert:
      isFrontEndCert || isBackEndCert || isDataVisCert || isInfosecQaCert,
    isFullStackCert,
    currentCerts: [
      {
        show: isRespWebDesignCert,
        title: 'Responsive Web Design Certification',
        certSlug: SuperBlocks.RespWebDesign
      },
      {
        show: isJsAlgoDataStructCert,
        title: 'JavaScript Algorithms and Data Structures Certification',
        certSlug: SuperBlocks.JsAlgoDataStruct
      },
      {
        show: isFrontEndLibsCert,
        title: 'Front End Development Libraries Certification',
        certSlug: SuperBlocks.FrontEndDevLibs
      },
      {
        show: is2018DataVisCert,
        title: 'Data Visualization Certification',
        certSlug: SuperBlocks.DataVis
      },
      {
        show: isApisMicroservicesCert,
        title: 'Back End Development and APIs Certification',
        certSlug: SuperBlocks.BackEndDevApis
      },
      {
        show: isQaCertV7,
        title: ' Quality Assurance Certification',
        certSlug: 'quality-assurance-v7'
      },
      {
        show: isInfosecCertV7,
        title: 'Information Security Certification',
        certSlug: 'information-security-v7'
      },
      {
        show: isSciCompPyCertV7,
        title: 'Scientific Computing with Python Certification',
        certSlug: 'scientific-computing-with-python-v7'
      },
      {
        show: isDataAnalysisPyCertV7,
        title: 'Data Analysis with Python Certification',
        certSlug: 'data-analysis-with-python-v7'
      },
      {
        show: isMachineLearningPyCertV7,
        title: 'Machine Learning with Python Certification',
        certSlug: 'machine-learning-with-python-v7'
      },
      {
        show: isRelationalDatabasesCertV8,
        title: 'Relational Databases Certification',
        certSlug: 'relational-databases-v8'
      }
    ],
    legacyCerts: [
      {
        show: isFrontEndCert,
        title: 'Front End Certification',
        certSlug: 'legacy-front-end'
      },
      {
        show: isBackEndCert,
        title: 'Back End Certification',
        certSlug: 'legacy-back-end'
      },
      {
        show: isDataVisCert,
        title: 'Data Visualization Certification',
        certSlug: 'legacy-data-visualization'
      },
      {
        show: isInfosecQaCert,
        title: 'Information Security and Quality Assurance Certification',
        // Keep the current public profile cert slug
        certSlug: 'information-security-and-quality-assurance'
      },
      {
        show: isFullStackCert,
        title: 'Full Stack Certification',
        // Keep the current public profile cert slug
        certSlug: 'full-stack'
      }
    ]
  };
};

export const userFetchStateSelector = state => state[MainApp].userFetchState;
export const userProfileFetchStateSelector = state =>
  state[MainApp].userProfileFetchState;
export const usernameSelector = state => state[MainApp].appUsername;
export const userSelector = state => {
  const username = usernameSelector(state);

  return state[MainApp].user[username] || {};
};

export const sessionMetaSelector = state => state[MainApp].sessionMeta;

function spreadThePayloadOnUser(state, payload) {
  return {
    ...state,
    user: {
      ...state.user,
      [state.appUsername]: {
        ...state.user[state.appUsername],
        ...payload
      }
    }
  };
}

export const reducer = handleActions(
  {
    [actionTypes.acceptTermsComplete]: (state, { payload }) => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            // TODO: the user accepts the privacy terms in practice during auth
            // however, it's currently being used to track if they've accepted
            // or rejected the newsletter. Ideally this should be migrated,
            // since they can't sign up without accepting the terms.
            acceptedPrivacyTerms: true,
            sendQuincyEmail:
              payload === null
                ? state.user[appUsername].sendQuincyEmail
                : payload
          }
        }
      };
    },
    [actionTypes.allowBlockDonationRequests]: (state, { payload }) => {
      return {
        ...state,
        recentlyClaimedBlock: payload
      };
    },
    [actionTypes.updateDonationFormState]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...state.donationFormState, ...payload }
    }),
    [actionTypes.addDonation]: state => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, processing: true }
    }),
    [actionTypes.addDonationComplete]: state => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            isDonating: true
          }
        },

        donationFormState: { ...defaultDonationFormState, success: true }
      };
    },
    [actionTypes.addDonationError]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, error: payload }
    }),
    [actionTypes.postChargeStripe]: state => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, processing: true }
    }),
    [actionTypes.postChargeStripeComplete]: state => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            isDonating: true
          }
        },

        donationFormState: { ...defaultDonationFormState, success: true }
      };
    },
    [actionTypes.postChargeStripeError]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, error: payload }
    }),
    [actionTypes.postChargeStripeCard]: state => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, processing: true }
    }),
    [actionTypes.postChargeStripeCardComplete]: state => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            isDonating: true
          }
        },

        donationFormState: { ...defaultDonationFormState, success: true }
      };
    },
    [actionTypes.postChargeStripeCardError]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, error: payload }
    }),
    [actionTypes.fetchUser]: state => ({
      ...state,
      userFetchState: { ...defaultFetchState }
    }),
    [actionTypes.fetchProfileForUser]: state => ({
      ...state,
      userProfileFetchState: { ...defaultFetchState }
    }),
    [actionTypes.fetchUserComplete]: (
      state,
      { payload: { user, username, sessionMeta } }
    ) => ({
      ...state,
      user: {
        ...state.user,
        [username]: { ...user, sessionUser: true }
      },
      appUsername: username,
      currentChallengeId: user.currentChallengeId,
      userFetchState: {
        pending: false,
        complete: true,
        errored: false,
        error: null
      },
      sessionMeta: {
        ...state.sessionMeta,
        ...sessionMeta
      }
    }),
    [actionTypes.fetchUserError]: (state, { payload }) => ({
      ...state,
      userFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.fetchProfileForUserComplete]: (
      state,
      { payload: { user, username } }
    ) => {
      const previousUserObject =
        username in state.user ? state.user[username] : {};
      return {
        ...state,
        user: {
          ...state.user,
          [username]: { ...previousUserObject, ...user }
        },
        userProfileFetchState: {
          ...defaultFetchState,
          pending: false,
          complete: true
        }
      };
    },
    [actionTypes.fetchProfileForUserError]: (state, { payload }) => ({
      ...state,
      userProfileFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.onlineStatusChange]: (state, { payload: isOnline }) => ({
      ...state,
      isOnline
    }),
    [actionTypes.serverStatusChange]: (state, { payload: isServerOnline }) => ({
      ...state,
      isServerOnline
    }),
    [actionTypes.closeDonationModal]: state => ({
      ...state,
      showDonationModal: false
    }),
    [actionTypes.openDonationModal]: state => ({
      ...state,
      showDonationModal: true
    }),
    [actionTypes.preventBlockDonationRequests]: state => ({
      ...state,
      recentlyClaimedBlock: null
    }),
    [actionTypes.preventProgressDonationRequests]: state => ({
      ...state,
      canRequestProgressDonation: false
    }),
    [actionTypes.resetUserData]: state => ({
      ...state,
      appUsername: '',
      user: {}
    }),
    [actionTypes.showCert]: state => ({
      ...state,
      showCert: {},
      showCertFetchState: { ...defaultFetchState }
    }),
    [actionTypes.showCertComplete]: (state, { payload }) => ({
      ...state,
      showCert: payload,
      showCertFetchState: {
        ...defaultFetchState,
        pending: false,
        complete: true
      }
    }),
    [actionTypes.showCertError]: (state, { payload }) => ({
      ...state,
      showCert: {},
      showCertFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.submitComplete]: (state, { payload }) => {
      let submittedchallenges = [{ ...payload, completedDate: Date.now() }];
      if (payload.challArray) {
        submittedchallenges = payload.challArray;
      }
      const { appUsername } = state;
      return {
        ...state,
        completionCount: state.completionCount + 1,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            completedChallenges: uniqBy(
              [
                ...submittedchallenges,
                ...state.user[appUsername].completedChallenges
              ],
              'id'
            )
          }
        }
      };
    },
    [actionTypes.postWebhookTokenComplete]: (state, { payload }) => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            webhookToken: payload
          }
        }
      };
    },
    [actionTypes.deleteWebhookTokenComplete]: state => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            webhookToken: null
          }
        }
      };
    },
    [challengeTypes.challengeMounted]: (state, { payload }) => ({
      ...state,
      currentChallengeId: payload
    }),
    [settingsTypes.submitNewUsernameComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              [state.appUsername]: {
                ...state.user[state.appUsername],
                username: payload
              }
            }
          }
        : state,
    [settingsTypes.submitNewAboutComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyEmailComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateUserFlagComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.verifyCertComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.submitProfileUIComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              [state.appUsername]: {
                ...state.user[state.appUsername],
                profileUI: { ...payload }
              }
            }
          }
        : state
  },
  initialState
);
