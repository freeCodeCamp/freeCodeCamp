import { fetchJobs, fetchJobsCompleted } from './types';

export default ({ services }) => ({ dispatch, getState }) => next => {
  return function fetchJobsSaga(action) {
    return next(action);
  };
};
