import { flow, identity } from 'lodash';
import { Observable } from 'rx';
import {
  combineActions,
  createAction,
  createAsyncTypes,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
import { createSelector } from 'reselect';

import fetchUserEpic from './fetch-user-epic.js';
import nightModeEpic from './night-mode-epic.js';

import {
  updateThemeMetacreator,
  entitiesSelector
} from '../entities';
import { utils } from '../Flash/redux';
import { paramsSelector } from '../Router/redux';
import { types as map } from '../Map/redux';

import ns from '../ns.json';

import { themes, invertTheme } from '../../utils/themes.js';

export const epics = [
  fetchUserEpic,
  nightModeEpic
];

export const types = createTypes([
  'onRouteHome',

  'appMounted',
  'analytics',
  'updateTitle',

  createAsyncTypes('fetchOtherUser'),
  createAsyncTypes('fetchUser'),
  'showSignIn',

  'handleError',
  // used to hit the server
  'hardGoTo',
  'delayedRedirect',

  // night mode
  'toggleNightMode',
  createAsyncTypes('postTheme')
], ns);

const throwIfUndefined = () => {
  throw new TypeError('Argument must not be of  type `undefined`');
};

// createEventMetaCreator({
//   category: String,
//   action: String,
//   label?: String,
//   value?: Number
// }) => () => Object
export function createEventMetaCreator({
  // categories are features or namespaces of the app (capitalized):
  //   Map, Nav, Challenges, and so on
  category = throwIfUndefined,
  // can be a one word the event
  // click, play, toggle.
  // This is not a hard and fast rule
  action = throwIfUndefined,
  // any additional information
  // when in doubt use redux action type
  // or a short sentence describing the action
  label,
  // used to tack some specific value for a GA event
  value
} = throwIfUndefined) {
  return () => ({
    analytics: {
      type: 'event',
      category,
      action,
      label,
      value
    }
  });
}

export const onRouteHome = createAction(types.onRouteHome);
export const appMounted = createAction(types.appMounted);

// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

// fetchOtherUser() => Action
// used in combination with fetch-user-epic
// to fetch another users profile
export const fetchOtherUser = createAction(types.fetchOtherUser.start);
export const fetchOtherUserComplete = createAction(
  types.fetchOtherUser.complete,
  ({ result }) => result,
  identity
);

// fetchUser() => Action
// used in combination with fetch-user-epic
export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(
  types.fetchUser.complete,
  ({ result }) => result,
  identity
);

export const showSignIn = createAction(types.showSignIn);

// used when server needs client to redirect
export const delayedRedirect = createAction(types.delayedRedirect);

// hardGoTo(path: String) => Action
export const hardGoTo = createAction(types.hardGoTo);

export const createErrorObservable = error => Observable.just({
  type: types.handleError,
  error
});
// use sparingly
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

export const toggleNightMode = createAction(
  types.toggleNightMode,
  null,
  (username, theme) => updateThemeMetacreator(username, invertTheme(theme))
);
export const postThemeComplete = createAction(
  types.postTheme.complete,
  null,
  utils.createFlashMetaAction
);

export const postThemeError = createAction(
  types.postTheme.error,
  null,
  (username, theme, err) => ({
    ...updateThemeMetacreator(username, invertTheme(theme)),
    ...utils.createFlashMetaAction(err)
  })
);

const defaultState = {
  title: 'Learn To Code | freeCodeCamp',
  isSignInAttempted: false,
  user: '',
  csrfToken: '',
  superBlocks: []
};

export const getNS = state => state[ns];
export const csrfSelector = state => getNS(state).csrfToken;
export const titleSelector = state => getNS(state).title;

export const signInLoadingSelector = state => !getNS(state).isSignInAttempted;

export const usernameSelector = state => getNS(state).user || '';
export const userSelector = createSelector(
  state => getNS(state).user,
  state => entitiesSelector(state).user,
  (username, userMap) => userMap[username] || {}
);

export const userByNameSelector = state => {
  const username = paramsSelector(state).username;
  const userMap = entitiesSelector(state).user;
  return userMap[username] || {};
};

export const themeSelector = flow(
  userSelector,
  user => user.theme || themes.default
);

export const isSignedInSelector = state => !!userSelector(state).username;

export default handleActions(
  () => ({
    [types.updateTitle]: (state, { payload = 'Learn To Code' }) => ({
      ...state,
      title: payload + ' | freeCodeCamp'
    }),

    [types.fetchUser.complete]: (state, { payload: user }) => ({
      ...state,
      user
    }),
    [map.fetchMapUi.complete]: (state, { payload }) => ({
      ...state,
      superBlocks: payload.result.superBlocks
    }),
    [
      combineActions(types.showSignIn, types.fetchUser.complete)
    ]: state => ({
      ...state,
      isSignInAttempted: true
    }),
    [types.delayedRedirect]: (state, { payload }) => ({
      ...state,
      delayedRedirect: payload
    })
  }),
  defaultState,
  ns
);
