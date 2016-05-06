import { createAction } from 'redux-actions';

import types from './types';
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);

export const clearFilter = createAction(types.clearFilter);
