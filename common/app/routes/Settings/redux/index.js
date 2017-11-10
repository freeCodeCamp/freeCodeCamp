import {
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import userUpdateEpic from './update-user-epic.js';
import ns from '../ns.json';

export const epics = [
  userUpdateEpic
];

export const types = createTypes([
  'toggleUserFlag',
  'updateMyEmail',
  'updateMyLang',
  'onRouteSettings',
  'onRouteUpdateEmail'
], 'settings');

export const onRouteSettings = createAction(types.onRouteSettings);
export const onRouteUpdateEmail = createAction(types.onRouteUpdateEmail);
export const toggleUserFlag = createAction(types.toggleUserFlag);
export const updateMyEmail = createAction(types.updateMyEmail);

export const updateMyLang = createAction(
  types.updateMyLang,
  (values) => values.lang
);

const defaultState = {
  showUpdateEmailView: false
};

export default handleActions(
  () => ({
    [types.onRouteSettings]: state => ({ ...state, showUpdateEmailView: true })
  }),
  defaultState,
  ns
);
