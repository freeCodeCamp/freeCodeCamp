import { Observable } from 'rx';
import { normalize, Schema, arrayOf } from 'normalizr';

import { fetchJobsCompleted } from './actions';
import { fetchJobs } from './types';
import { handleError } from '../../../redux/types';

const job = new Schema('job', { idAttribute: 'id' });

export default ({ services }) => ({ dispatch }) => next => {
  return function fetchJobsSaga(action) {
    if (action.type !== fetchJobs) {
      return next(action);
    }

    const { payload: id } = action;
    const data = { service: 'jobs' };
    if (id) {
      data.params = { id };
    }

    return services.readService$(data)
      .map(jobs => {
        if (!Array.isArray(jobs)) {
          jobs = [jobs];
        }

        const { entities, result } = normalize(
          { jobs },
          { jobs: arrayOf(job) }
        );


        return fetchJobsCompleted(
          result.jobs[0],
          {
            entities: entities.job,
            results: result.jobs
          }
        );
      })
      .catch(error => {
        return Observable.just({
          type: handleError,
          error
        });
      })
      .doOnNext(dispatch);
  };
};
