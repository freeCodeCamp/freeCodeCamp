import _ from 'lodash';

export const alertTypes = _.keyBy(
  ['success', 'info', 'warning', 'danger'],
  _.identity
);

export const normalizeAlertType = alertType => alertTypes[alertType] || 'info';
