import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/stateManagment';
import { types as challenge } from '../../templates/Challenges/redux';
import fecthUserEpic from './fetch-user-epic';

const ns = 'app';

export const epics = [fecthUserEpic];

export const types = createTypes(
  [
    'fetchUser',
    'fetchUserComplete',
    'fetchUserError',
    'updateUserSignedIn',
    'toggleMapModal'
  ],
  ns
);

const initialState = {
  appUsername: '',
  isSignedIn: false,
  user: {},
  showMapModal: false
};

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fecthUserError = createAction(types.fetchUserError);

export const toggleMapModal = createAction(types.toggleMapModal);

export const updateUserSignedIn = createAction(types.updateUserSignedIn);

export const isMapModalOpenSelector = state => state[ns].showMapModal;
export const isSignedInSelector = state => state[ns].isSignedIn;
export const userSelector = state => state[ns].user || {};
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
      isSignedIn: !!Object.keys(user).length
    }),
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
