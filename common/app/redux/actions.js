import { Observable } from 'rx';
import { createAction } from 'redux-actions';
import types from './types';

// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

// fetchUser() => Action
// used in combination with fetch-user-saga
export const fetchUser = createAction(types.fetchUser);

// addUser(
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
// updateUserFlag(username: String, flag: String) => Action
export const updateUserFlag = createAction(
  types.updateUserFlag,
  (username, flag) => ({ username, flag })
);
// updateUserEmail(username: String, email: String) => Action
export const updateUserEmail = createAction(
  types.updateUserFlag,
  (username, email) => ({ username, email })
);
// updateUserLang(username: String, lang: String) => Action
export const updateUserLang = createAction(
  types.updateUserLang,
  (username, lang) => ({ username, lang })
);
export const updateAppLang = createAction(types.updateAppLang);
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
// doActionOnError(
//   actionCreator: (() => Action|Null)
// ) => (error: Error) => Observable[Action]
export const doActionOnError = actionCreator => error => Observable.of(
  {
    type: types.handleError,
    error
  },
  actionCreator()
);


// drawers
export const toggleMapDrawer = createAction(types.toggleMapDrawer);
export const toggleMainChat = createAction(types.toggleMainChat);
export const toggleHelpChat = createAction(types.toggleHelpChat);
export const openHelpChat = createAction(types.openHelpChat);
export const closeHelpChat = createAction(types.closeHelpChat);

export const toggleNightMode = createAction(types.toggleNightMode);
