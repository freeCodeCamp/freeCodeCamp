import { selectLocationState } from 'redux-first-router';

export const paramsSelector = state => selectLocationState(state).payload || {};
export const langSelector = state => paramsSelector(state).lang || 'en';
export const routesMapSelector = state => paramsSelector(state).routesMap || {};
