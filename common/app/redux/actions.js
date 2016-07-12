import { Observable } from 'rx';
import { createAction } from 'redux-actions';
import types from './types';

// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

// fetchUser() => Action
// used in combination with fetch-user-saga
export const fetchUser = createAction(types.fetchUser);

// setUser(
//   entities: { [userId]: User }
// ) => Action
export const addUser = createAction(
  types.addUser,
  () => {},
  entities => ({ entities })
);
export const updateThisUser = createAction(types.updateThisUser);
export const showSignIn = createAction(types.showSignIn);

// updateUserPoints(username: String, points: Number) => Action
export const updateUserPoints = createAction(
  types.updateUserPoints,
  (username, points) => ({ username, points })
);
// updateCompletedChallenges(username: String) => Action
export const updateCompletedChallenges = createAction(
  types.updateCompletedChallenges
);

// used when server needs client to redirect
export const delayedRedirect = createAction(types.delayedRedirect);

// hardGoTo(path: String) => Action
export const hardGoTo = createAction(types.hardGoTo);

export const initWindowHeight = createAction(types.initWindowHeight);
export const updateWindowHeight = createAction(types.updateWindowHeight);
export const updateNavHeight = createAction(types.updateNavHeight);


// data
export const updateChallengesData = createAction(types.updateChallengesData);
export const updateJobsData = createAction(types.updateJobsData);
export const updateHikesData = createAction(types.updateHikesData);

export const createErrorObservable = error => Observable.just({
  type: types.handleError,
  error
});


// drawers
export const toggleMapDrawer = createAction(types.toggleMapDrawer);
export const toggleMainChat = createAction(types.toggleMainChat);
export const toggleHelpChat = createAction(types.toggleHelpChat);
export const openHelpChat = createAction(types.openHelpChat);
export const closeHelpChat = createAction(types.closeHelpChat);

export const toggleNightMode = createAction(types.toggleNightMode);
