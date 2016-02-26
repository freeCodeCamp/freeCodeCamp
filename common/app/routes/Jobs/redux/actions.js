import { createAction } from 'redux-actions';

import types from './types';

export const fetchJobs = createAction(types.fetchJobs);
export const fetchJobsCompleted = createAction(
  types.fetchJobsCompleted,
  (currentJob, jobs) => ({ currentJob, jobs })
);

export const findJob = createAction(types.findJob);

export const saveJob = createAction(types.saveJob);
export const saveJobCompleted = createAction(types.saveJobCompleted);

export const saveForm = createAction(types.saveForm);
export const clearForm = createAction(types.clearSavedForm);
export const loadSavedFormCompleted = createAction(
  types.loadSavedFormCompleted
);
