import _ from 'lodash';
import {
  composeReducers
} from 'berkeleys-redux-utils';

import { types as userTypes, userReducer } from './user';
import { usernameSelector } from '../redux';

export const ns = 'entities';
export const getNS = state => state[ns];
export const entitiesSelector = getNS;


// entity meta creators
const getEntityAction = _.property('meta.entitiesAction');
export const updateThemeMetacreator = (username, theme) => ({
  entitiesAction: {
    type: userTypes.editUserFlag,
    payload: {
      username,
      flag: 'theme',
      value: theme
    }
  }
});

export const defaultState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {}
};

export const challengeMapSelector = state => getNS(state).challenge || {};
export function makeBlockSelector(block) {
  return state => {
    const blockMap = getNS(state).block || {};
    return blockMap[block] || {};
  };
}
export function makeSuperBlockSelector(name) {
  return state => {
    const superBlock = getNS(state).superBlock || {};
    return superBlock[name] || {};
  };
}

export function selectiveChallengeTitleSelector(state, dashedName) {
  return getNS(state).challenge[dashedName].title;
}

export function portfolioSelector(state, props) {
  const username = usernameSelector(state);
  const { portfolio } = getNS(state).user[username];
  const pIndex = _.findIndex(portfolio, p => p.id === props.id);
  return portfolio[pIndex];
}

export function projectsSelector(state) {
  const blocks = getNS(state).block;
  const challengeNameToIdMap = _.invert(challengeIdToNameMapSelector(state));
  return Object.keys(blocks)
    .filter(key =>
      key.includes('projects') && !key.includes('coding-interview')
    )
    .map(key => blocks[key])
    .map(({ name, challenges, superBlock }) => {
      const projectChallengeDashNames = challenges
        // remove any project intros
        .filter(chal => !chal.includes('get-set-for'));
      const projectChallenges = projectChallengeDashNames
        .map(dashedName => selectiveChallengeTitleSelector(state, dashedName));
      return {
        projectBlockName: name,
        superBlock,
        challenges: projectChallenges,
        challengeNameIdMap: _.pick(
          challengeNameToIdMap,
          projectChallengeDashNames
        )
      };
    });
}

export function challengeIdToNameMapSelector(state) {
  return getNS(state).challengeIdToName || {};
}

export const isChallengeLoaded = (state, { dashedName }) =>
  !!challengeMapSelector(state)[dashedName];

function metaReducer(state = defaultState, action) {
  if (action.meta && action.meta.entities) {
    return {
      ...state,
      ...action.meta.entities
    };
  }
  return state;
}

function entitiesReducer(state = defaultState, action) {
  if (getEntityAction(action)) {
    const { payload: { username, theme } } = getEntityAction(action);
    return {
      ...state,
      user: {
        ...state.user,
        [username]: {
          ...state.user[username],
          theme
        }
      }
    };
  }
  return state;
}

export default composeReducers(
  ns,
  metaReducer,
  entitiesReducer,
  userReducer(defaultState),
);
