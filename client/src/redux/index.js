import { uniqBy } from 'lodash-es';
import { handleActions } from 'redux-actions';
import store from 'store';

import {
  actionTypes as challengeTypes,
  CURRENT_CHALLENGE_KEY
} from '../templates/Challenges/redux/action-types';
import { getIsDailyCodingChallenge } from '@freecodecamp/shared/config/challenge-types';
import { actionTypes, ns as MainApp } from './action-types';
import { createAppMountSaga } from './app-mount-saga';
import { createDonationSaga } from './donation-saga';
import failedUpdatesEpic from './failed-updates-epic';
import { createFetchUserSaga } from './fetch-user-saga';
import hardGoToEpic from './hard-go-to-epic';
import { createReportUserSaga } from './report-user-saga';
import { createSaveChallengeSaga } from './save-challenge-saga';
import { savedChallengesSelector } from './selectors';
import { actionTypes as settingsTypes } from './settings/action-types';
import { createShowCertSaga } from './show-cert-saga';
import updateCompleteEpic from './update-complete-epic';
import { createUserTokenSaga } from './user-token-saga';
import { createMsUsernameSaga } from './ms-username-saga';
import { createSurveySaga } from './survey-saga';
import { createSessionCompletedChallengesSaga } from './session-completed-challenges';
import { createThemeSaga } from './theme-saga';

const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

