import { createAction, handleActions } from 'redux-actions';

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
    'toggleMapModal'
  ],
  ns
);

const initialState = {
  appUsername: '',
  showLoading: true,
  isSignedIn: false,
  user: {},
  showMapModal: false
};

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fetchUserError = createAction(types.fetchUserError);
export const noUserFound = createAction(types.noUserFound);

export const hardGoTo = createAction(types.hardGoTo);

export const toggleMapModal = createAction(types.toggleMapModal);

export const updateUserSignedIn = createAction(types.updateUserSignedIn);

export const isMapModalOpenSelector = state => state[ns].showMapModal;
export const isSignedInSelector = state => state[ns].isSignedIn;
export const userSelector = state => state[ns].user || {};
export const userStateLoadingSelector = state => state[ns].showLoading;
export const completedChallengesSelector = state =>
  state[ns].user.completedChallenges || [];
export const currentChallengeIdSelector = state =>
  userSelector(state).currentChallengeId || '';

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
    [types.toggleMapModal]: state => ({
      ...state,
      showMapModal: !state.showMapModal
    }),
    [types.updateUserSignedIn]: (state, { payload }) => ({
      ...state,
      isSignedIn: payload
    }),
    [challenge.submitComplete]: (state, { payload: { points, id } }) => ({
      ...state,
      user: {
        ...state.user,
        completedChallenges:
          points === state.user.points
            ? state.user.completedChallenges
            : [...state.user.completedChallengesSelector, { id }]
      }
    })
  },
  initialState
);
