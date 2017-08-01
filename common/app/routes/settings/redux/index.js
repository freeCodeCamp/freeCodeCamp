import { createTypes } from 'redux-create-types';
import { createAction } from 'redux-actions';

import userUpdateEpic from './update-user-epic.js';

export const epics = [
  userUpdateEpic
];

export const types = createTypes([
  'toggleUserFlag',
  'updateMyEmail',
  'updateMyLang'
], 'settings');

export const toggleUserFlag = createAction(types.toggleUserFlag);
export const updateMyEmail = createAction(types.updateMyEmail);
export const updateMyLang = createAction(
  types.updateMyLang,
  (values) => values.lang
);
