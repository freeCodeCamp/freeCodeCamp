import { createAction } from 'redux-actions';

import types from './types';

// step
export const goToStep = createAction(types.goToStep);


// challenges
export const fetchChallenge = createAction(types.fetchChallenge);
export const fetchChallengeCompleted = createAction(
  types.fetchChallengeCompleted,
  (_, challenge) => challenge,
  entities => ({ entities })
);

export const fetchChallenges = createAction(types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallengesCompleted,
  (_, superBlocks) => superBlocks,
  entities => ({ entities })
);

export const updateCurrentChallenge = createAction(
  types.updateCurrentChallenge
);

// map
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);

export const clearFilter = createAction(types.clearFilter);

// files
export const updateFile = createAction(types.updateFile);
export const updateFiles = createAction(types.updateFiles);
