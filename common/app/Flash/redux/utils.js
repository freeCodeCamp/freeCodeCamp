import _ from 'lodash/fp';

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

export const expressToStack = _.flow(
  _.toPairs,
  _.flatMap(([ type, messages ]) => messages.map(({ msg }) => ({
    message: msg,
    alertType: normalizeAlertType(type)
  })))
);

