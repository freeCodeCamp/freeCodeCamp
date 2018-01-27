import _ from 'lodash/fp';
import {
  createTypes,
  createAction,
  createAsyncTypes,
  composeReducers,
  handleActions
} from 'berkeleys-redux-utils';

import * as utils from './utils.js';
import getMessagesEpic from './get-messages-epic.js';
import ns from '../ns.json';

// export all the utils
export { utils };
export const epics = [getMessagesEpic];
export const types = createTypes([
  'clickOnClose',
  createAsyncTypes('fetchMessages')
], ns);

export const clickOnClose = createAction(types.clickOnClose, _.noop);
export const fetchMessagesComplete = createAction(types.fetchMessages.complete);
export const fetchMessagesError = createAction(types.fetchMessages.error);

const defaultState = [];

const getNS = _.property(ns);

export const latestMessageSelector = _.flow(
  getNS,
  _.head,
  _.defaultTo({})
);

export default composeReducers(
  ns,
  handleActions(
    () => ({
      [types.clickOnClose]: _.tail,
      [types.fetchMessages.complete]: (state, { payload }) => [
        ...state,
        ...utils.expressToStack(payload)
      ]
    }),
    defaultState,
  ),
  function metaReducer(state = defaultState, action) {
    if (utils.isFlashAction(action)) {
      const { payload } = utils.getFlashAction(action);
      return [
        ...state,
        ...payload
      ];
    }
    return state;
  }
);
