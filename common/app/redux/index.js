import _ from 'lodash';
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
import updateMyCurrentChallengeEpic from './update-my-challenge-epic.js';
import fetchChallengesEpic from './fetch-challenges-epic.js';
import nightModeEpic from './night-mode-epic.js';

import { createFilesMetaCreator } from '../files';
import { updateThemeMetacreator, entitiesSelector } from '../entities';
import { utils } from '../Flash/redux';
import { types as challenges } from '../routes/Challenges/redux';
import { challengeToFiles } from '../routes/Challenges/utils';

import ns from '../ns.json';

import { themes, invertTheme } from '../../utils/themes.js';

export const epics = [
  fetchChallengesEpic,
  fetchUserEpic,
  nightModeEpic,
  updateMyCurrentChallengeEpic
];

export const types = createTypes([
  'onRouteHome',

  'appMounted',
  'analytics',
  'updateTitle',

  createAsyncTypes('fetchChallenge'),
  createAsyncTypes('fetchChallenges'),
  'updateChallenges',
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
export const createEventMetaCreator = ({
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
} = throwIfUndefined) => () => ({
  analytics: {
    type: 'event',
    category,
    action,
    label,
    value
  }
});

export const onRouteHome = createAction(types.onRouteHome);
export const appMounted = createAction(types.appMounted);
export const fetchChallenge = createAction(
  '' + types.fetchChallenge,
  (dashedName, block) => ({ dashedName, block })
);
export const fetchChallengeCompleted = createAction(
  types.fetchChallenge.complete,
  null,
  meta => ({
    ...meta,
    ..._.flow(challengeToFiles, createFilesMetaCreator)(meta.challenge)
  })
);
export const fetchChallenges = createAction('' + types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallenges.complete,
  (entities, result) => ({ entities, result }),
  entities => ({ entities })
);
export const updateChallenges = createAction(types.updateChallenges);
// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

// fetchUser() => Action
// used in combination with fetch-user-epic
export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(
  types.fetchUser.complete,
  ({ result }) => result,
  _.identity
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
  // eventually this should be only in the user object
  currentChallenge: '',
  superBlocks: []
};

export const getNS = state => state[ns];
export const csrfSelector = state => getNS(state).csrfToken;
export const titleSelector = state => getNS(state).title;

export const currentChallengeSelector = state => getNS(state).currentChallenge;
export const superBlocksSelector = state => getNS(state).superBlocks;
export const signInLoadingSelector = state => !getNS(state).isSignInAttempted;

export const usernameSelector = state => getNS(state).user || '';
export const userSelector = createSelector(
  state => getNS(state).user,
  state => entitiesSelector(state).user,
  (username, userMap) => userMap[username] || {}
);

export const themeSelector = _.flow(
  userSelector,
  user => user.theme || themes.default
);

export const isSignedInSelector = state => !!userSelector(state).username;

export const challengeSelector = state => {
  const challengeName = currentChallengeSelector(state);
  const challengeMap = entitiesSelector(state).challenge || {};
  return challengeMap[challengeName] || {};
};

export const previousSolutionSelector = state => {
  const { id } = challengeSelector(state);
  const { challengeMap = {} } = userSelector(state);
  return challengeMap[id];
};

export const firstChallengeSelector = createSelector(
  entitiesSelector,
  superBlocksSelector,
  (
    {
      challengeMap,
      blockMap,
      superBlockMap
    },
    superBlocks
  ) => {
    if (
      !challengeMap ||
      !blockMap ||
      !superBlockMap ||
      !superBlocks
    ) {
      return {};
    }
    try {
      return challengeMap[
        blockMap[
          superBlockMap[
            superBlocks[0]
          ].blocks[0]
        ].challenges[0]
      ];
    } catch (err) {
      console.error(err);
      return {};
    }
  }
);

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
    [combineActions(
      types.fetchChallenge.complete,
      types.fetchChallenges.complete
    )]: (state, { payload }) => ({
      ...state,
      superBlocks: payload.result.superBlocks
    }),
    [challenges.onRouteChallenges]: (state, { payload: { dashedName } }) => ({
      ...state,
      currentChallenge: dashedName
    }),
    [
      combineActions(types.showSignIn, types.fetchUser.complete)
    ]: state => ({
      ...state,
      isSignInAttempted: true
    }),

    [types.challengeSaved]: (state, { payload: { points = 0 } }) => ({
      ...state,
      points
    }),
    [types.delayedRedirect]: (state, { payload }) => ({
      ...state,
      delayedRedirect: payload
    })
  }),
  defaultState,
  ns
);
