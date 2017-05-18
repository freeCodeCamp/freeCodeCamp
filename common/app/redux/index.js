import { Observable } from 'rx';
import { createTypes, createAsyncTypes } from 'redux-create-types';
import { combineActions, createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import { entitiesSelector } from '../entities';
import fetchUserEpic from './fetch-user-epic.js';
import updateMyCurrentChallengeEpic from './update-my-challenge-epic.js';
import fetchChallengesEpic from './fetch-challenges-epic.js';

import ns from '../ns.json';

export const epics = [
  fetchUserEpic,
  fetchChallengesEpic,
  updateMyCurrentChallengeEpic
];

export const types = createTypes([
  'analytics',
  'updateTitle',
  'updateAppLang',

  createAsyncTypes('fetchChallenge'),
  createAsyncTypes('fetchChallenges'),
  'updateCurrentChallenge',

  'fetchUser',
  'addUser',
  'updateThisUser',
  'showSignIn',
  'updateMyCurrentChallenge',

  'handleError',
  // used to hit the server
  'hardGoTo',
  'delayedRedirect',

  // night mode
  'toggleNightMode',
  'updateTheme',
  'addThemeToBody'
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

export const fetchChallenge = createAction(
  '' + types.fetchChallenge,
  (dashedName, block) => ({ dashedName, block })
);
export const fetchChallengeCompleted = createAction(
  types.fetchChallenge.complete,
  (_, result) => result,
  entities => ({ entities })
);
export const fetchChallenges = createAction('' + types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallenges.complete,
  (entities, results) => ({ entities, results }),
  entities => ({ entities })
);
export const updateCurrentChallenge = createAction(
  types.updateCurrentChallenge
);

// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

// fetchUser() => Action
// used in combination with fetch-user-epic
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
export const updateMyCurrentChallenge = createAction(
  types.updateMyCurrentChallenge,
  (username, currentChallengeId) => ({ username, currentChallengeId })
);

export const updateAppLang = createAction(types.updateAppLang);

// used when server needs client to redirect
export const delayedRedirect = createAction(types.delayedRedirect);

// hardGoTo(path: String) => Action
export const hardGoTo = createAction(types.hardGoTo);

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

export const toggleNightMode = createAction(
  types.toggleNightMode,
  // we use this function to avoid hanging onto the eventObject
  // so that react can recycle it
  () => null
);
// updateTheme(theme: /night|default/) => Action
export const updateTheme = createAction(types.updateTheme);
// addThemeToBody(theme: /night|default/) => Action
export const addThemeToBody = createAction(types.addThemeToBody);

const initialState = {
  title: 'Learn To Code | freeCodeCamp',
  isSignInAttempted: false,
  user: '',
  lang: '',
  csrfToken: '',
  theme: 'default',
  // eventually this should be only in the user object
  currentChallenge: '',
  superBlocks: [],
  areChallengesLoaded: false
};

export const getNS = state => state[ns];
export const langSelector = state => getNS(state).lang;
export const csrfSelector = state => getNS(state).csrfToken;
export const themeSelector = state => getNS(state).theme;
export const titleSelector = state => getNS(state).title;

export const currentChallengeSelector = state => getNS(state).currentChallenge;
export const superBlocksSelector = state => getNS(state).superBlocks;
export const signInLoadingSelector = state => !getNS(state).isSignInAttempted;
export const areChallengesLoadedSelector =
  state => getNS(state).areChallengesLoaded;

export const userSelector = createSelector(
  state => getNS(state).user,
  state => entitiesSelector(state).user,
  (username, userMap) => userMap[username] || {}
);

export const challengeSelector = createSelector(
  currentChallengeSelector,
  state => entitiesSelector(state).challenge,
  (challengeName, challengeMap = {}) => {
    return challengeMap[challengeName] || {};
  }
);

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

const reducer = handleActions(
  {
    [types.updateTitle]: (state, { payload = 'Learn To Code' }) => ({
      ...state,
      title: payload + ' | freeCodeCamp'
    }),

    [types.updateThisUser]: (state, { payload: user }) => ({
      ...state,
      user
    }),
    [types.fetchChallenge.complete]: (state, { payload }) => ({
      ...state,
      currentChallenge: payload.challenge
    }),
    [types.fetchChallenges.complete]: (state, { payload }) => ({
      ...state,
      superBlocks: payload.results,
      areChallengesLoaded: payload.results.length > 0
    }),
    [types.updateCurrentChallenge]: (state, { payload = '' }) => ({
      ...state,
      currentChallenge: payload
    }),
    [types.updateAppLang]: (state, { payload = 'en' }) =>({
      ...state,
      lang: payload
    }),
    [types.updateTheme]: (state, { payload = 'default' }) => ({
      ...state,
      theme: payload
    }),
    [combineActions(types.showSignIn, types.updateThisUser)]: state => ({
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
  },
  initialState
);

reducer.toString = () => ns;

export default reducer;
