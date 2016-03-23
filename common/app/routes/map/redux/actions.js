import { createAction } from 'redux-actions';

import types from './types';

export const fetchChallenges = createAction(types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallengesCompleted,
  (_, superBlocks) => superBlocks,
  entities => ({ entities })
);

export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);

export const clearFilter = createAction(types.clearFilter);
