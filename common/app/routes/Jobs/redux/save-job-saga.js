import { Observable } from 'rx';

import { saveJobCompleted } from './actions';
import { saveJob } from './types';

import { handleError } from '../../../redux/types';

export default ({ services }) => ({ dispatch }) => next => {
  return function saveJobSaga(action) {
    if (action.type !== saveJob) {
      return next(action);
    }
    const { payload: job } = action;

    return services.createService$({
      service: 'jobs',
      params: { job }
    })
    .map(job => saveJobCompleted(job))
    .catch(error => Observable.just({
      type: handleError,
      error
    }))
    .doOnNext(dispatch);
  };
};
