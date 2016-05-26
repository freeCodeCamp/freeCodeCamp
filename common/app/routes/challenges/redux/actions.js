import { createAction } from 'redux-actions';
import { updateContents } from '../../../../utils/polyvinyl';

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
export const updateFile = createAction(
  types.updateFile,
  (content, file) => updateContents(content, file)
);

export const updateFiles = createAction(types.updateFiles);

// rechallenge
export const executeChallenge = createAction(types.executeChallenge);
export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameOutput = createAction(types.frameOutput);
export const frameTests = createAction(types.frameTests);
export const runTests = createAction(types.runTests);
export const updateOutput = createAction(types.updateOutput);
export const updateTests = createAction(types.updateTests);
