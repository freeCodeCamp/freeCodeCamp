import { createAction } from 'redux-actions';

import types from './types';

export const fetchJobs = createAction(types.fetchJobs);
export const fetchJobsCompleted = createAction(
  types.fetchJobsCompleted,
  (currentJob, jobs) => ({ currentJob, jobs })
);

export const findJob = createAction(types.findJob);

// saves to database
export const saveJob = createAction(types.saveJob);
// saves to localStorage
export const saveForm = createAction(types.saveForm);

export const saveCompleted = createAction(types.saveCompleted);

export const clearForm = createAction(types.clearForm);

export const loadSavedForm = createAction(types.loadSavedForm);
export const loadSavedFormCompleted = createAction(
  types.loadSavedFormCompleted
);

export const clearPromo = createAction(types.clearPromo);
export const updatePromo = createAction(
  types.updatePromo,
  ({ target: { value = '' } = {} } = {}) => value
);

export const applyPromo = createAction(types.applyPromo);
export const applyPromoCompleted = createAction(types.applyPromoCompleted);
