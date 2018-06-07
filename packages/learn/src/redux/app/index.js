import { createAction, handleActions } from 'redux-actions';
import { uniqBy } from 'lodash';

import { createTypes } from '../../../utils/stateManagment';
import { types as challenge } from '../../templates/Challenges/redux';
import fecthUserEpic from './fetch-user-epic';
import hardGoToEpic from './hard-go-to-epic';

const ns = 'app';

export const epics = [fecthUserEpic, hardGoToEpic];

export const types = createTypes(
  [
    'fetchUser',
    'fetchUserComplete',
    'fetchUserError',
    'noUserFound',
    'hardGoTo',
    'updateUserSignedIn',
    'openDonationModal',
    'closeDonationModal'
  ],
  ns
);

const initialState = {
  appUsername: '',
  completionCount: 0,
  showLoading: true,
  isSignedIn: false,
  user: {},
  showDonationModal: false
};

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fetchUserError = createAction(types.fetchUserError);
export const noUserFound = createAction(types.noUserFound);

export const hardGoTo = createAction(types.hardGoTo);

export const openDonationModal = createAction(types.openDonationModal);
export const closeDonationModal = createAction(types.closeDonationModal);

export const updateUserSignedIn = createAction(types.updateUserSignedIn);

export const completionCountSelector = state => state[ns].completionCount;
export const isDonationModalOpenSelector = state => state[ns].showDonationModal;
export const isSignedInSelector = state => state[ns].isSignedIn;
export const userSelector = state => state[ns].user || {};
export const userStateLoadingSelector = state => state[ns].showLoading;
export const completedChallengesSelector = state =>
  userSelector(state).completedChallenges || [];
export const currentChallengeIdSelector = state =>
  userSelector(state).currentChallengeId || '';

export const shouldShowDonationSelector = state => {
  const completedChallenges = completedChallengesSelector(state);
  const completionCount = completionCountSelector(state);
  const currentCompletedLength = completedChallenges.length;
  // the user has not completed 9 challenges in total yet
  if (currentCompletedLength < 9) {
    return false;
  }
  // this will mean we are on the 10th submission in total for the user
  if (completedChallenges.length === 9) {
    return true;
  }
  // this will mean we are on the 3rd submission for this browser session
  if (completionCount === 2) {
    return true;
  }
  return false;
};

export const reducer = handleActions(
  {
    [types.fetchUserComplete]: (
      state,
      { payload: { entities: { user }, result } }
    ) => ({
      ...state,
      appUsername: result,
      user: user[result],
      showLoading: false,
      isSignedIn: !!Object.keys(user).length
    }),
    [types.fetchUserError]: state => ({ ...state, showLoading: false }),
    [types.noUserFound]: state => ({ ...state, showLoading: false }),
    [types.closeDonationModal]: state => ({
      ...state,
      showDonationModal: false
    }),
    [types.openDonationModal]: state => ({
      ...state,
      showDonationModal: true
    }),
    [types.updateUserSignedIn]: (state, { payload }) => ({
      ...state,
      isSignedIn: payload
    }),
    [challenge.submitComplete]: (state, { payload: { id } }) => ({
      ...state,
      completionCount: state.completionCount + 1,
      user: {
        ...state.user,
        completedChallenges: uniqBy(
          [...state.user.completedChallenges, { id }],
          'id'
        )
      }
    })
  },
  initialState
);
