import { createAction } from 'redux-actions';

import types from './types';

export const goToStep = createAction(types.goToStep);
export const setChallenge = createAction(types.setChallenge);
