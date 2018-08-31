import { selectLocationState } from 'redux-first-router';

export const paramsSelector = state => selectLocationState(state).payload || {};
export const locationTypeSelector =
  state => selectLocationState(state).type || '';
export const routesMapSelector = state =>
  selectLocationState(state).routesMap || {};
export const pathnameSelector = state => selectLocationState(state).pathname;
