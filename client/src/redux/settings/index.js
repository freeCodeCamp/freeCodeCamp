import { createAction, handleActions } from 'redux-actions';

import { createTypes, createAsyncTypes } from '../../utils/createTypes';
import { createSettingsSagas } from './settings-sagas';
import { createUpdateMyEmailSaga } from './update-email-saga';

export const ns = 'settings';

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
    ...createAsyncTypes('submitNewUsername'),
    ...createAsyncTypes('updateMyEmail'),
    ...createAsyncTypes('updateUserFlag'),
    ...createAsyncTypes('submitProfileUI'),
    ...createAsyncTypes('verifyCert')
  ],
  ns
);

export const sagas = [
  ...createSettingsSagas(types),
  ...createUpdateMyEmailSaga(types)
];

const checkForSuccessPayload = ({ type, payload }) =>
  type === 'success' ? payload : null;

export const submitNewAbout = createAction(types.submitNewAbout);
export const submitNewAboutComplete = createAction(
  types.submitNewAboutComplete,
  checkForSuccessPayload
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

export const submitProfileUI = createAction(types.submitProfileUI);
export const submitProfileUIComplete = createAction(
  types.submitProfileUIComplete,
  checkForSuccessPayload
);
export const submitProfileUIError = createAction(types.submitProfileUIError);

export const updateMyEmail = createAction(types.updateMyEmail);
export const updateMyEmailComplete = createAction(types.updateMyEmailComplete);
export const updateMyEmailError = createAction(types.updateMyEmailError);

export const updateUserFlag = createAction(types.updateUserFlag);
export const updateUserFlagComplete = createAction(
  types.updateUserFlagComplete,
  checkForSuccessPayload
);
export const updateUserFlagError = createAction(types.updateUserFlagError);

export const validateUsername = createAction(types.validateUsername);
export const validateUsernameComplete = createAction(
  types.validateUsernameComplete
);
export const validateUsernameError = createAction(types.validateUsernameError);

export const verifyCert = createAction(types.verifyCert);
export const verifyCertComplete = createAction(
  types.verifyCertComplete,
  checkForSuccessPayload
);
export const verifyCertError = createAction(types.verifyCertError);

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
