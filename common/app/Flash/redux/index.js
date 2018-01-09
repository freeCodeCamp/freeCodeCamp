import _ from 'lodash/fp';
import {
  createTypes,
  createAction,
  composeReducers,
  handleActions
} from 'berkeleys-redux-utils';

import ns from '../ns.json';

export const alertTypes = _.keyBy(_.identity)([
  'success',
  'info',
  'warning',
  'danger'
]);
export const normalizeAlertType = alertType => alertTypes[alertType] || 'info';

export const getFlashAction = _.flow(
  _.property('meta'),
  _.property('flash')
);

export const isFlashAction = _.flow(
  getFlashAction,
  Boolean
);

export const types = createTypes([
  'clickOnClose',
  'messagesFoundOnBoot'
], ns);

export const clickOnClose = createAction(types.clickOnClose, _.noop);
export const messagesFoundOnBoot = createAction(types.messagesFoundOnBoot);

export const expressToStack = _.flow(
  _.toPairs,
  _.flatMap(([ type, messages ]) => messages.map(({ msg }) => ({
    message: msg,
    alertType: normalizeAlertType(type)
  })))
);

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
      [types.messagesFoundOnBoot]: (state, { payload }) => [
        ...state,
        ...expressToStack(payload)
      ]
    }),
    defaultState,
  ),
  function metaReducer(state = defaultState, action) {
    if (isFlashAction(action)) {
      const { payload: { alertType, message } } = getFlashAction(action);
      return [
        ...state,
        {
          alertType: normalizeAlertType(alertType),
          message: _.escape(message)
        }
      ];
    }
    return state;
  }
);
