import { composeReducers } from 'berkeleys-redux-utils';
import _ from 'lodash/fp';

import ns from '../ns.json';

export const alertTypes = _.keyBy(_.identity)([
  'success',
  'info',
  'warning',
  'danger'
]);

export const getFlashAction = _.flow(
  _.property('meta'),
  _.property('flash')
);

export const isFlashAction = _.flow(
  getFlashAction,
  Boolean
);

const defaultState = {
  stack: [{ alertType: 'danger', message: 'foo bar' }]
};

const getNS = _.property(ns);

export const latestMessageSelector = _.flow(
  getNS,
  _.property('stack'),
  _.head,
  _.defaultTo(_.stubObject)
);

export default composeReducers(
  ns,
  function metaReducer(state = defaultState, action) {
    if (isFlashAction(action)) {
      const { payload: { alertType, message } } = getFlashAction(action);
      return {
        ...state,
        stack: [
          ...state.stack,
          {
            alertType: alertTypes[alertType] || 'info',
            message: _.escape(message)
          }
        ]
      };
    }
    return state;
  }
);
