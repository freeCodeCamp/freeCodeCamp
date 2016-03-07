export { default as reducer } from './reducer';
export { default as actions } from './actions';
export { default as types } from './types';

import fetchUserSaga from './fetch-user-saga';
export const sagas = [ fetchUserSaga ];
