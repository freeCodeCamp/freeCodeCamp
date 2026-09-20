import { handleActions } from 'redux-actions';
import { actionTypes as types, ns } from './action-types';
import { createDangerZoneSaga } from './danger-zone-saga';
import { createSettingsSagas } from './settings-sagas';
import { createUpdateMyEmailSaga } from './update-email-saga';

export { ns };

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

export const sagas = [
  ...createSettingsSagas(types),
  ...createUpdateMyEmailSaga(types),
  ...createDangerZoneSaga(types)
];

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
