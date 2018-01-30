import { isLocationAction } from 'redux-first-router';
import {
  addNS,
  createAction,
  createAsyncTypes,
  createTypes
} from 'berkeleys-redux-utils';

import userUpdateEpic from './update-user-epic.js';
import ns from '../ns.json';
import { utils } from '../../../Flash/redux';

export const epics = [
  userUpdateEpic
];

export const types = createTypes([
  'toggleUserFlag',
  createAsyncTypes('updateMyEmail'),
  'updateMyLang',
  'onRouteSettings',
  'onRouteUpdateEmail'
], 'settings');


export const onRouteSettings = createAction(types.onRouteSettings);
export const onRouteUpdateEmail = createAction(types.onRouteUpdateEmail);
export const toggleUserFlag = createAction(types.toggleUserFlag);
export const updateMyEmail = createAction(types.updateMyEmail.start);
export const updateMyEmailComplete = createAction(
  types.updateMyEmail.complete,
  null,
  utils.createFlashMetaAction
);

export const updateMyEmailError = createAction(
  types.updateMyEmail.error,
  null,
  utils.createFlashMetaAction
);

export const updateMyLang = createAction(
  types.updateMyLang,
  (values) => values.lang
);

const defaultState = {
  showUpdateEmailView: false
};

const getNS = state => state[ns];
export const showUpdateEmailViewSelector =
  state => getNS(state).showUpdateEmailView;

export default addNS(
  ns,
  function settingsRouteReducer(state = defaultState, action) {
    if (isLocationAction(action)) {
      const { type } = action;
      if (type === types.onRouteUpdateEmail) {
        return {
          ...state,
          showUpdateEmailView: true
        };
      }
      if (state.showUpdateEmailView) {
        return {
          ...state,
          showUpdateEmailView: false
        };
      }
    }
    return state;
  }
);
