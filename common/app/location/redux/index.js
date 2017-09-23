import { selectLocationState } from 'redux-first-router';

export const paramsSelector = state => selectLocationState(state).payload;
