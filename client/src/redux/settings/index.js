import { createAction, handleActions } from 'redux-actions';

import { createTypes, createAsyncTypes } from '../../utils/createTypes';
import { createSettingsSagas } from './settings-sagas';

const ns = 'settings';

const defaultFetchState = {
  pending: false,
  complete: false,
  errored: false,
  error: null
};

const initialState = {
  usernameValidation: {
    isValidUsername: false,
    fetchState: { ...defaultFetchState }
  }
};

export const types = createTypes(
  [
    ...createAsyncTypes('validateUsername'),
    ...createAsyncTypes('submitNewAbout'),
    ...createAsyncTypes('submitNewUsername')
  ],
  ns
);

export const sagas = [...createSettingsSagas(types)];

export const submitNewAbout = createAction(types.submitNewAbout);
export const submitNewAboutComplete = createAction(
  types.submitNewAboutComplete,
  ({ type, payload }) => (type === 'success' ? payload : null)
);
export const submitNewAboutError = createAction(types.submitNewAboutError);

export const submitNewUsername = createAction(types.submitNewUsername);
export const submitNewUsernameComplete = createAction(
  types.submitNewUsernameComplete,
  ({ type, username }) => (type === 'success' ? username : null)
);
export const submitNewUsernameError = createAction(
  types.submitNewUsernameError
);

export const validateUsername = createAction(types.validateUsername);
export const validateUsernameComplete = createAction(
  types.validateUsernameComplete
);
export const validateUsernameError = createAction(types.validateUsernameError);

export const usernameValidationSelector = state => state[ns].usernameValidation;

export const reducer = handleActions(
  {
    [types.submitNewUsernameComplete]: state => ({
      ...state,
      usernameValidation: { ...initialState.usernameValidation }
    }),
    [types.validateUsername]: state => ({
      ...state,
      usernameValidation: {
        ...state.usernameValidation,
        isValidUsername: false,
        fetchState: { ...defaultFetchState, pending: true }
      }
    }),
    [types.validateUsernameComplete]: (state, { payload }) => ({
      ...state,
      usernameValidation: {
        ...state.usernameValidation,
        isValidUsername: !payload,
        fetchState: { ...defaultFetchState, pending: false, complete: true }
      }
    })
  },
  initialState
);