const updateCardDefaultState = {
  redirecting: false,
  success: false,
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

// exported for testing purposes.
export const initialState = {
  isRandomCompletionThreshold: false,
  donatableSectionRecentlyCompleted: null,
  currentChallengeId: store.get(CURRENT_CHALLENGE_KEY),
  examInProgress: false,
  isProcessing: false,
  theme: 'light',
  showCert: {},
  showCertFetchState: {
    ...defaultFetchState
  },
  user: { sessionUser: null, otherUser: null },
  userFetchState: {
    ...defaultFetchState
  },
  allChallengesInfo: {
    challengeNodes: [],
    certificateNodes: []
  },
  userProfileFetchState: {
    ...defaultFetchState
  },
  showDonationModal: false,
  showSignoutModal: false,
  isOnline: true,
  isServerOnline: true,
  renderStartTime: null,
  donationFormState: {
    ...defaultDonationFormState
  },
  updateCardState: {
    ...updateCardDefaultState
  }
};

export const epics = [hardGoToEpic, failedUpdatesEpic, updateCompleteEpic];

export const sagas = [
  ...createThemeSaga(actionTypes),
  ...createAppMountSaga(actionTypes),
  ...createDonationSaga(actionTypes),
  ...createFetchUserSaga(actionTypes),
  ...createShowCertSaga(actionTypes),
  ...createReportUserSaga(actionTypes),
  ...createUserTokenSaga(actionTypes),
  ...createSaveChallengeSaga(actionTypes),
  ...createMsUsernameSaga(actionTypes),
  ...createSurveySaga(actionTypes),
  ...createSessionCompletedChallengesSaga(actionTypes)
];

function spreadThePayloadOnUser(state, payload) {
  return {
    ...state,
    user: {
      ...state.user,
      sessionUser: {
        ...state.user.sessionUser,
        ...payload
      }
    }
  };
}

export const reducer = handleActions(
  {
    [actionTypes.allowSectionDonationRequests]: (state, { payload }) => {
      return {
        ...state,
        donatableSectionRecentlyCompleted: {
          block: payload.block,
          module: payload.module,
          superBlock: payload.superBlock
        }
      };
    },
    [actionTypes.setRenderStartTime]: (state, { payload }) => {
      return {
        ...state,
        renderStartTime: payload
      };
    },
    [actionTypes.updateCardError]: (state, { payload }) => ({
      ...state,
      updateCardState: { ...updateCardDefaultState, error: payload }
    }),
    [actionTypes.updateCardRedirecting]: state => ({
      ...state,
      updateCardState: { ...updateCardDefaultState, redirecting: true }
    }),
    [actionTypes.updateCardComplete]: state => ({
      ...state,
      updateCardState: { ...updateCardDefaultState, success: true }
    }),
    [actionTypes.updateDonationFormState]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...state.donationFormState, ...payload }
    }),
    [actionTypes.postChargeProcessing]: state => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, processing: true }
    }),
    [actionTypes.postChargeComplete]: state => {
      const sessionUser = state.user.sessionUser
        ? { ...state.user.sessionUser, isDonating: true }
        : null;
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser
        },
        donationFormState: { ...defaultDonationFormState, success: true }
      };
    },
    [actionTypes.postChargeError]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, error: payload }
    }),
    [actionTypes.updateAllChallengesInfo]: (state, { payload }) => ({
      ...state,
      allChallengesInfo: { ...payload }
    }),
    [actionTypes.fetchUser]: state => ({
      ...state,
      userFetchState: { ...defaultFetchState }
    }),
    [actionTypes.fetchProfileForUser]: state => ({
      ...state,
      userProfileFetchState: { ...defaultFetchState }
    }),
    [actionTypes.fetchUserComplete]: (state, { payload: { user } }) => {
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: user
        },
        currentChallengeId:
          user?.currentChallengeId || store.get(CURRENT_CHALLENGE_KEY),
        userFetchState: {
          pending: false,
          complete: true,
          errored: false,
          error: null
        }
      };
    },
    [actionTypes.fetchUserTimeout]: state => ({
      ...state,
      userFetchState: {
        // Pending because the fetch may still complete. This allows the UI to
        // render what it can while waiting for the fetch to complete.
        pending: true,
        complete: true,
        errored: false,
        error: null
      }
    }),
    [actionTypes.fetchUserError]: (state, { payload }) => ({
      ...state,
      userFetchState: {
        pending: false,
        complete: true,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.fetchProfileForUserComplete]: (
      state,
      { payload: { user } }
    ) => {
      return {
        ...state,
        user: {
          ...state.user,
          otherUser: user
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
    [actionTypes.setTheme]: (state, { payload: theme }) => ({
      ...state,
      theme
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
    [actionTypes.preventSectionDonationRequests]: state => ({
      ...state,
      donatableSectionRecentlyCompleted: null
    }),
    [actionTypes.setIsRandomCompletionThreshold]: (state, { payload }) => ({
      ...state,
      isRandomCompletionThreshold: payload
    }),
    [actionTypes.resetUserData]: state => ({
      ...state,
      user: { ...state.user, sessionUser: null }
    }),
    [actionTypes.openSignoutModal]: state => ({
      ...state,
      showSignoutModal: true
    }),
    [actionTypes.closeSignoutModal]: state => ({
      ...state,
      showSignoutModal: false
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
      const {
        examResults = null,
        completedDailyCodingChallenges = [],
        submittedChallenge,
        savedChallenges
      } = payload;

      let submittedchallenges = [
        { ...submittedChallenge, completedDate: Date.now() }
      ];

      // if daily coding challenge, only update completedDailyCodingChallenges
      // Uses the whole completedDailyCodingChallenges array from the API response
      // Todo: update with submittedChallenge instead
      if (getIsDailyCodingChallenge(submittedChallenge.challengeType)) {
        return {
          ...state,
          user: {
            ...state.user,
            sessionUser: {
              ...state.user.sessionUser,
              completedDailyCodingChallenges
            }
          }
        };
      }

      // if exam not passed, don't update completedChallenges - only update the results
      if (examResults && !examResults.passed) {
        return {
          ...state,
          user: {
            ...state.user,
            sessionUser: {
              ...state.user.sessionUser,
              examResults
            }
          }
        };
      }

      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            completedChallenges: uniqBy(
              [
                ...submittedchallenges,
                ...state.user.sessionUser.completedChallenges
              ],
              'id'
            ),
            savedChallenges:
              savedChallenges ?? savedChallengesSelector(state[MainApp]),
            examResults
          }
        }
      };
    },
    [actionTypes.setMsUsername]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            msUsername: payload
          }
        }
      };
    },
    [actionTypes.setIsProcessing]: (state, { payload }) => {
      return {
        ...state,
        isProcessing: payload
      };
    },
    [actionTypes.updateUserToken]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            userToken: payload
          }
        }
      };
    },
    [actionTypes.deleteUserTokenComplete]: state => {
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            userToken: null
          }
        }
      };
    },
    [actionTypes.startExam]: state => {
      return {
        ...state,
        examInProgress: true
      };
    },
    [actionTypes.stopExam]: state => {
      return {
        ...state,
        examInProgress: false
      };
    },
    [actionTypes.clearExamResults]: state => {
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            examResults: null
          }
        }
      };
    },
    [actionTypes.submitSurveyComplete]: (
      state,
      { payload: { surveyResults } }
    ) => {
      const { completedSurveys = [] } = state.user.sessionUser;
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            completedSurveys: [...completedSurveys, surveyResults]
          }
        }
      };
    },
    [challengeTypes.challengeMounted]: (state, { payload }) => ({
      ...state,
      currentChallengeId: payload
    }),
    [actionTypes.saveChallengeComplete]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          sessionUser: {
            ...state.user.sessionUser,
            savedChallenges: payload
          }
        }
      };
    },
    [settingsTypes.submitNewUsernameComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              sessionUser: {
                ...state.user.sessionUser,
                username: payload
              }
            }
          }
        : state,
    [settingsTypes.submitNewAboutComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyEmailComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMySocialsComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMySoundComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyKeyboardShortcutsComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyClassroomModeComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyHonestyComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyQuincyEmailComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyPortfolioComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyExperienceComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.resetMyEditorLayoutComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.verifyCertComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.submitProfileUIComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              sessionUser: {
                ...state.user.sessionUser,
                profileUI: { ...payload }
              }
            }
          }
        : state
  },
  initialState
);
